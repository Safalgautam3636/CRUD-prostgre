import {Pool} from 'pg';
export const pool=new Pool({
    user:'postgres',
    host:'localhost',
    password:process.env.PW,
    database:'typescriptdatabase',
    port:5432
})