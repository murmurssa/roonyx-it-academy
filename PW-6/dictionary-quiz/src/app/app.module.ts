import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent, DictionaryComponent, QuizComponent, CoupleWordsComponent } from './components';
import { DictionaryService } from './services';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dictionary', component: DictionaryComponent },
  { path: 'quiz', component: QuizComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DictionaryComponent,
    QuizComponent,
    CoupleWordsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
