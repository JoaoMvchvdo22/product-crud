import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  name: string = '';
  price: string = '';
  description: string = '';
  quantity: number = 0;

  constructor(private router: Router, private service: SharedServiceService) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['']);
    this.service.showOptions.next(true);
  }

  async createProduct() {
    try {
      let product = {
        name: this.name,
        price: this.price,
        description: this.description,
        quantity: this.quantity
      }

      this.service.post(product).subscribe((res) => {
        this.router.navigate(['list']);
        this.service.showOptions.next(true);
      });
    } catch (error) {
      console.log(error);
    }

  }

}
