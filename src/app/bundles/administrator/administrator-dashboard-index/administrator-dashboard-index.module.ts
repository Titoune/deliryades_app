import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdministratorDashboardIndexPage } from './administrator-dashboard-index.page';

const routes: Routes = [
  {
    path: '',
    component: AdministratorDashboardIndexPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdministratorDashboardIndexPage]
})
export class AdministratorDashboardIndexPageModule {}
