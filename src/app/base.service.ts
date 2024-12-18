import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  apiUrl="http://127.0.0.1:8000/api/"
  drinksSub=new BehaviorSubject<any>(null)

  constructor(private http:HttpClient) { 
    this.downloadDrinks()
  }

  private downloadDrinks(){
    this.http.get(this.apiUrl+"drinks").subscribe(
      (res:any)=>this.drinksSub.next(res.data)
    )
  }

  getDrinks(){
    return this.drinksSub;
  }

  createDrink(drink:any){
    console.log(drink)
    this.http.post(this.apiUrl+"newdrink", drink).forEach(
      ()=>this.downloadDrinks()
    )
  }
 updateDrink(drink:any){
  console.log(drink)
    this.http.put(this.apiUrl+"updatedrink/"+drink.id, drink).forEach(
      ()=>this.downloadDrinks()
    )
  }
  deleteDrink(drink:any){
    this.http.delete(this.apiUrl+"deletedrink/"+drink.id).forEach(
      ()=>this.downloadDrinks()
    )
  }



}
