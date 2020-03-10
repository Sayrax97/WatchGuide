import { Injectable } from "@angular/core";
import { AuthService } from "../auth-service/auth.service";
import { UserServiceService } from "../user-service/user-service.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.auth.logout();
      return false;
    } else {
      return true;
    }
  }
}
