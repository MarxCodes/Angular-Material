import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'material-layout';
  // mat-badge = 'hidden';
  counter: number = 0;

  // constructor(private http: HttpClient) {
  // }
  // ngOnInit() {
  //     console.log(this.http.get('https://fakestoreapi.com/products/1').subscribe(c => console.log(c)))
  //   }
  addIt() {
    this.counter++
  }
}
