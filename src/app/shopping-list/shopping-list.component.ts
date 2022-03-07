import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient({name:'Apples',amount:5}),
    new Ingredient({name:'Oranges',amount:12}),
    new Ingredient({name:'Tomatoes',amount:15}),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
