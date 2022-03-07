export class Ingredient
{
  public name:string;
  public amount: number;
  constructor(props) {
    // super(props);
    this.name=props.name
    this.amount=props.amount
  }
}
