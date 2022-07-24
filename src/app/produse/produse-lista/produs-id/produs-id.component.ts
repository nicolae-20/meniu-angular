import { Component, Input, OnInit } from '@angular/core';
import { ProductClass } from 'src/app/models/product';

@Component({
  selector: 'app-produs-id',
  templateUrl: './produs-id.component.html',
  styleUrls: ['./produs-id.component.scss']
})
export class ProdusIdComponent implements OnInit {

  // @Input() product?: ProductClass

  constructor() { }

  ngOnInit(): void {
  }

}
