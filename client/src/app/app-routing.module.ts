import { FilmComponent } from "./components/film/film.component";
import { ActorComponent } from "./components/actor/actor.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { CreateAccountComponent } from "./components/create-account/create-account.component";
import { AuthGuardService } from "./services/auth-guard/auth-guard.service";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "create-account", component: CreateAccountComponent },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  { path: "actor/:id", component: ActorComponent },
  { path: "film/:id", component: FilmComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
