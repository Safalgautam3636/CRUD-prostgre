"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodos = exports.getTodos = exports.createTodo = void 0;
const database_1 = require("../database");
const createTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield database_1.pool.query("INSERT INTO users(name,email) VALUES ($1,$2)", [req.body.name, req.body.email]);
        return res.send("finally created a new todo");
    }
    catch (e) {
        console.log(e);
    }
});
exports.createTodo = createTodo;
const getTodos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = yield database_1.pool.query("SELECT * from users");
        return res.status(201).send(query.rows);
    }
    catch (e) {
        console.log(e);
    }
});
exports.getTodos = getTodos;
const updateTodos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = (req.params.id);
        const { email, name } = req.body;
        yield database_1.pool.query("UPDATE users set name=($1) ,email=($2) WHERE id=($3)", [name, email, todoId]);
        return res.json({ update: "sucess!!" });
    }
    catch (err) {
        console.log(err);
    }
});
exports.updateTodos = updateTodos;
const deleteTodo = (req, res, next) => {
    const todoId = parseInt(req.params.id);
    const query = database_1.pool.query("DELETE from users where id=$1", [todoId]);
    return res.json("Delete sucessful");
};
exports.deleteTodo = deleteTodo;
