import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showOptions: boolean = false;

  constructor(private router: Router, private service: SharedServiceService) { }

  ngOnInit() {

    this.service.showOptions.subscribe((res) => {
      this.showOptions = res;
    });

  }

  letsStart() {
    this.showOptions = !this.showOptions;
  }

  toPath(path: string) {
    this.router.navigate([path]);
  }

}
