from model import Item

#mongoDB driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://lean:lean@mongo-service:27017')

database= client.WareHousePCincha
collection = database.Products

async def fetch_one_item(identifier):
    document = await collection.find_one({"identifier":identifier})
    return document

async def fetch_item_cat(catego):
    document = await collection.find_one({"catego":catego})
    return document
    
async def fetch_all_item():
    items = []
    cursor= collection.find({})
    async for document in cursor:
        items.append(Item(**document))

    return items

async def create_item(item):
    document = item
    result = await collection.insert_one(document)
    return result

async def update_item(identifier,stock): 
    await collection.update_one({"identifier":identifier},{"$set":{"stock":stock}})
    document = await collection.find_one({"identifier":identifier})
    return document

async def remove_item(identifier):
    await collection.delete_one({"identifier":identifier})
    return True
