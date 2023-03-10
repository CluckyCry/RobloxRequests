// Test for roblox studio
import express from 'express'
const app = express()
const port = process.env.PORT || 3000;
import fetch from 'node-fetch'

// Get requests
app.use(express.static('./public'))

app.get('/users/:id', async (req,res) => {
    // fetch request:
    let p = await fetch(`https://users.roblox.com/v1/users/${req.params.id}`)
    let response = await p.json()
    
    res.json(response)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})