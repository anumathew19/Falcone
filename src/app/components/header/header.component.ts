import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private stateService: StateService, private router: Router) { }

  ngOnInit() {
  }

  reset() {
    this.stateService.reset();
    if(this.router.url != '/home') {
      this.router.navigate(['/home']);
    }
  }
}
