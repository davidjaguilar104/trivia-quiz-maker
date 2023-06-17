import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent, ResultComponent } from './components/index';

const routes: Routes = [
  {
    path: '',
    component: QuizComponent,
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
