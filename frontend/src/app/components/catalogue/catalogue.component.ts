import { Component } from '@angular/core';
import { AppProductService } from 'src/app/services/app-product.service';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  listProduct: Product[] = [];

  constructor(private _productService: AppProductService) {}

  ngOnInit(): void{
    this.getListProduct();
  }

  getListProduct(){
    this._productService.getAllProducts().subscribe((data) => {
      this.listProduct = data;
    });
  }
}
