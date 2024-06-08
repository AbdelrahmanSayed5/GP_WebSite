import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenpageComponent } from './openpage/openpage.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path:"",component:OpenpageComponent},
  {path:"main",component:MainComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"features",component:FeaturesComponent},
  {path:"about",component:AboutComponent},
  {path:"team",component:TeamComponent},
  {path:"**",redirectTo:""},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
