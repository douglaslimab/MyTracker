const pg = require("pg")

const client = new pg.Client({
    host: "localhost",
    database: "my_tracker",
    user: "postgres",
    password: "cortsolo2006",
    port: 5432,
})

//module.exports = client

//  drop
//  insert
//  select

async function createTable(){
    await client.connect()

    await client.query('CREATE TABLE test(id SERIAL PRIMARY KEY NOT NULL, title VARCHAR(50) NOT NULL)')

    await client.end()

    console.log('done..')
}


async function read_db(){
    await client.connect()
    var display_table
    
    display_table = await client.query('SELECT * FROM environment_issues ORDER BY entry_id DESC LIMIT 1')
    await client.end()

    console.log("updated...")
    console.log(display_table.rows)
}

read_db()