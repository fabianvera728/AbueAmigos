import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { StorageService } from '../../../core/services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm(){
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(){
    this.loginForm.patchValue({email: this.loginForm.value.email+'@abueamigo.com'});
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['private', 'home']);
        this.storageService.setCurrentSession(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
