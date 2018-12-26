import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {AdministratorMenuComponentModule} from './menus/administrator-menu/administrator-menu.component.module';
import {PublicMenuComponentModule} from './menus/public-menu/public-menu.component.module';
import {SharedMenuComponentModule} from './menus/shared-menu/shared-menu.component.module';
import {SharedBugReportCreateFormComponentModule} from './forms/shared-bug-report-create-form/shared-bug-report-create-form.component.module';
import {SharedProfileUpdateFormComponentModule} from './forms/shared-profile-update-form/shared-profile-update-form.component.module';
import {SharedAppAuthorizationsComponentModule} from './forms/shared-app-authorizations/shared-app-authorizations.component.module';
import {SharedPasswordUpdateFormComponentModule} from './forms/shared-password-update-form/shared-password-update-form.component.module';
import {AdministratorUserUpdateFormComponentModule} from './forms/administrator-user-update-form/administrator-user-update-form.component.module';
import {UserMenuComponentModule} from './menus/user-menu/user-menu.component.module';
import {UserEventsDayViewComponentModule} from './user-events-day-view/user-events-day-view.component.module';
import {UserUserViewComponentModule} from './user-user-view/user-user-view.component.module';
import {AdministratorUserCreateFormComponentModule} from './forms/administrator-user-create-form/administrator-user-create-form.component.module';
import {UserPollCreateFormComponentModule} from './forms/user-poll-create-form/user-poll-create-form.component.module';
import {UserEventUpdateFormComponentModule} from './forms/user-event-update-form/user-event-update-form.component.module';
import {UserEventCreateFormComponentModule} from './forms/user-event-create-form/user-event-create-form.component.module';
import {UserPollUpdateFormComponentModule} from './forms/user-poll-update-form/user-poll-update-form.component.module';
import {SharedNotificationUpdateFormComponentModule} from './forms/shared-notification-update-form/shared-notification-update-form.component.module';
import {UserDiscussionCreateFormComponentModule} from './forms/user-discussion-create-form/user-discussion-create-form.component.module';
import {UserSmsCreateFormComponentModule} from './forms/user-sms-create-form/user-sms-create-form.component.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        AdministratorMenuComponentModule,
        UserMenuComponentModule,
        PublicMenuComponentModule,
        SharedMenuComponentModule,
        SharedBugReportCreateFormComponentModule,
        SharedProfileUpdateFormComponentModule,
        SharedAppAuthorizationsComponentModule,
        SharedPasswordUpdateFormComponentModule,
        AdministratorUserUpdateFormComponentModule,
        UserEventsDayViewComponentModule,
        UserUserViewComponentModule,
        AdministratorUserCreateFormComponentModule,
        UserPollCreateFormComponentModule,
        UserPollUpdateFormComponentModule,
        UserEventUpdateFormComponentModule,
        UserEventCreateFormComponentModule,
        SharedNotificationUpdateFormComponentModule,
        UserDiscussionCreateFormComponentModule,
        UserSmsCreateFormComponentModule
    ]
})
export class ComponentsModule {
}
