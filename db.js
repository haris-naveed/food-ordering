const mongoose=require("mongoose");
var mongoURL='mongodb+srv://taimoor:hassan@cluster0.3k8qufw.mongodb.net/meren-pizzas';
mongoose.connect( mongoURL, {  useUnifiedTopology: true,
    useNewUrlParser: true
  }
    );
    var db= mongoose.connection;
    db.on('connected',()=>{
        console.log("connection successfull");
    });
    db.on('error',()=>{
        console.log("connection fail");
    });
    module.exports= mongoose;
