from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Implement this to handle question from the frontend
# @app.get("/search")
# def search(q: str):
#     print(f"Query is {q}")
#     return "test"

app.mount("/", StaticFiles(directory="./ui/build"))