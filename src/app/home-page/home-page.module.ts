import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatIconModule, MatOptionModule, MatRippleModule, MatSelectModule } from '@angular/material';
import { PlanetSelectComponent } from '../components/planet-select/planet-select.component';
import { SearchUnitComponent } from '../components/search-unit/search-unit.component';
import { VehicleSelectComponent } from '../components/vehicle-select/vehicle-select.component';
import { HomePageComponent } from './home-page.component';
import { routing } from './home-page.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatRippleModule,
    MatIconModule,
  ],
  declarations: [
    PlanetSelectComponent,
    VehicleSelectComponent,
    SearchUnitComponent,
    HomePageComponent
  ]
})
export class HomePageModule { }

