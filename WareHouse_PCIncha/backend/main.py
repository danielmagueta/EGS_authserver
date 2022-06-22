from http.client import HTTPResponse
import requests
from fastapi import FastAPI, HTTPException , Request
from fastapi.middleware.cors import CORSMiddleware
from model import Item
from datetime import datetime
import random, secrets

app = FastAPI()


from database  import ( 
    fetch_item_cat,
    fetch_one_item,
    fetch_all_item,
    create_item,
    update_item,
    remove_item,
)

origins = ['https://localhost:8000']

app.add_middleware(
    CORSMiddleware,
    allow_origins= origins,
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"],
)


#Descomentar para utilizar o serviço de Autenticação
#@app.middleware("http")
#async def validate(request: Request, call_next):
 #   url = 'http://danimag-authserver.k3s/validate'
 #Descomentar este para funcional normalmente(deixar o segundo "headers" comentado, usar esse apenas para funcionamento hardcoded)
   #  headers = {'Content-Type':'application/json', 'Authorization':request.headers["Authorization"]}
   #Descomentar este para usar apenas para funcionamento hardcoded)
   # #headers = {'Content-Type':'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTY1MTYzMjE0NSwiaWF0IjoxNjUxNTk2MTQ1fQ.OkhLmhimSDoIRqIiRO42kaqkk3ON3BTeZzskSXyevps'}
    #responseAuth = requests.get(url, headers=headers)

   # if responseAuth:
    #    response = await call_next(request)
     #   return response
    #else:
     #   raise HTTPException(403, "Wrong token") 

@app.get("/")
def read_root():
    return {"Ping":"Pong"}

@app.post("/api/inventory/admin/Item")
async def post_item(item: Item):
    r = await fetch_one_item(item.identifier)
    if r:
        raise HTTPException(409,f"there is already an Item with is identifier{item.identifier}")   
    response = await create_item(item.dict())
    if  response:
        return  HTTPException(200,"item add in bd")
    raise HTTPException(400, "Something went wrong / Bad Request")

@app.put("/api/inventory/admin/Item{identifier}", response_model = Item)
async def put_item(identifier:str,stock:int):
    response = await update_item(identifier,stock)
    if response:
        return response
    raise HTTPException(404,f"there is not Item with is identifier{identifier}")

@app.delete("/api/inventory/admin/Item{identifier}")
async def delete_item(identifier):
    response = await remove_item(identifier)
    if response:
        return "Sucessfully deleted item!"
    raise HTTPException(404,f"there is not Item with is identifier{identifier}")

@app.get("/api/inventory/costumer/searchItem")
async def post_search():
    response = await fetch_all_item()
    if response:
        return response
    raise HTTPException(404,f"there is not Items")

@app.get("/api/inventory/costumer/searchItem{identifier}", response_model = Item)
async def post_search(identifier):
    response = await fetch_one_item(identifier)
    if response:
        return response
    raise HTTPException(404,f"there is not Item with is identifier{identifier}")

@app.get("/api/inventory/costumer/searchItem/catego{catego}", response_model = Item)
async def post_search(catego:str):
    response = await fetch_item_cat(catego)
    if response:
        return response
    raise HTTPException(404,f"there is not Item in this category{catego}")

@app.put("/api/inventory/costumer/Item{identifier}", response_model = Item)
async def put_item(identifier:str,stock:int):
    response = await update_item(identifier,stock)
    if response:
        return response
    raise HTTPException(404,f"there is not Item with is identifier{identifier}")
