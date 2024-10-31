import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ModifyComponent } from './modify/modify.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'modify/:id', component: ModifyComponent },
  { path: 'modify', component: ModifyComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', redirectTo: '/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
