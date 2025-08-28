const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(()=> {
    console.log("connection successful")
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
} 

let allChats = [
    {
    from: "Kratika",
    to: "Priya",
    msg: "Hii, How r Uh ?.",
    created_at: new Date()
    },
     {
    from: "Krati",
    to: "Priya",
    msg: "Hii Whats up...",
    created_at: new Date()
    },
     {
    from: "Ana",
    to: "Kana",
    msg: "Hello.",
    created_at: new Date()
    },
     {
    from: "Riya",
    to: "Priya",
    msg: "Hiie.",
    created_at: new Date()
    },
     {
    from: "Kanak",
    to: "Panak",
    msg: "Good.",
    created_at: new Date()
    },
];

Chat.insertMany(allChats);

