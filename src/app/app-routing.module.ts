import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AnlageComponent } from './pages/anlage/anlage.component';
import { TeilmodelleComponent } from './pages/teilmodelle/teilmodelle.component';
import { DatenexportComponent } from './pages/datenexport/datenexport.component';

const routes: Routes = [
  {
    path: 'pages/datenexport',
    component: DatenexportComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/teilmodelle',
    component: TeilmodelleComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/anlage',
    component: AnlageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/dashboard',
    component: DashboardComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    DashboardComponent,
    AnlageComponent,
    TeilmodelleComponent,
    DatenexportComponent
  ]
})
export class AppRoutingModule { }
