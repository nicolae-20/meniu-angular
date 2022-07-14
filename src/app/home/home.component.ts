// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = "Welcome, user"
  buttonDisable: boolean = true;
  color: string = "green";
  color2: string = "red";
  constructor() { }

  changeButton() {
    this.title = "New title";
    this.color = this.color2;
  }

  ngOnInit(): void {
  }

}
