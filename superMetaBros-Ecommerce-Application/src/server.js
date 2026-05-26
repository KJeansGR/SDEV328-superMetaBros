import dotenv from 'dotenv';
import app from './app.js';

//read environment variables
dotenv.config();



const port = process.env.PORT;



app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}/smb`);
});

