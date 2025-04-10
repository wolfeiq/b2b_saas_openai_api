from fastapi import FastAPI
from mangum import Mangum 
from typing import Union
from fastapi import FastAPI, HTTPException, Request
#from PurePitchAIOpenAI import generate_branding_snippet
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
import argparse


OPENAI_API_KEYS = ""
client = OpenAI(api_key='lol')

MAX_INPUT_LENGTH = 150

app = FastAPI()
handler = Mangum(app)
MAX_INPUT_LENGTH = 150

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
def validate_input_length(prompt: str):
    if len(prompt) >= MAX_INPUT_LENGTH:
        raise HTTPException(
            status_code=400,
            detail=f"Input length is too long. Must be under {MAX_INPUT_LENGTH} characters.",
        )

@app.get("/generate_snippet")
async def generate_snippet_api(prompt: str):
    validate_input_length(prompt)
    snippet = generate_branding_snippet(prompt)
    return {"snippet": snippet}

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input

    if validate_length(user_input):
        generate_branding_snippet(user_input)
    else:
        raise ValueError(
            f"Input length is too long. Must be under {MAX_INPUT_LENGTH}. Submitted input is {user_input}"
        )
    
def validate_length(prompt: str) -> bool:
    return len(prompt) <= MAX_INPUT_LENGTH


def generate_branding_snippet(prompt: str) -> str:
    
    enriched_prompt = f"In a formal tone, gnerate sales offer for the startup/company {prompt} that is no longer than 150 characters. Use no hashtags or emojis. Be straight to the point and highlight the company's services."

    response = client.chat.completions.create(
  model="gpt-3.5-turbo",
    max_tokens=32,
  messages=[
    {"role": "system", "content": "You are a salesperson, doing cold outreach videos on LinkedIn to pitch your company's services and offers."},
    {"role": "user", "content": enriched_prompt}
  ]
)

    branding_text: str = response.choices[0].message.content
    branding_text = branding_text.strip()
    last_char = branding_text[-1]
    if last_char not in {".", "!", "?"}:
        branding_text += "..."
    return branding_text


if __name__ == "__main__":
    main()

