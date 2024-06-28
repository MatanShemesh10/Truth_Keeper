import openai
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import json
import json
import os
import re


# Your OpenAI API key should be kept secret and not exposed in the code
openai.api_key = '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'

prediction_results = []
real_results = []

# Function to calculate confidence
def calculate_confidence(logprob):
    probability = np.exp(logprob)
    print(f"probability: {probability}")
    return probability * 100  # Convert to percentage

def store_result(question_results, confidence_score, index):
    prediction_results.append({
        "number": index,
        "results": question_results,
        "confidence_score": confidence_score
    })
    print(f"Results for index {index} stored successfully!")

# Function to sanitize file name
def sanitize_filename(filename):
    return re.sub(r'[<>:"/\\|?*]', '_', filename)

# Define the function to save results
def save_results(model_name):
    # Sanitize the model name to create a valid file name
    sanitized_model_name = sanitize_filename(model_name)
    
    # Ensure the directory exists
    os.makedirs('results', exist_ok=True)
    
    # Define the file path
    file_path = os.path.join('results', sanitized_model_name + '_results.json')
    print(f"Saving results to {file_path}")
    
    # Write the results to the file
    with open(file_path, 'w') as file:
        json.dump(prediction_results, file)
        print("Results saved successfully!")

    
def send_req(question, index, model_name):
    source_query = "TruthKeeper is a fake news detector bot. Return answer of True or False."
    response = openai.ChatCompletion.create(
                model=model_name,
                messages=[
                    {
                        "role": "system",
                        "content": source_query
                    },
                    {
                        "role": "user",
                        "content": question
                    }
                ],
                max_tokens=150,
                temperature=0.7,
                logprobs=True,  # Request log probabilities
                top_logprobs=5
            )
    top_two_logprobs = response.choices[0].logprobs.content[0].top_logprobs
    confidence_score = []
    question_results = []
    for i, logprob in enumerate(top_two_logprobs):
        # print(f"Output token {i}: {logprob.token}")
        question_results.append(logprob.token)

        # print(f"logprobs: {i}: {logprob.logprob}")
        confidence_score.append(calculate_confidence(logprob.logprob))
        # print(f"probability {i}: {confidence_score[i]}")
        print(f"Results for index {index}: {question_results[i]}")

    store_result(question_results, confidence_score, index)


def start(file_name, model_name):
    print("Starting...")
    source_jsonl = file_name

    with open(source_jsonl, 'r', encoding='utf-8-sig') as file:
        lines = file.readlines()
    
    for index, line in enumerate(lines):
            # Load JSON object from string
            print("Loading JSON object from string...")
            data = json.loads(line)

            # Iterate over each message in the 'messages' list
            for message in data["messages"]:
                if message["role"] == "user":  # Check if the role is 'user'
                    # Replace HTTPS links in the 'content' field
                    send_req(message["content"], index, model_name)
                elif message["role"] == "assistant":
                    real_results.append({
                        "index": index,
                        "result": message["content"]
                    })

    save_results(model_name)


def compare_results(model_name):

    # Compare the first result of each object in the detailed_results with the result in simple_results
    accuracy = []
    for index, (detailed, simple) in enumerate(zip(prediction_results, real_results)):

        # Compare with the 'result' in simple_results
        is_match = detailed["results"][0] == simple["result"]
        accuracy.append({
            "index": index,
            "is_match": is_match
        })
        # print(f"Comparison for index {detailed['number']}: {is_match}")

    count_matches = 0
    for result in accuracy:
        if result["is_match"]:
            count_matches += 1

    print(f"Number of matches: {count_matches}")
    actual_accuracy = (count_matches / len(accuracy)) * 100
    print(f"Actual Accuracy: {actual_accuracy}%")
    # The sentence to add at the beginning of the file
    additional_sentence = f"The number of matches is: {count_matches}\nActual Accuracy: {actual_accuracy}%\n"

     # Sanitize the model name to create a valid file name
    sanitized_model_name = sanitize_filename(model_name)
    
    # Define the file path
    file_path = os.path.join('results', sanitized_model_name + '_results.json')

    # Read the existing content of the file
    with open(file_path, 'r') as file:
        content = file.read()

    # Prepend the additional sentence to the content
    new_content = additional_sentence + content

    # Write the new content back to the file
    with open(file_path, 'w') as file:
        file.write(new_content)



start(file_name='model/500_test_data.jsonl',model_name="ft:gpt-3.5-turbo-0613:matan:train-data-2:9Ifdqgfp")
compare_results(model_name="ft:gpt-3.5-turbo-0613:matan:train-data-2:9Ifdqgfp")