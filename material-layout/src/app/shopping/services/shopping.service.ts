import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ShopItem} from "../models/ShopItem.model";
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  // console.log(this.http.get('https://fakestoreapi.com/products/1').subscribe(c => console.log(c)))

  url: string = "https://fakestoreapi.com/products";
  constructor(private http: HttpClient) { }

  // getAllItems(): ShotItem[] {
  //   return this.http.get(this.url).subscribe(i => console.log(i))
  // }
  shoppingItem$ = this.http.get<ShopItem[]>(this.url)
  .pipe(
      map(i =>
        i.map(j => ({
          ...j,
          price: j.price * 1.5
        }) as ShopItem),
      tap(data => console.log('Products:', JSON.stringify(data))),
      // catchError(err => alert(err))
    ));



}
