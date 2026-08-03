import mongoose from 'mongoose';
import { DB_Name } from '../constants.js';

const connectDb = async () =>{
    try {
        console.log(process.env.MongoDB_URI);
        console.log(DB_Name);
        const connectionInstance = await mongoose.connect(`${process.env.MongoDB_URI}/${DB_Name}`);
        console.log(`MongoDb connection established at port : ${connectionInstance}`); 
    } catch (error) {
        console.error("MongDB connection error", error);
        process.exit(1);
    }
}

export default connectDb;