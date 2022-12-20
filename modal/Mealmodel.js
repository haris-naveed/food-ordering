const mongoose = require('mongoose');
const pizzaSchema= mongoose.Schema(
    {
        id:{type:String },
        name:{type:String   },
        description:{type:String   },
        price:{type:String    },
        
    },{
        timestamps:true,
    }
)
const pizzaModel=mongoose.model('pizzas',pizzaSchema);
module.exports= pizzaModel;