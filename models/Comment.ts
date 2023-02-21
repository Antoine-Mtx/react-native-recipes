class Comment {
    id: number;
    text: string;
    authorId: number;
    recipeId: number;
    createdAt: Date;
  
    constructor(
      id: number,
      text: string,
      authorId: number,
      recipeId: number,
      createdAt: Date,
    ) {
      this.id = id;
      this.text = text;
      this.authorId = authorId;
      this.recipeId = recipeId;
      this.createdAt = createdAt;
    }
  }
  
  export default Comment;
  