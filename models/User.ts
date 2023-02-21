class User {
    id: number;
    username: string;
    email: string;
    password: string;
    avatarUrl: string;
    createdAt: Date;
    
    constructor(
      id: number,
      username: string,
      email: string,
      password: string,
      avatarUrl: string,
      createdAt: Date,
    ) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.password = password;
      this.avatarUrl = avatarUrl;
      this.createdAt = createdAt;
    }
  }
    
  export default User;
    