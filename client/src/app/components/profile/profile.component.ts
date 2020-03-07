import { UserServiceService } from "./../../services/user-service/user-service.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user;
  constructor(
    private uService: UserServiceService,
    private activateedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateedRoute.params.subscribe(params => {
      let user_id = params.id;
      this.uService.getUser(user_id).subscribe(res => {
        this.user = res;
        console.log(res);
      });
    });
  }
}
