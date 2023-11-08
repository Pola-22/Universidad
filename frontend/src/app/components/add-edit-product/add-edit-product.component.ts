import { Component } from '@angular/core';
import { AppProductService } from 'src/app/services/app-product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/Product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent {
  form: FormGroup;
  id: number;
  oparation: string = 'Crear ';

  constructor(private fb: FormBuilder, private _productService: AppProductService, private router: Router, private aRouter: ActivatedRoute){
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required]
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void{
    if(this.id !== 0){
      this.oparation = 'Editar ';
      this.getProductById(this.id);
    }
  }

  getProductById(id: number){
    this._productService.getProductById(id).subscribe((data: Product[]) => {
      console.log(data);
      this.form.patchValue({
        name: data[0].nombre,
        description: data[0].descripcion,
        price: data[0].precio,
        stock: data[0].cantidadDisponible
      });
    });
  }

  newUpdateProduct(){
    if(this.id !== 0){
      //Es una actualización
      this.updateProduct();
    }else{
      //Es una creación
      this.newProduct();
    }
  }

  newProduct(){
    const product: Product = {
      usuarioID: 1,
      nombre: this.form.value.name,
      descripcion: this.form.value.description,
      precio: this.form.value.price,
      cantidadDisponible: this.form.value.stock
    }
    this._productService.saveNewProduct(product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  updateProduct(){
    const product: Product = {
      usuarioID: 1,
      nombre: this.form.value.name,
      descripcion: this.form.value.description,
      precio: this.form.value.price,
      cantidadDisponible: this.form.value.stock
    }
    this._productService.updateProduct(this.id, product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
