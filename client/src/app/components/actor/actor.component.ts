import { Actor } from "./../../Models/actorModel";
import { ActorServiceService } from "./../../services/actor-service/actor-service.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-actor",
  templateUrl: "./actor.component.html",
  styleUrls: ["./actor.component.css"]
})
export class ActorComponent implements OnInit {
  actor: Actor;
  constructor(
    private aSrevise: ActorServiceService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      let actor_id = params.id;
      this.aSrevise.getActor(actor_id).subscribe(res => {
        this.actor = res;
      });
    });
  }
}
