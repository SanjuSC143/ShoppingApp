import { SocialAuthService} from "@abacritt/angularx-social-login";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent  {
  // user:any;
  // loggedIn:any;

  // constructor(private authService: SocialAuthService, private _router:Router) { }

  // ngOnInit() {
  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.loggedIn = (user != null);
  //   });
  // }
  // signOut(): void {
  //   this.authService.signOut();
  //   localStorage.removeItem(this.user);
  //   this._router.navigate(['']);
  // }
  sideNavStatus:boolean=false;
}