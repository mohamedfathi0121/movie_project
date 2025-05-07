/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from './environment/environment';
import { provideToastr } from 'ngx-toastr'; // ⬅️
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent,appConfig).catch((err) => console.error(err));
