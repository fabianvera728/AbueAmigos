/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonSlides } from '@ionic/angular';
import { AuthService } from '../../../core/services/auth/auth.service';
import { StorageService } from '../../../core/services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild('mySlide') slide: IonSlides;
  registerForm: FormGroup;

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    this.initRegisterForm();
  }

  swipeNext() {
    this.slide.slideNext();
  }

  initRegisterForm() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      first_name: new FormControl(),
      last_name: new FormControl(),
      phone_number: new FormControl()
    });
  }

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      (data) => {
        console.log(data);
        this.storageService.setCurrentSession(data);
        this.router.navigate(['/private/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
