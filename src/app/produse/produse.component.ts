import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produse',
  templateUrl: './produse.component.html',
  styleUrls: ['./produse.component.scss']
})
export class ProduseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}
