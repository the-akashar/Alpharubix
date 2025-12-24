import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  user: User = new User();

  ngOnInit(): void {
    const storedUser = sessionStorage.getItem('userdetails');

    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      this.user.authStatus = 'NOT_AUTH';
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
