db.createUser(
    {
        user: "developer",
        pwd: "developer",
        roles : [
            {
                role: "readWrite",
                db: "project"
            }
        ]
    }
);