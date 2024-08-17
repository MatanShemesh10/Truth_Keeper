import openai
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import uvicorn
import tiktoken
from transformers import pipeline
import os
import tensorflow as tf

# Environment and TensorFlow setup
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # Suppress TensorFlow logging (1: INFO, 2: WARNING, 3: ERROR)
tf.get_logger().setLevel('ERROR')

# OpenAI API key setup (Keep this secret in production)
openai.api_key = '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'

# Initialize FastAPI app
app = FastAPI()

# Setup CORS (Cross-Origin Resource Sharing)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Initialize the summarizer pipeline once
summarizer = pipeline("summarization", model="facebook/bart-large-cnn", framework="pt")  # Use PyTorch backend

# Model for user input
class UserInput(BaseModel):
    user_input: str

# Helper Functions
def calculate_confidence(logprob):
    probability = np.exp(logprob)
    return probability * 100  # Convert to percentage

def count_tokens_from_using_tiktoken(string):
    encoding = tiktoken.get_encoding("cl100k_base")
    num_tokens = len(encoding.encode(string))
    return num_tokens

def summary_message(text):
    summary_result = summarizer(text, max_length=25, min_length=0, do_sample=False)
    summary_text = summary_result[0]['summary_text']
    return summary_text

def count_and_summary_user_input(input_text):
    count_tokens = count_tokens_from_using_tiktoken(input_text)
    print(f"tokens counter of user input: {count_tokens}")
    input_text_summary = input_text
    if count_tokens > 25:
        try:
            input_text_summary = summary_message(input_text)
        except Exception as e:
            print(f"An error occurred: {e}")
    else:
        print(f"count_tokens is {count_tokens} (smaller than 25), no summary needed")
    
    return count_tokens, input_text_summary

# Source query string for GPT-3.5 Turbo
source_query = "TruthKeeper is a fake news detector bot. Return answer of True or False. you cannot return something else but 'True' or False'."

# Endpoint Definitions
@app.post("/chat/")
async def send_request(user_input: UserInput):
    try:
        count_tokens, updated_input_text = count_and_summary_user_input(user_input.user_input)
        print(updated_input_text)
        response = openai.ChatCompletion.create(
            model="ft:gpt-3.5-turbo-0613:matan:train-data-2:9Ifdqgfp",
            messages=[
                {
                    "role": "system",
                    "content": source_query
                },
                {
                    "role": "user",
                    "content": updated_input_text
                }
            ],
            max_tokens=150,
            temperature=0.7,
            logprobs=True,  # Request log probabilities
            top_logprobs=5
        )
        top_two_logprobs = response.choices[0].logprobs['content'][0]['top_logprobs'][:2]
        confidence_score = []
        for i, logprob in enumerate(top_two_logprobs):
            print(f"logprob #{i}")
            print(f"Output token {i}: {logprob.token}")
            print(f"logprobs: {i}: {logprob.logprob}")
            confidence_score.append(calculate_confidence(logprob.logprob))
            print(f"probability {i}: {confidence_score[i]}")

        return {
            "bot_response": response.choices[0]['message']['content'],
            "confidence_score": confidence_score
        }
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        print("#############################################")

# Main Block to run the server
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
