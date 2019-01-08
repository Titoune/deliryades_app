import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpResponseInterceptor} from './interceptors/HttpResponseInterceptor';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FirebaseDynamicLinks} from '@ionic-native/firebase-dynamic-links/ngx';
import {FirebaseMessaging} from '@ionic-native/firebase-messaging/ngx';

import {MobileAccessibility} from '@ionic-native/mobile-accessibility/ngx';
import {Diagnostic} from '@ionic-native/diagnostic/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';

import {File} from '@ionic-native/file/ngx';

import {NgxCaptchaModule} from 'ngx-captcha';
import {DesignModule} from './design/design.module';
import {ComponentsModule} from './components/components.module';

import {AsyncCacheModule, AsyncCacheOptions, LocalStorageDriver} from 'angular-async-cache';
import {MecImageCacheDirectiveModule} from './directives/mec-image-cache.directive.module';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import {Nl2brPipeModule} from './pipes/nl2br.pipe.module';
import {PublicMenuComponentModule} from './components/menus/public-menu/public-menu.component.module';
import {SharedMenuComponentModule} from './components/menus/shared-menu/shared-menu.component.module';
import {AdministratorMenuComponentModule} from './components/menus/administrator-menu/administrator-menu.component.module';

import {JoyrideModule} from 'ngx-joyride';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {UserMenuComponentModule} from './components/menus/user-menu/user-menu.component.module';
import {EmailComposer} from '@ionic-native/email-composer/ngx';
import {SMS} from '@ionic-native/sms/ngx';
import {CallNumber} from '@ionic-native/call-number/ngx';


// import { Market } from '@ionic-native/market';
// import {environment} from '../environments/environment';
registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

export function asyncCacheOptionsFactory(): AsyncCacheOptions {
    return new AsyncCacheOptions({
        driver: new LocalStorageDriver(),
        fromCacheAndReplay: true
    });
}

@NgModule({
    declarations: [
        AppComponent
    ],
    entryComponents: [],
    imports: [
        AppRoutingModule,
        IonicModule.forRoot(
            {
                backButtonText: 'Retour',
                mode: 'ios',
                menuType: 'overlay'
            }),
        HttpClientModule,
        AsyncCacheModule.forRoot({
            provide: AsyncCacheOptions,
            useFactory: asyncCacheOptionsFactory
        }),
        BrowserModule,
        PublicMenuComponentModule,
        SharedMenuComponentModule,
        UserMenuComponentModule,
        AdministratorMenuComponentModule,
        DesignModule,
        ComponentsModule,
        Nl2brPipeModule,
        MecImageCacheDirectiveModule,
        BrowserAnimationsModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        NgxCaptchaModule,
        LeafletModule.forRoot(),
        JoyrideModule.forRoot()
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'fr-FR'},
        StatusBar,
        FirebaseDynamicLinks,
        FirebaseMessaging,
        MobileAccessibility,
        Diagnostic,
        EmailComposer,
        SMS,
        CallNumber,
        FileTransfer,
        File,
        WebView,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true}
        // Market
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
