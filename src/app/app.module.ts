import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { GadgetComponent } from './gadget/gadget.component';
import { PetComponent } from './pet/pet.component';
import { CarComponent } from './vehicle/car/car.component';
import { BikeComponent } from './vehicle/bike/bike.component';
import { SedanComponent } from './vehicle/car/sedan/sedan.component';
import { SuvComponent } from './vehicle/car/suv/suv.component';


@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    GadgetComponent,
    PetComponent,
    CarComponent,
    BikeComponent,
    SedanComponent,
    SuvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
