import openai
from openai import OpenAI
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import uvicorn

# Initialize FastAPI app
app = FastAPI()

# Setup CORS (Cross-Origin Resource Sharing)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000/","https://truth-keeper-git-main-ariel-cohens-projects-359ba03e.vercel.app/","https://truth-keeper-inky.vercel.app"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["GET","POST"],  # Allows all methods
    allow_headers=["Content-Type", "Authorization"],  # Allows all headers
)

# # Your OpenAI API key should be kept secret and not exposed in the code
# openai.api_key = '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'

client = OpenAI(
    api_key='sk-9cSwF2j6h9X2ucpdxGwRbuF-cxB7GMXS3QHcEDZDa8T3BlbkFJi9_MvNuVKvUVU5_1cUS1EKEa_eaSsinVX_tWTABXAA'
)
# Model for user input
class UserInput(BaseModel):
    user_input: str


# Now, ask GPT about the source and accuracy of its response
source_query = "TruthKeeper is a fake news detector bot. Return answer of True or False."

@app.post("/chat/")
async def send_request(user_input: UserInput):
    
    try:
        print(user_input.user_input)
        response = client.chat.completions.create(
            model="ft:gpt-3.5-turbo-0613:matan:train-data-2:9Ifdqgfp",
            messages=[
                {
                    "role": "system",
                    "content": source_query
                },
                {
                    "role": "user",
                    "content": user_input.user_input
                }
            ],
            max_tokens=150,
            temperature=0.7,
            logprobs=True,  # Request log probabilities
            top_logprobs=5
        )
        top_two_logprobs = response.choices[0].logprobs.content[0].top_logprobs
        confidence_score = []
        for i, logprob in enumerate(top_two_logprobs):
            print(f"Output token {i}: {logprob.token}")
            print(f"logprobs: {i}: {logprob.logprob}")
            confidence_score.append(calculate_confidence(logprob.logprob))
            print(f"probability {i}: {confidence_score[i]}")

            
        return {
            "bot_response": response.choices[0].message.content,
            "confidence_score": confidence_score
        }
    except Exception as e:
        print(f"An error occurred: {e}")
        

# Function to calculate confidence
def calculate_confidence(logprob):
    probability = np.exp(logprob)
    return probability * 100  # Convert to percentage

# Assuming 'response' contains a 'choices' element with logprobs
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
