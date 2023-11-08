import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User, Authentication } from 'src/app/interfaces/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private _userService: UserService, private router: Router){
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void{}

  login(){
    const userLogin: Authentication = {
      nombreUsuario: this.form.value.userName,
      password: this.form.value.password
    }
    this._userService.validateUser(userLogin).subscribe((data: User) => {
      //console.log(data.authentication);
      if(data.authentication){
        alert(`Bienvenido ${data.nombre}`);
        this.router.navigate(['/products']);
      }else{
        alert("Los datos son incorrectos");
        this.router.navigate(['/login']);
      }
    });
  }
}
