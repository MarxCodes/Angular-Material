import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  shopItem$ = this.ss.shoppingItem$;

  constructor(private ss: ShoppingService) { }

  ngOnInit() {
    // this.shopItem$ = this.ss.getAllItems();
    // console.log('working,', this.shopItem$)
    console.log(this.shopItem$);
  }

}
