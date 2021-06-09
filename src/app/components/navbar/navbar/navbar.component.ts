import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {Router, NavigationEnd} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  logaut(){
    this.authService.logoaut()
    this.router.navigate(['/'])
  }

  irLogin(){
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
