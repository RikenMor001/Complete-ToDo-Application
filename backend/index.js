const { todo } = require("./db");
const { createToDo } = require("./types");
const { updateToDo } = require("./types");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());


app.post('/todo' , async function(req, res)
{
    const createPayLoad = req.body;
    const verifyPayLoad = createToDo.safeParse(createPayLoad);

    if (!verifyPayLoad.success)
    {
        res.status(411).json({
            msg: "incorrect inputs"
        })
    }
    await todo.create({
        title: createPayLoad,
        description: createPayLoad, 
        completed: false
    })
    res.json({
        msg: "Todo Created"
    })
})

app.get('/todos', async function(req, res){
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put('/completed', async function(req,res){
    const updatePayLoad = req.body;
    const verifyUpdatePayload = updateToDo.safeParse(updatePayLoad)
    if(!verifyUpdatePayload.success)
    {
        res.status(411).json({
            message:"You sent wrong inputs"
        })
        return
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })
})
app.listen(3000);