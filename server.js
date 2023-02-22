// Test for roblox studio
const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch')

// Get requests
app.get('/users/:id', async (req,res) => {
    // fetch request:
    let p = await fetch(`https://users.roblox.com/v1/users/${req.params.id}`)
    let response = await p.json()
    
    res.json(response)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})