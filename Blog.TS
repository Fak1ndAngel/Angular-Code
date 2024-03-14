import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InactivityServiceService } from '../inactivity-service.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private router: Router, private inactivityService: InactivityServiceService) {}

  ngOnInit() {
    this.inactivityService.resetTimer();
    
  }

  logout() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/login-session']);
  }

  usuario: string | null = localStorage.getItem('usuario');

}

