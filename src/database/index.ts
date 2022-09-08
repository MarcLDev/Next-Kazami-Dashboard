import mongoose from 'mongoose';
const mongodbpassword = process.env.MONGOOSE_PASSWORD

mongoose
    .connect(`mongodb+srv://Kazami:${mongodbpassword}@kazamicluster01a.byh8b.mongodb.net/Data`)
    .then(() => console.log('Connected to Database'))
    .catch((err) => console.log(err));

