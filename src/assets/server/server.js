import records from "./routes/record.js"

// eslint-disable-next-line no-undef
const express = require("express");
const app = express();
// eslint-disable-next-line no-undef
const cors = require("cors")


const PORT = process.env.PORT || 5050;
app.use(cors())
app.use(express.json())
app.use("/record", records);

app.listen(PORT, ()=>{
    console.log(`Listening to port: ${PORT}`)
})