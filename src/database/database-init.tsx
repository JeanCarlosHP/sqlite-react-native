import { DatabaseConnection } from './database-connection';

var db: null | any = null
export default class DatabaseInit {
  constructor() {
        db = DatabaseConnection.getConnection()
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
        console.log('Foreign keys turned on')
    );
        this.InitDb()
    }
  
  InitDb() {
    var sql = [
      `create table if not exists users (
          id integer primary key autoincrement,
          user text,
          password text
      );`
    ];
    
    db.transaction(
      (      tx: { executeSql: (arg0: string) => void; }) => {
        for (var i = 0; i < sql.length; i++) {
            console.log("execute sql : " + sql[i]);
            tx.executeSql(sql[i]);
        }
      }
    );
  }
}