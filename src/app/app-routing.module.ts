import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: "create",
    loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
  },
  {
    path: "list",
    loadChildren: () => import('./list/list.module').then(m => m.ListModule)
  },
  {
    path: "edit/:id",
    loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
