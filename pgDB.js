const pg = require("pg")

const client = new pg.Client({
    host: "localhost",
    database: "my_tracker",
    user: "postgres",
    password: "cortsolo2006",
    port: 5432,
})

//module.exports = client


async function createTable(table){
    await client.connect()
    await client.query(`CREATE TABLE ${table}(id SERIAL PRIMARY KEY NOT NULL, title VARCHAR(50) NOT NULL)`)
    await client.end()

    console.log(`${table} data inserted..`)
}

async function dropTable(table){
    await client.connect()
    await client.query(`DROP TABLE ${table} CASCADE`)
    await client.end()

    console.log(`${table} deleted..`)
}

async function insertData(table, column, data){
    await client.connect()

    const putClass = `INSERT INTO ${table} (${column}) VALUES ($1)`

    await client.query(putClass, [data])
    await client.end()

    console.log(`${data} data inserted..`)
}

async function read_db(table){
    await client.connect()
    
    var display_table    
    display_table = await client.query(`SELECT * FROM ${table} ORDER BY id DESC LIMIT 10`)
    
    await client.end()

    console.log("updated...")
    console.log(display_table.rows)
}

//createTable('new_data')
//insertData('new_data', 'title', 'animal')
read_db('new_data')
//dropTable()