import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {
  @Input() loggedIn = false;


}
