import { Component } from '@angular/core';
import { AppProductService } from 'src/app/services/app-product.service';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
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

  deleteProduct(id: number){
    this._productService.deteteProduct(id).subscribe(() =>{
      this.getListProduct();
    });
  }
}
