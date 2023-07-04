import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {AuthModule} from './auth/auth.module'
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddComponent} from './add/add.component';

const routes: Routes = [
 // { path: "auth", loadChildren: "./auth/auth.module#AuthModule"},
  { path: "auth", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path:"dashboard", component:DashboardComponent},
  {path:"dashboard/add", component:AddComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
