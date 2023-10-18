import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  user: SocialUser | null = null;
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService, 
              private _router: Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        this.loggedIn = true;
        
      } else {
        this.user = null;
        this.loggedIn = false;
      }
    });
  }

  signOut(): void {
    this.authService.signOut();
    this.user = null;
    this.loggedIn = false;
    this._router.navigate(['/']);
  }

  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
}
