import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserUsersIndexPage } from './user-users-index.page';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';

const routes: Routes = [
  {
    path: '',
    component: UserUsersIndexPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MecImageCacheDirectiveModule
  ],
  declarations: [UserUsersIndexPage]
})
export class UserUsersIndexPageModule {}
