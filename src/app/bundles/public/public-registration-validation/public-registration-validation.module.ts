import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PublicRegistrationValidationPage } from './public-registration-validation.page';

const routes: Routes = [
  {
    path: '',
    component: PublicRegistrationValidationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PublicRegistrationValidationPage]
})
export class PublicRegistrationValidationPageModule {}
