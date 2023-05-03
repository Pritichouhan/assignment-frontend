import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user-service.service';
import { SharedDataService } from '../sharedDataService';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('myForm') myForm!: NgForm;
  user: User = new User;
  errorMessage!: string;
  success!: string;

  constructor(private fb: FormBuilder, private authService: UserService, private router: Router,private sharedDataService: SharedDataService) { }

  ngOnInit() {
  }

  clear(){
    this.user = new User();
  }

  login() {
    this.authService.loginUser(this.user).subscribe(
      response => {
        this.sharedDataService.setData("username" , this.user.username)
        console.log('Login successful!');
        this.router.navigate(['/profile']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
      }
    );
  }
}


