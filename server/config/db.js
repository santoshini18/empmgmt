const mongoose = require("mongoose");
const db = "mongodb+srv://santoshinid18:puKtyLAqllFLihs5@santoshini.lpt6ony.mongodb.net/?retryWrites=true&w=majority"; 

const connectDB = async() => {
    try{
        mongoose.set("strictQuery", true)
        await mongoose.connect(db,{
            useNewUrlParser: true,
            
        })
    }
    catch (err) {
        console.error(err.message);
        process.exit(1)
    }
}

module.exports = connectDB






