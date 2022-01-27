const PORT = 8000
const express = require("express")
const pg = require("pg")

app = express()

const client = new pg.Client({
    host: "localhost",
    database: "my_tracker",
    user: "postgres",
    password: "cortsolo2006",
    port: 5432,
})

async function read_db(){
    await client.connect()
    var display_table
    
    display_table = await client.query('SELECT * FROM environment_issues ORDER BY entry_id DESC LIMIT 1')
    await client.end()

    console.log("updated...")
    return display_table.rows
}

//module.exports = client


app.get('/', (req, res) => {
    res.json(read_db)
})

app.listen(PORT, () => console.log(`Server running on the PORT ${PORT}...`))