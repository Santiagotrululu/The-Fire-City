import mysql from 'mysql'

const dbConfig = {
  host: '104.167.215.213',
  user: 'u2_AChGure8sA',
  password: '=Vy0J^Fd0Q8bEgZ.dUJ=vb1G',
  database: 's2_TheFireCity',
}

export function query(sql: string, params: any[]): Promise<any> {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(dbConfig)
    connection.connect((err) => {
      if (err) {
        reject(err)
        return
      }
      connection.query(sql, params, (error, results) => {
        connection.end()
        if (error) {
          reject(error)
        } else {
          resolve(results)
        }
      })
    })
  })
}

