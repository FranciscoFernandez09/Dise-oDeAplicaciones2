﻿import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChangeRoleComponent} from './change-role-page/change-role.component';

const routes: Routes = [
  {
    path: '',
    component: ChangeRoleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeRoleRoutingModule {
}
