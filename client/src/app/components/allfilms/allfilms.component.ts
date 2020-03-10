import { Component, OnInit } from "@angular/core";
import { FilmService } from "src/app/services/film-service/film.service";
import { AuthService } from "src/app/services/auth-service/auth.service";
import { Film } from "src/app/Models/filmModel";

@Component({
  selector: "app-allfilms",
  templateUrl: "./allfilms.component.html",
  styleUrls: ["./allfilms.component.css"]
})
export class AllFilmsComponent implements OnInit {
  constructor(private fService: FilmService, private auth: AuthService) {}
  films: Array<Film>;
  ngOnInit(): void {
    this.fService.getFilms().subscribe(data => {
      this.films = data;
      let newfilm: Film = {
        title: "Test",
        cover_path: "",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis in expedita blanditiis iste! Quam dolore, officia eligendi sed nihil explicabo temporibus recusandae possimus nesciunt impedit esse ipsum facere quibusdam doloribus.",
        geners: ["action"],
        length: 23,
        original_title: "",
        parantial_quide: 13,
        trailer_link: "",
        release_date: ""
      };
      this.films.push(
        newfilm,
        newfilm,
        newfilm,
        newfilm,
        newfilm,
        newfilm,
        newfilm,
        newfilm
      );
    });
  }
  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
}
