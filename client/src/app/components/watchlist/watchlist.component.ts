import { UserServiceService } from "src/app/services/user-service/user-service.service";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth-service/auth.service";

@Component({
  selector: "app-watchlist",
  templateUrl: "./watchlist.component.html",
  styleUrls: ["./watchlist.component.css"]
})
export class WatchlistComponent implements OnInit {
  watchList: Array<any>;
  constructor(
    private uService: UserServiceService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    let user_id = this.auth.profile();
    this.uService.getWatchList(user_id).subscribe(res => {
      this.watchList = res.films;
      console.log(this.watchList);
    });
  }
}
