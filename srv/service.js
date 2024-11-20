const cds = require('@sap/cds');
 
 
module.exports = async ( srv) => {
    srv.on('CREATE', 'Books', async (req) => {
        await cds.run(INSERT.into('mydb.Books').entries(req.data));
        console.log("dfgh",req.data);
        
        return cds.run(SELECT.from('mydb.Books').where({BookName : req.data.BookName}))
    });
}