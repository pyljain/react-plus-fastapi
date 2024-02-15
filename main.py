from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

# Serve index.html for the root URL
@app.get("/")
async def index():
    return FileResponse('./ui/build/index.html')
   
# Implement this to handle question from the frontend
@app.get("/search")
def search(q: str):
    print(f"Query is {q}")
    return "test"

app.mount("/", StaticFiles(directory="./ui/build"))