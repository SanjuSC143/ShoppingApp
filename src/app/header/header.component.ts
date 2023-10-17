import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus:boolean=false;
  user:any;
  loggedIn:any;

  constructor(private authService: SocialAuthService, private _router:Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  signOut(): void {
    this.authService.signOut();
    // localStorage.removeItem(this.user);
    this._router.navigate(['/']);
  }
  SideNavToggle(){
    this.menuStatus=!this.menuStatus
    this.sideNavToggled.emit(this.menuStatus);
  }
}
