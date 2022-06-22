db.createUser(
    {
        user:"lean",
        pwd:"lean",
        roles: [
            {
                role: "readWrite",
                db: "WareHousePCincha"
            }
        ]   
    }
);

db.createCollection("Products");