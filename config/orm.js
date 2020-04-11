const connection = require('./connection');

class ORM { 
  constructor(connection){
    this.connection = connection;
  }

  printQuestionMarks(numberOfValues){
    const questionMarks = [];

    for (var i = 0; i < numberOfValues; i++) {
      questionMarks.push("?");
    }

    return questionMarks.join(', ');
  }


  innerJoin(colsToSelect, tableOne, tableTwo, tableOneCol, tableTwoCol, where1, whereCol, whereVal){
    let queryString = `SELECT * FROM ?? INNER JOIN ?? ON ?? = ??`;
    console.log('table1 ',tableOne)
    console.log('where = ', where1)
    if (where1 === 'true'){
      
      queryString += ` WHERE ?? = ?`
      console.log("where if",queryString);
      console.log('table 1', tableOne, ' table 2 ',tableTwo, ' tableOneCol ', tableOneCol , ' tableTwoCol ', tableTwoCol, ' where col ', whereCol, ' whereval ', whereVal)
      return this.connection.query(queryString,[tableOne,  tableTwo, tableOneCol, tableTwoCol, whereCol, whereVal])
    }
    else{
      console.log("no Where",queryString)
      console.table(this.connection.query(queryString,[tableOne,  tableTwo, tableOneCol, tableTwoCol]))
      return this.connection.query(queryString,[tableOne,  tableTwo, tableOneCol, tableTwoCol])
    }
  }


  create(table, columns, values){
    let queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES (${this.printQuestionMarks(values.length)})`
  
    return this.connection.query(queryString,[table, ...values])
  }

  delete(table, delColName, delColVal){

    let queryString = 'DELETE FROM ?? WHERE ?? = ?'
    return this.connection.query(querystring, [delColName,delColVal])
  }
 
}

module.exports = new ORM(connection);