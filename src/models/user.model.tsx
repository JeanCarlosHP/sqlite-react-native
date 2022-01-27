export class User {
  constructor(user?: string | undefined, password?: string | undefined) {

    this.user = user;
    this.password = password;
  }

  public user: string| undefined;
  public password: string| undefined;
}
