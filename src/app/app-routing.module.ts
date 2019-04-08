import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandComponent } from './command/command.component';

import { InterpolationComponent }   from './binding/interpolation/interpolation.component';

import { MainComponent } from './binding/main/main.component';

import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
	{
		path: '',
		component :CommandComponent
	  },

    { path: 'binding', redirectTo: 'binding', pathMatch: 'full' },
    { path: 'binding/interpolation', component: InterpolationComponent },
    { path: 'binding', component: MainComponent },
    {path:  'quiz', component : QuizComponent},
  
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
