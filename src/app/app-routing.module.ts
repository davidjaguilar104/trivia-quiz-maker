import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownComponent, ResultComponent } from './components/index';

const routes: Routes = [
  {
    path: '',
    component: DropdownComponent,
  },
  {
    path: 'result',
    component: ResultComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
