import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

app.use(express.json())

app.get('/clientes', (req, res) => {
    const sql = "SELECT * FROM clientes;"
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })
})

app.get('/clientes/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM clientes WHERE ClienteID = ?;"
    conexao.query(sql, id, (erro, resultado) => {
        if (erro) {
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })
})

app.post('/clientes', (req, res) => {
    const pet = req.body
    const sql = "INSERT INTO clientes SET ?;"
    conexao.query(sql, pet, (erro, resultado) => {
        if (erro) {
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(201).json(resultado)
        }
    })
})

app.delete('/clientes/:id', (req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM clientes WHERE ClienteID = ?;"
    conexao.query(sql, id, (erro, resultado) => {
        if (erro) {
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })
})

app.put('/clientes/:id', (req, res) => {
    const id = req.params.id
    const pet = req.body
    const sql = "UPDATE clientes SET ? WHERE ClienteID = ?;"
    conexao.query(sql, [pet, id], (erro, resultado) => {
        if (erro) {
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })
})

export default app

