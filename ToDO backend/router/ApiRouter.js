let express = require("express");
let path = require("path");
let mongoose = require("mongoose");
let ApiRouter =express.Router();
var jsonwebtoken = require('jsonwebtoken');

//load models
  let todo =  require('../model/todoModel');
  let user =  require('../model/userModel');



ApiRouter.get('/test',(req,res)=>{
    res.send("hello");
})



//adding new user
    ApiRouter.post('/register',(req,res)=>{
        console.log(req.body);

        user.find({name:req.body.name},(error,result)=>{

            // console.log(error);
            if(result.length == 0)
            {
                //there is no user with same name
                let newuser = user({
                    name: req.body.name,
                    password : req.body.password,
                })
                newuser.save(error=>{
                    if (!error){
                            user.findOne({name:req.body.name},(error,result)=>{
                                if(!error)
                                {
                                    console.log(result);
                                    res.send(result)
                                }
                            })
                    }else
                    {
                        res.send({message:'error' ,details: error });
                    }
                });
            }else
            {
                //threr is user with same name
                res.send({message: 'error' , details: 'username is exit before'});
            }
        })
    })


//login with user

ApiRouter.post('/login',(req,res)=>{
    console.log(req.body);
    user.findOne({name:req.body.name , password: req.body.password},(error,result)=>{
            if(!error){
                if(!result)
                    {
                        //error in  user name or password
                        res.send({
                            message: 'error',
                            details: 'there is no user with this information'
                        });
                    }else
                    {
                        console.log(result);
                        res.send(result);
                    }
            }else
            {
                console.log("ppppppppppppppp");
                res.send({
                    message: 'error',
                    details: 'there is no user with this information'
                });
            }
    })
});




//add new todo


ApiRouter.post('/Todo/new',(req,res)=> {
    let newtodo = todo({
        name: req.body.name,
        note: req.body.note,
        done: req.body.done,
        user: req.body.user
    });
    newtodo.save(error=>{
        if(!error){
            todo.findOne({name:req.body.name , note:req.body.note},(error,result)=>{
                if(!error){
                    res.send(result);
                }else {
                    res.send({
                        message: 'error',
                        details: 'error in saving this todo'
                    });
                }
            })
        }else
        {
            res.send({
                message: 'error',
                details: 'error in saving this todo'
            });
        }
    })
});




//getall todo

ApiRouter.get('/todo',(req,res)=>{
    todo.find({})
        .populate('user')
        .then(todos=>{
                res.send(todos);
        })
        .catch(err=>{
            res.send({
                message: 'error',
                details: 'error in fetching data'
            })
        })
})


//get todos to  user
ApiRouter.post('/todo/you',(req,res)=>{
    todo.find({user: req.body.user})
        .then(todos=>{
            res.send(todos);
        })
        .catch(error=>{
            res.send({
                message: 'error',
                details: 'error in fetching data'
            });
        })
})


//get todo list
ApiRouter.get('/todo/:id' , (req,res)=>{
    todo.findOne({_id:req.params.id})
        .then(obj=>res.send(obj))
        .catch(err=>{
            res.send({
                message: 'error',
                details: 'error in fetching data'
            });
        })
})

//delete todo
ApiRouter.delete('/todo/:id',(req,res)=>{

    todo.deleteOne({_id:req.params.id}, error =>{
        if(!error){
            console.log("deleted");
            res.send({
                message : 'success',
                details : 'deleted'
            });
        }else {
            res.send({
                message: 'error',
                details: 'error in delete this data'
            });
        }
    })
})

//update the status
ApiRouter.put('/todo',(req,res)=>{
    todo.update({_id:req.body._id},{'$set':{done:true}},(error) =>{
        if(!error)
        {
            res.send({
                message : 'success',
                details : 'updated'
            });
        }else
        {
            res.send({
                message: 'error',
                details: 'error in update this data'
            });
        }
    } )
})


//re do in todo status
ApiRouter.put('/todo/redo',(req,res)=>{
    todo.update({_id:req.body._id},{'$set':{done:false}},(error) =>{
        if(!error)
        {
            res.send({
                message : 'success',
                details : 'updated'
            });
        }else
        {
            res.send({
                message: 'error',
                details: 'error in update this data'
            });
        }
    } )
})


//get one todo
ApiRouter.get('/todo/:id',(req,res)=>{
    todo.findOne({_id:req.params.id})
        .then(obj =>{
            console.log(obj);
            res.send(obj);
        } )
        .catch(error => res.send({
            message: 'error',
            details: 'error in fetch this data'
        }))
})







module.exports = ApiRouter;
