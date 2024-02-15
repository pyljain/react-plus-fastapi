# Serving a React front-end with Python (FAST API)

## Setup the frontend in the `ui` directory

```sh
npx create-react-app ui
```

## Build and run the UI
```sh
cd ui
npm run build
```

## Setup the Python backend
```sh
python3 -m venv venv
source ./venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## Notes

To make this work, you'll need to point the FastAPI route to serve StaticFiles pointing to the built React app.

```python
app.mount("/", StaticFiles(directory="./ui/build"))
```