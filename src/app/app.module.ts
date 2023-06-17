import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown/dropdown.component';
import { QuizComponent } from './components/quiz/quiz/quiz.component';
import { ScoreComponent } from './components/score/score/score.component';

@NgModule({
  declarations: [AppComponent, DropdownComponent, QuizComponent, ScoreComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
