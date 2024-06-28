import tiktoken
from transformers import pipeline

def count_tokens_from_using_tiktoken(string):
    encoding = tiktoken.get_encoding("cl100k_base")
    num_tokens = len(encoding.encode(string))
    return num_tokens

def summary_message(text):
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    summary_result = summarizer(text, max_length=50, min_length=10, do_sample=False)
    summary_text = summary_result[0]['summary_text']
    return summary_text

input = "How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today? How can I assist you today? "
print(count_tokens_from_using_tiktoken(input))

try:
    print(summary_message(input))
except Exception as e:
    print(f"An error occurred: {e}")
    print("Please install the backwards-compatible tf-keras package with `pip install tf-keras`.")
