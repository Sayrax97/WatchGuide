import { User } from "./../../Models/userModel";
import { UserServiceService } from "src/app/services/user-service/user-service.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CountryService } from "./../../services/country-service/country.service";
import { Component, OnInit } from "@angular/core";
import { Country } from "src/app/Models/countryModel";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.css"]
})
export class CreateAccountComponent implements OnInit {
  createAccountForm: FormGroup;
  countries: Array<Country>;

  constructor(
    private cService: CountryService,
    private uService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createAccountForm = new FormGroup({
      country: new FormControl("", Validators.required),
      full_name: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      birthday: new FormControl("", Validators.required),
      image: new FormControl("")
    });
    this.cService.getCountries().subscribe(res => {
      this.countries = res;
    });
  }

  getUsername() {
    return this.createAccountForm.get("username").value;
  }
  getPassword() {
    return this.createAccountForm.get("password").value;
  }

  getFullName() {
    return this.createAccountForm.get("full_name").value;
  }

  getCountry() {
    return this.createAccountForm.get("country").value;
  }

  getBirthday() {
    return this.createAccountForm.get("birthday").value;
  }

  getImage() {
    return this.createAccountForm.get("image").value;
  }

  createAccount() {
    let newUser: User = {
      full_name: this.getFullName(),
      password: this.getPassword(),
      username: this.getUsername(),
      birthday: this.getBirthday(),
      country_id: this.getCountry(),
      image_path: null
    };

    this.uService.createUser(newUser).subscribe(res => {
      console.log(res);
      this.router.navigate(["profile", { id: res.id }]);
    });
  }
}
