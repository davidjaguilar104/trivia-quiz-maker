import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './components/score/score/score.component';
import { DropdownComponent } from './components/dropdown/dropdown/dropdown.component';

const routes: Routes = [
  { path: 'score', component: ScoreComponent },
  { path: '', component: DropdownComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
