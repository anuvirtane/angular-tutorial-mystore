import { Component, OnInit, Input } from '@angular/core';
//input mukaan, jotta voidaan saada product dataa


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
// input dekoraattori kertoo, että propertyn "product" arvo tulee komponentin vanhemmasta, eli product-list-komponentista
  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}
