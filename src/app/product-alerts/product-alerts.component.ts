import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//input mukaan, jotta voidaan saada product dataa


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
// input dekoraattori kertoo, että propertyn "product" arvo tulee komponentin vanhemmasta, eli product-list-komponentista (selektori on product-listin templaten sisällä)
  @Input() product;
  //event emitter lähettää eventin, kun notify:n arvo muuttuu
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
