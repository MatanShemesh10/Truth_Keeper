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
source_query = "TruthKeeper is a fake news detector bot. Return answer of true or false. Evaluate the truthfulness of this statement and provide your confidence in the accuracy of this evaluation. Express your confidence as a percentage."
chat_history.append({'role': 'system', 'content': source_query})

@app.post("/chat/")
async def chat_with_bot(user_input: UserInput):
    global chat_history
    try:
        # Add user input to chat history
        chat_history.append({'role': 'user', 'content': user_input.user_input})

        # Get the response to the user's question
        response = openai.ChatCompletion.create(
            model="ft:gpt-3.5-turbo-0125:matan:31-03:98uB0CR0",
            messages=chat_history,
            max_tokens=100, # Adjust based on the complexity of the response you expect
            temperature=0.7 # A lower temperature results in more deterministic responses
        )
        
        response_text = response.choices[0].message['content']
        
        # Add GPT's response to chat history
        chat_history.append({'role': 'assistant', 'content': response_text})

    
        source_response = openai.ChatCompletion.create(
            model="ft:gpt-3.5-turbo-0125:matan:31-03:98uB0CR0",
            messages=chat_history,
            max_tokens=100, # Adjust based on the complexity of the response you expect
            temperature=0.7 # A lower temperature results in more deterministic responses
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
        
