import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  logaut(){
    this.authService.logoaut()
    this.router.navigate(['/'])
  }

  irLogin(){
    this.router.navigate(['/login'])
  }

  irUpdateUsuario(){
    this.router.navigate(['/updateUsuario'])
  }

  ngOnInit(): void {
  }

}
