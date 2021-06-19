import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productdata:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private ProductService : ProductService) { }

  ngOnInit(): void {
    this.ProductService.getdata().subscribe(data => {
      this.productdata = data;
      console.log(this.productdata);
      });
  }

}
