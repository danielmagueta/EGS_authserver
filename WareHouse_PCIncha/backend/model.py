from pydantic import BaseModel

class Item(BaseModel):
    identifier : str
    name: str
    catego: str
    price: int
    releaseDate: str
    warehouseSection: str
    stock: int
    description: str