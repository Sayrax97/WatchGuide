import { Actor } from "./../../Models/actorModel";
import { ActorServiceService } from "./../../services/actor-service/actor-service.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-actor",
  templateUrl: "./actor.component.html",
  styleUrls: ["./actor.component.css"]
})
export class ActorComponent implements OnInit {
  actor: Actor;
  constructor(private aSrevise: ActorServiceService) {}

  ngOnInit(): void {
    this.aSrevise.getActor(1).subscribe(res => {
      this.actor = res;
      console.log(res);
    });
  }
}
