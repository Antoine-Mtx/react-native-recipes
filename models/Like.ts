class Like {
    id: number;
    userId: number;
    recipeId: number;
    createdAt: Date;
  
    constructor(id: number, userId: number, recipeId: number, createdAt: Date) {
      this.id = id;
      this.userId = userId;
      this.recipeId = recipeId;
      this.createdAt = createdAt;
    }
  }
  
  export default Like;
  