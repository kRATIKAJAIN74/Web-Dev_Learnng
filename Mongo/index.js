const mongoose = require('mongoose');



main()
.then((res)=> {
    console.log("connection successful");
})
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete('68aaf5e8811a7197164e54f4')
.then((res)=> {
    console.log(res);
})
.catch((err)=> {
    console.log(err);
});


// User.updateOne({name: "Neeraj"}, {age: 50})
// .then((res)=> {
//     console.log(res);
// })
// .catch((err)=> {
//     console.log(err);
// });

// User.find({age: {$gt: 47}}).then((res)=>{
//     console.log(res);
// }).catch((err) => {
//     console.log(err)
// });

// User.insertMany([
//     {name:"Kratika", email: "Jkratika8@gmail.com", age: 19},
//     {name:"Ishika", email: "jainishika072@gmail.com", age: 21},
//     {name:"Neeraj", email: "neerajjain992722@gmail.com", age: 48}
// ]).then((res)=> {
//     console.log(res);
// });






// const user2 = new User({
//     name: "Eve",
//     email: "eve@yahoo.com",
//     age: 23
// });
// user2.save().then((res)=> {
//     console.log(res);
// })
// .catch((err)=> {
//     console.log(err);
// });