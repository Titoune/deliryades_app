import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicGuard} from './guards/public.guard';
import {SharedGuard} from './guards/shared.guard';
import {AdministratorGuard} from './guards/administrator.guard';
import {UserGuard} from './guards/user.guard';

const routes: Routes = [
    {
        path: '', redirectTo: 'connexion', pathMatch: 'full',
        canActivate: [PublicGuard]
    },
    {
        path: 'connexion', loadChildren: './bundles/public/public-login-form/public-login-form.module#PublicLoginFormPageModule',
        canActivate: [PublicGuard]
    },
    {
        path: 'mot-de-passe-perdu',
        loadChildren: './bundles/public/public-password-lost-form/public-password-lost-form.module#PublicPasswordLostFormPageModule',
        canActivate: [PublicGuard]
    },
    {
        path: 'deconnexion',
        loadChildren: './bundles/public/public-logout/public-logout.module#PublicLogoutPageModule',
        canActivate: [PublicGuard]
    },
    {
        path: 'comptes',
        loadChildren: './bundles/shared/shared-accounts-index/shared-accounts-index.module#SharedAccountsIndexPageModule',
        canActivate: [SharedGuard]
    },
    {
        path: 'admin/dashboard',
        loadChildren: './bundles/administrator/administrator-dashboard-index/administrator-dashboard-index.module#AdministratorDashboardIndexPageModule',
        canActivate: [AdministratorGuard]
    },
    {
        path: 'admin/utilisateurs',
        loadChildren: './bundles/administrator/administrator-users-index/administrator-users-index.module#AdministratorUsersIndexPageModule',
        canActivate: [AdministratorGuard]
    },
    {
        path: 'admin/utilisateurs/voir/:user_id',
        loadChildren: './bundles/administrator/administrator-user-view/administrator-user-view.module#AdministratorUserViewPageModule',
        canActivate: [AdministratorGuard]
    },
    {path: 'sondages', loadChildren: './bundles/user/user-polls-index/user-polls-index.module#UserPollsIndexPageModule', canActivate: [UserGuard]},
    {path: 'annuaire', loadChildren: './bundles/user/user-users-index/user-users-index.module#UserUsersIndexPageModule', canActivate: [UserGuard]},
    {path: 'evenements', loadChildren: './bundles/user/user-events-index/user-events-index.module#UserEventsIndexPageModule', canActivate: [UserGuard]},
    {path: 'messages', loadChildren: './bundles/user/user-discussions-index/user-discussions-index.module#UserDiscussionsIndexPageModule', canActivate: [UserGuard]},
    {path: 'messages/voir/:user_id', loadChildren: './bundles/user/user-discussion-view/user-discussion-view.module#UserDiscussionViewPageModule', canActivate: [UserGuard]},
    {path: 'parametres', loadChildren: './bundles/user/user-parameters-index/user-parameters-index.module#UserParametersIndexPageModule', canActivate: [UserGuard]},
    {path: 'chat', loadChildren: './bundles/user/user-chat-view/user-chat-view.module#UserChatViewPageModule', canActivate: [UserGuard]},
    {path: 'evenements/voir/:event_id', loadChildren: './bundles/user/user-event-view/user-event-view.module#UserEventViewPageModule', canActivate: [UserGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
