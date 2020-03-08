import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Country } from "src/app/Models/countryModel";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  url = "http://localhost:3000/country";
  constructor(private httpClient: HttpClient) {}

  getCountries() {
    return this.httpClient.get<Array<Country>>(this.url);
  }
}
