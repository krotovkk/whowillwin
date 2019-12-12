import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatButtonToggleModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSidenavModule, MatCardModule, MatTableModule } from "@angular/material";

const Material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule
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
