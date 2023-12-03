import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: any[] = [];

  constructor(private router: Router, private service: SharedServiceService) { }

  ngOnInit() {
    this.getProducts();
  }

  back() {
    this.router.navigate(['']);
    this.service.showOptions.next(true);
  }

  getProducts() {
    this.service.get().subscribe((res) => {
      this.products = res;
    });
  }

  updateProduct(id: number) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteProduct(id: number) {
    this.service.delete(id).subscribe((res) => {
      this.getProducts();
    });
  }

}
