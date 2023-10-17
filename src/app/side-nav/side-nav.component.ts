import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Input() sideNavStatus:boolean=false;
  list=[
    {
      number:'1',
      name:'home',
      icon:'bx bxs-home',
    },
    {
      number:'2',
      name:'Analytics',
      icon:'bx bx-line-chart',
    },
    {
      number:'3',
      name:'Products',
      icon:'bx bx-library',
    },
    {
      number:'4',
      name:'order',
      icon:'bx bxs-cart-alt',
    },
    {
      number:'5',
      name:'settings',
      icon:'bx bxs-cog',
    },
    {
      number:'6',
      name:'Contact',
      icon:'bx bxs-phone',
    },
]
}
