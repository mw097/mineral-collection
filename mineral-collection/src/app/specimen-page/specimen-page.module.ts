import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecimenPageComponent } from './specimen-page.component';
import { LayoutModule } from '../common/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [{
  path: ":specimenId",
  component: SpecimenPageComponent,
}];

@NgModule({
  declarations: [
    SpecimenPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
  ], 
  exports: [SpecimenPageComponent],
})
export class SpecimenPageModule {  

}
