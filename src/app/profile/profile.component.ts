import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../sharedDataService';
import { UserService } from '../user-service.service';
import { UserDetails } from '../UserDetails';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  errorMessage: any;
  username!: String;
  userDetails!: UserDetails;
  
  
 

  constructor(private userService: UserService, private router: Router, private sharedDataService : SharedDataService) { 
    this.username = this.sharedDataService.getData("username");
    console.log(this.username)

   }

   onSubmit(data:any){
    console.log(data);
    this.userService.addUserData(this.username,data).subscribe(result=>{
      console.log("Data inserted Successfully" , result)
      this.router.navigate(['/profile-data']);
    })

   }

   
  }

   
  