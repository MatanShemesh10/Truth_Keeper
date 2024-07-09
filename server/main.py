import openai
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import re

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

# Your OpenAI API key should be kept secret and not exposed in the code
openai.api_key = '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'

# Model for user input
class UserInput(BaseModel):
    user_input: str

# Chat history to maintain context
chat_history = []

# Now, ask GPT about the source and accuracy of its response
source_query = "what is the percent of accuracy of your response? in addition to answer the user, write to the console to much accuracy_pattern = r'(\d+)%' source_pattern = r'The information is based on (.+)'"
chat_history.append({'role': 'system', 'content': source_query})

@app.get("/")
def index():
    return {"hello world"}

@app.post("/chat")
async def chat_with_bot(user_input: UserInput):
    global chat_history
    try:
        # Add user input to chat history
        chat_history.append({'role': 'user', 'content': user_input.user_input})

        # Get the response to the user's question
        response = openai.ChatCompletion.create(
            model="ft:gpt-3.5-turbo-0613:matan:train-data-2:9Ifdqgfp",
            messages=chat_history
        )
        
        response_text = response.choices[0].message['content']
        
        # Add GPT's response to chat history
        chat_history.append({'role': 'assistant', 'content': response_text})

    
        source_response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=chat_history
        )
        
        source_response_text = source_response.choices[0].message['content']

        # accuracy_pattern = r'(\d+)%'
        # source_pattern = r"The information is based on (.+)"
        
        # acc_match = re.search(accuracy_pattern, source_response_text)
        # source_match = re.search(source_pattern, source_response_text)
        
        # acc_p = acc_match.group(1) if acc_match else "Accuracy not specified"
        # info_source = source_match.group(1) if source_match else "Source not specified"

    
        # print(f"acc_match {acc_match}")
        # print(f"source_match {source_match}")
        # print(f"acc_p {acc_p}")
        # print(f"info_source {info_source}")

        # Add source response to chat history
        chat_history.append({'role': 'assistant', 'content': source_response_text})

        return {
            "bot_response": response_text,
            "source_and_accuracy": source_response_text
        }

    except Exception as error:
        return {
            "bot_response": {error.error['message']}
        }
        
