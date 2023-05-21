const mongoose = require('mongoose');




// Mongoose Connection :

const main = async () => {
    await mongoose.connect(process.env.MONGO_URL);
};

main().then((res) => {
    console.log("DB Connected");
}).catch((errLog) => {
    console.log('An error occurred while connecting to Database');
});




// Mongoose Schema :

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    gender: String,
    date: String,


});



// Mongoose Model :

exports.userModel = mongoose.model('user', userSchema);