import tiktoken
from transformers import pipeline
import threading
import time
import os
import sys
import tensorflow as tf
import os

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # Suppress all logs except errors
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'  # Disable oneDNN custom operations
tf.get_logger().setLevel('ERROR')


def count_tokens_from_using_tiktoken(string):
    # add here wait for the encoding response and meanwhile print a line of "loading..." that adding '.' each 0.2seconds
    encoding = tiktoken.get_encoding("cl100k_base")
    num_tokens = len(encoding.encode(string))
    return num_tokens

# Initialize the summarizer pipeline once
summarizer = pipeline("summarization", model="facebook/bart-large-cnn", framework="pt")  # Use PyTorch backend

def summary_message(text):
    summary_result = summarizer(text, max_length=25, min_length=0, do_sample=False)
    summary_text = summary_result[0]['summary_text']
    return summary_text

input_text = "Yesterday, I went to the park with my friends, and we played soccer for an hour before having lunch together. are you want to join us next week?"
count_tokens = count_tokens_from_using_tiktoken(input_text)
print(f"count_tokens: {count_tokens}")

if count_tokens > 25:
    try:
        print(summary_message(input_text))
    except Exception as e:
        print(f"An error occurred: {e}")
else:
    print(f"count_tokens is {count_tokens} (smaller then 25), no summary needed")
