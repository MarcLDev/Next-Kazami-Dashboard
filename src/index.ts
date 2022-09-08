import { config } from 'dotenv';
import { createApp } from './utils/createApp';
import './database/index';
config();

const PORT = process.env.PORT || 3001;

async function main() {
    console.log(`Running in ${process.env.ENVIROMENT} mode.`);
    try{    
        const app = createApp();
        app.listen(PORT, () => console.log(`Running at port ${PORT}`));
    }catch(err){
        console.log(err)
    }
}


// import https from 'https';

// setInterval(() => {
//     https.get('https://Kazami-Support.marcl025.repl.co/', function(res){
//         console.log('Status Code: ', res.statusCode);
//     });
// }, 30000);


main();