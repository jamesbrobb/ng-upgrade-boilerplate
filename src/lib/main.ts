import * as angular from 'angular';

import bootstrapAngularJS from './app/angularJSProj/app';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { setAngularJSGlobal } from '@angular/upgrade/static';

if (environment.production) {
  enableProdMode();
}

setAngularJSGlobal(angular);
bootstrapAngularJS();

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
