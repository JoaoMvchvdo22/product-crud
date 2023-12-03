import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number = 0;

  name: string = '';
  price: string = '';
  description: string = '';
  quantity: number = 0;

  constructor(
    private router: Router,
    private service: SharedServiceService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
   }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this.service.getDetail(this.id).subscribe((res) => {
      this.name = res.name;
      this.price = res.price;
      this.description = res.description;
      this.quantity = res.quantity;
    });
  }

  update() {
    let product = {
      name: this.name,
      price: this.price,
      description: this.description,
      quantity: this.quantity
    }

    this.service.update(this.id, product).subscribe((res) => {
      this.router.navigate(['list']);
    });
  }

  back() {
    this.router.navigate(['list']);
  }

}
