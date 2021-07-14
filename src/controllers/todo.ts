import { RequestHandler } from "express-serve-static-core";
import {pool} from '../database';
import { QueryResult } from "pg";
export const createTodo:RequestHandler=async(req,res,next)=>{
    try{
        const query:QueryResult=await pool.query("INSERT INTO users(name,email) VALUES ($1,$2)",[req.body.name,req.body.email]);
        return res.send("finally created a new todo")
    }
    catch(e){
        console.log(e)
    }
}
export const getTodos:RequestHandler=async(req,res,next)=>{
    try{
        const query:QueryResult=await pool.query("SELECT * from users");
        return res.status(201).send(query.rows);
    }
    catch(e){
        console.log(e)
    }
    
}
export const updateTodos:RequestHandler=async(req,res,next)=>{
    try{
        const todoId=(req.params.id);
    const {email,name}=req.body;
    await pool.query("UPDATE users set name=($1) ,email=($2) WHERE id=($3)",
    [name,email,todoId])  
    return res.json({update:"sucess!!"});
    }
    catch(err){
        console.log(err);
    }
}
export const deleteTodo:RequestHandler=(req,res,next)=>{
    const todoId=parseInt(req.params.id);
    const query=pool.query("DELETE from users where id=$1",[todoId]);
    return res.json("Delete sucessful")
}