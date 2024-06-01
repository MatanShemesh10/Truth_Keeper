import openai
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import uvicorn
import json

# Your OpenAI API key should be kept secret and not exposed in the code
openai.api_key = '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'

prediction_results = []
real_results = []

# Function to calculate confidence
def calculate_confidence(logprob):
    probability = np.exp(logprob)
    return probability * 100  # Convert to percentage

def store_result(question_results, confidence_score, index):
    prediction_results.append({
        "number": index,
        "results": question_results,
        "confidence_score": confidence_score
    })

def save_results():
    with open('results.json', 'w') as file:
        json.dump(prediction_results, file)
    
def send_req(question, index):
    source_query = "TruthKeeper is a fake news detector bot. Return answer of True or False."
    response = openai.ChatCompletion.create(
                model="ft:gpt-3.5-turbo-0613:matan:train-data-2:9Ifdqgfp",
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
        print(f"Output token {i}: {logprob.token}")
        question_results.append(logprob.token)

        print(f"logprobs: {i}: {logprob.logprob}")
        confidence_score.append(calculate_confidence(logprob.logprob))
        print(f"probability {i}: {confidence_score[i]}")

    store_result(question_results, confidence_score, index)


def start():
    source_jsonl = 'code/10_test_data.jsonl'

    with open(source_jsonl, 'r', encoding='utf-8-sig') as file:
        lines = file.readlines()
    
    for index, line in enumerate(lines):
            # Load JSON object from string
            data = json.loads(line)

            # Iterate over each message in the 'messages' list
            for message in data["messages"]:
                if message["role"] == "user":  # Check if the role is 'user'
                    # Replace HTTPS links in the 'content' field
                    send_req(message["content"], index)
                elif message["role"] == "assistant":
                    real_results.append({
                        "index": index,
                        "result": message["content"]
                    })

    save_results()


def compare_results():

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


start()
compare_results()