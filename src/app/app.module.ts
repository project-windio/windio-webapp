import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {
  DxButtonModule,
  DxLookupModule
} from "devextreme-angular";
import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { AnlageComponent } from './pages/anlage/anlage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DatenexportComponent } from './pages/datenexport/datenexport.component';
import { HomeComponent } from './pages/home/home.component';
import { TeilmodelleComponent } from './pages/teilmodelle/teilmodelle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    AnlageComponent,
    DashboardComponent,
    DatenexportComponent,
    HomeComponent,
    TeilmodelleComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    HttpClientModule,
    DxButtonModule,
    DxLookupModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
