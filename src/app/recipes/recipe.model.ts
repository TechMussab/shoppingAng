export class Recipe
{
  public name:string;
  public description:string;
  public imagePath:string;

  constructor(props) {
    // super(props);
    this.name=props.name
    this.description=props.description
    this.imagePath=props.imagePath
  }

}
