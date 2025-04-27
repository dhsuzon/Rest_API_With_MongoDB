const mongoose = require("mongoose");
const config = require("./config")


const dbURL = config.db.url;
mongoose.connect(dbURL)
.then(()=>{console.log(`database is connected this url:${dbURL}`);})
.catch((ere)=>{console.log(`database is not connected show this error:${ere} ${process.exit(1)}`)});