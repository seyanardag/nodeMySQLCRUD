
const express = require("express");
const app = express();
const router = express.Router();
const connection = require("./connection");

router.get("/todos",async (req,res)=>{

    const sql = 'SELECT * FROM todos';
    try {
        const [result] = await connection.query(sql);
         console.log(result);
         res.status(200).send(result);
     } catch (error) {
         console.log(error);
         res.status(400),send("VERİ ALMA HATA İLE SONUÇLANDI");
     }
})


router.get("/add", async (req,res)=>{
    const name = req.body.name;
    const description = req.body.description;

    const sql = 'INSERT INTO todos (name, description) VALUES (?,?)';
    const data = [name, description];
    try {
       const result = await connection.query(sql, data);
        console.log(result);
        res.status(200).send("EKLEME BAŞARILI");
    } catch (error) {
        console.log(error);
        res.status(400),send("EKLEME HATA İLE SONUÇLANDI");
    }
})

router.post('/delete/:id',(req,res)=>{
    const id = req.params.id;
    const sql = 'DELETE FROM todos WHERE id=?';

    try {
        const result = connection.query(sql,id);
        console.log(result);
        res.status(200).send("SİLME BAŞARILI");
    } catch (error) {
        console.log(error);
        res.status(400),send("SİLME HATA İLE SONUÇLANDI");
    }
})

router.post("/update",async (req,res)=>{

    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    
    const sql = 'UPDATE todos SET name=?, description=? WHERE id=?';
    const data = [name, description, id];
    try {
       const result = await connection.query(sql, data);
        console.log(result);
        res.status(200).send("GÜNCELLEME BAŞARILI");
    } catch (error) {
        console.log(error);
        res.status(400),send("GÜNCELLEME HATA İLE SONUÇLANDI");
    }
})

module.exports = router;