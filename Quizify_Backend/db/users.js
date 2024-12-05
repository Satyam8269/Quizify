const { v4:uuid } = require("uuid");


const userdata = {
    "users": [
        {
            id: uuid(),
            username: "satyamsharma",
            password: "ss1234",
            emailId: "ss@gmail.com"
        },
        {
            id: uuid(),
            username: "prakashsakari",
            password: "ps12345",
            emailId: "pk@gmail.com"
        }
    ]
} 

module.exports = userdata;
