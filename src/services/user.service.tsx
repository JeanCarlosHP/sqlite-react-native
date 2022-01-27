import { User } from '../models/user.model';
import { DatabaseConnection } from '../database/database-connection';

const db = DatabaseConnection.getConnection()

export default class UserService {
  static addData(param: User) {
    return new Promise(() => db.transaction(
      tx => {
        tx.executeSql(`insert into users (user, password) values (${param.user}, ${param.password})`)
      }
    ))
  }
}
