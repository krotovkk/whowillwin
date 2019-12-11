import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatButtonToggleModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSidenavModule, MatCardModule } from "@angular/material";

const Material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSidenavModule,
  MatCardModule
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
