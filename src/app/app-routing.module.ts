import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenpageComponent } from './openpage/openpage.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:"",component:OpenpageComponent},
  {path:"main",component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
