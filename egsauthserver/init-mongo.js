db.createUser(
    {
        user:"danimag",
        pwd:"danimag",
        roles: [
            {
                role: "readWrite",
                db: "authserver"
            }
        ]   
    }
);

db.createCollection("User_DB");
