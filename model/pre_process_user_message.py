import tiktoken
from transformers import pipeline

# Suppress TensorFlow warnings and logs
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # Suppress TensorFlow logging (1: INFO, 2: WARNING, 3: ERROR)
import tensorflow as tf
tf.get_logger().setLevel('ERROR')

def count_tokens_from_using_tiktoken(string):
    encoding = tiktoken.get_encoding("cl100k_base")
    num_tokens = len(encoding.encode(string))
    return num_tokens

# Initialize the summarizer pipeline once
summarizer = pipeline("summarization", model="facebook/bart-large-cnn", framework="pt")  # Use PyTorch backend

def summary_message(text):
    summary_result = summarizer(text, max_length=50, min_length=10, do_sample=False)
    summary_text = summary_result[0]['summary_text']
    return summary_text

input_text = "How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today? "
print(count_tokens_from_using_tiktoken(input_text))

try:
    print(summary_message(input_text))
except Exception as e:
    print(f"An error occurred: {e}")
