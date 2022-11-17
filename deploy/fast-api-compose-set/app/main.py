import os.path
import uuid
from fastapi import FastAPI, UploadFile
from .yolov5.detect import run
import uvicorn
app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("//findPlant")
async def find_plant_kind(file: UploadFile):

    content = await file.read()
    upload_dir = '/code/app/yolov5/data/'
    filename = f"{str(uuid.uuid4())}.jpg"
    result_path = upload_dir + filename
    with open(result_path, "wb") as fp:
        fp.write(content)
    result = run(source=result_path)
    os.remove(result_path)
    return {"plantName" : result}
    # result = run(source = file)
    # return result
    # return {"filename" : file.filename}
