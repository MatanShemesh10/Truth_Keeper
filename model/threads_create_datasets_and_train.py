import concurrent.futures
import requests
import openai
import csv
import json
import os
import numpy as np
from collections import defaultdict
import tiktoken
from transformers import pipeline


openai.api_key = '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'

def csv_to_jsonl(source_csv):
    # path_to_file = "full_ans.csv"
    # output_path = 'full_ans.jsonl'
    dest_jsonl = source_csv.replace(".csv", "_jsonl.jsonl")


    with open(source_csv, 'r', newline='', encoding='utf-8-sig') as csv_file:
        csv_reader = csv.reader(csv_file)

        with open(dest_jsonl, 'w', encoding='utf-8-sig') as jsonl_file:
            for row in csv_reader:
                json_str = row[0]
                json_obj = json.loads(json_str)
                jsonl_file.write(json.dumps(json_obj) + '\n')

    print(f"Conversion complete. The JSONL file is saved as '{dest_jsonl}'.")

def count_tokens_from_using_tiktoken(string):
    encoding = tiktoken.get_encoding("cl100k_base")
    num_tokens = len(encoding.encode(string))
    return num_tokens

def count_tokens_from_using_openai(text):
    openai.api_key = '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'

    try:
        response  = openai.Completion.create(
        model="gpt-3.5-turbo-instruct",
        prompt = text
        )
        return response.usage
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

def summarizer(text):
    text_len = len(text)
    # print(f"Length of the text before: {text_len} characters")
    count_tokens_text = count_tokens_from_using_tiktoken(text)
    # print(f'Number of tokens before: {count_tokens_text}')

    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    summary_result = summarizer(text, max_length=100, min_length=10, do_sample=False)
    summary_text = summary_result[0]['summary_text']

    # print(f"Summary:\n{summary_text}")
    response_length = len(summary_text)
    # print(f"Length of the summarization response: {response_length} characters")
    count_tokens_summarization = count_tokens_from_using_tiktoken(summary_text)
    # print(f'Number of tokens after summarization: {count_tokens_summarization}')
    # print(f'Shorter = {count_tokens_summarization < count_tokens_text}')
    # print("---------------------------")

    return summary_text

def summarize_csv(csv_source):
    csv_target = csv_source.replace(".csv", "_summarized.csv")
    dropped_lines_counter = 0  # Initialize a counter for dropped lines

    with open(csv_source, 'r', encoding='utf-8-sig') as infile, open(csv_target, 'w', newline='', encoding='utf-8-sig') as outfile:
        reader = csv.reader(infile)
        writer = csv.writer(outfile)
        row_count = 0
        for row in reader:
            row_count += 1
            if row_count % 100 == 0:
                print(f'I finish to summarize {row_count} rows!')
            try:
                data = json.loads(row[0])  # Adjust index if needed
            except json.JSONDecodeError:
                # Skip rows that cannot be decoded into JSON
                continue
            messages = data["messages"]

            keep_row = True  # Flag to determine whether to keep the current row
            for message in messages:
                if message["role"] == "user":
                    if len(message["content"]) < 1024:
                        # Assuming summarizer returns a string summary
                        message["content"] = summarizer(message["content"])
                    else:
                        # If a user's message is too long, mark the row to be dropped
                        keep_row = False
                        dropped_lines_counter += 1
                        break  # No need to process further messages in this row

            if keep_row:
                # Write the modified data back as a JSON string
                writer.writerow([json.dumps(data)])

    print(f"summarize_csv function done and create the file {csv_target} , Dropped {dropped_lines_counter} rows due to long messages. number of rows = {row_count}")
    return csv_target

def invert_binary_values(csv_source, col_name):
    # Temporary list to store updated rows
    updated_rows = []

    # Open the source CSV file for reading
    with open(csv_source, 'r', encoding='utf-8') as infile:
        reader = csv.DictReader(infile)
        fieldnames = reader.fieldnames

        # Check if the specified column name exists in the CSV
        if col_name not in fieldnames:
            raise ValueError(f"Column '{col_name}' does not exist in the CSV file.")

        # Iterate over each row and invert the binary values in the specified column
        for row in reader:
            if row[col_name] == '1':
                row[col_name] = '0'
            elif row[col_name] == '0':
                row[col_name] = '1'
            updated_rows.append(row)

    # Open the same file (or a different file) for writing the updated content
    with open(csv_source, 'w', newline='', encoding='utf-8') as outfile:
        writer = csv.DictWriter(outfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(updated_rows)

def clean_text(text):
    if isinstance(text, str):
            cleaned_text = text.encode('ascii', 'ignore').decode('ascii')
            return cleaned_text
    else:
            return text
def csv_dataset_to_suitable_format(csv_source, contentColName="", labelColName=""):
    # Define the target CSV file name
    csv_target = csv_source.replace(".csv", "_suitable_format.csv")

    # Open the source CSV for reading and the target CSV for writing
    with open(csv_source, 'r', encoding='utf-8-sig') as infile, open(csv_target, 'w', newline='', encoding='utf-8-sig') as outfile:
        # Create CSV reader and writer objects
        reader = csv.DictReader(infile)
        writer = csv.writer(outfile)
        row_count = 0
        # Iterate over each row in the source CSV
        for row in reader:
            row[contentColName] = clean_text(row[contentColName])
            row_count += 1  # Increment the counter for each row
            # Prepare the structured message
            structured_message = {
                "messages": [
                    {
                        "role": "system",
                        "content": "TruthKeeper is a fake news detector bot. Return answer of True or False."
                    },
                    {
                        "role": "user",
                        "content": row[contentColName] if contentColName in row else ""
                    },
                    {
                        "role": "assistant",
                        "content": "False" if labelColName in row and (row[labelColName] == '0' or row[labelColName] == "FAKE") else ("True" if labelColName in row and (row[labelColName] == '1' or row[labelColName] == "REAL") else "")
                    }
                ]
            }
            # Convert the structured message to JSON and write it to the target CSV
            writer.writerow([json.dumps(structured_message)])

    # Return the path to the transformed target CSV file
    print(f'The csv dataset ({csv_source}) converted successfully to the suitable format ({csv_target}), number of rows = {row_count}')
    return csv_target



def process_input(csv_source):
    contentColName = "Text"  # Replace with the actual content column name
    labelColName = "Labels"  # Replace with the actual label column name
    csv_target_suitable_format =  csv_dataset_to_suitable_format(csv_source, contentColName, labelColName)

    csv_target = summarize_csv(csv_target_suitable_format)

    csv_to_jsonl(csv_target)

    return "done!"

def main(inputs):
    # List of inputs for the function
    with concurrent.futures.ThreadPoolExecutor() as executor:
        results = list(executor.map(process_input, inputs))
    for result in results:
        print(result)

if __name__ == "__main__":
    inputs = []
    for i in range(5):
        inputs.append(f'D:/Final_project_drive/code/ariel/chunk_{i+1}.csv')
    main(inputs)
