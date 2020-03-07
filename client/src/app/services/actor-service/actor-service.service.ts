import { Actor } from "./../../Models/actorModel";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ActorServiceService {
  url = "http://localhost:3000/actor";
  constructor(private httpClinet: HttpClient) {}

  getActor(id: number) {
    return this.httpClinet.get<Actor>(this.url + `/${id}`);
  }
}
