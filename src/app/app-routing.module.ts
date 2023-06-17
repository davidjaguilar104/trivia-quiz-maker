import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './components/score/score/score.component';
import { DropdownComponent } from './components/dropdown/dropdown/dropdown.component';

const routes: Routes = [
  {
    path: '',
    component: DropdownComponent,
  },
  {
    path: 'score',
    component: ScoreComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
