import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatButtonToggleModule } from "@angular/material";

const Material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonToggleModule
]

@NgModule({
  imports: [
    Material
  ],
  exports: [
    Material
  ]
})
export class MaterialModule { }
