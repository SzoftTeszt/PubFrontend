import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent {
  drinks:any
  columns=['drink','amount','type_id','type', 'package', 'package_id']
  newDrink:any={}

  constructor(private base:BaseService){
    this.base.getDrinks().subscribe(
      (res)=>this.drinks=res
    )
  }

  createDrink(){
    this.base.createDrink(this.newDrink)
    this.newDrink={}
  }
  
  updateDrink(drink:any){
    this.base.updateDrink(drink)
  }
  deleteDrink(drink:any){
    this.base.deleteDrink(drink)
  }




}
