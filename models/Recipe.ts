class Recipe {
    id: number;
    title: string;
    description: string;
    ingredients: string[];
    steps: string[];
    imageUrl: string;
    authorId: number;
    createdAt: Date;
  
    constructor(
      id: number,
      title: string,
      description: string,
      ingredients: string[],
      steps: string[],
      imageUrl: string,
      authorId: number,
      createdAt: Date,
    ) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.ingredients = ingredients;
      this.steps = steps;
      this.imageUrl = imageUrl;
      this.authorId = authorId;
      this.createdAt = createdAt;
    }
  }
  
  export default Recipe;
  