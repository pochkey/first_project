import { Component } from '@angular/core';

@Component({
  selector: 'app-sedan',
  templateUrl: './sedan.component.html',
  styleUrls: ['./sedan.component.css']
})
export class SedanComponent {
  car_model = "Honda City";
  price = 25000;
  tax = 1500;
  onRoadPrice = this.price + this.tax;

}
