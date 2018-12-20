import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserDiscussionsIndexPage } from './user-discussions-index.page';
import {DesignModule} from '../../../design/design.module';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';

const routes: Routes = [
  {
    path: '',
    component: UserDiscussionsIndexPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesignModule,
    RouterModule.forChild(routes),
    MecImageCacheDirectiveModule
  ],
  declarations: [UserDiscussionsIndexPage]
})
export class UserDiscussionsIndexPageModule {}
