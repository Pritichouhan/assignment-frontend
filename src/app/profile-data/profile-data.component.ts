import { Component } from '@angular/core';
import { UserService } from '../user-service.service';
import { SharedDataService } from '../sharedDataService';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { UserDetails } from '../UserDetails';



@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent {
  displayedColumns: string[] = ['name', 'mobile', 'address', 'skills', 'hobbies', 'photo'];
  dataSource = new MatTableDataSource();
  username!: String;
  userList:UserDetails[]=[];


  constructor(private userService: UserService, private router: Router, private sharedDataService : SharedDataService) { 
    this.username = this.sharedDataService.getData("username");
    console.log(this.username)
   }


   ngOnInit() {
    this.userService.getUserDetails(this.username).subscribe(result=>{
      this.userList = result;
      this.dataSource.data = [this.userList];
      console.log(this.dataSource.data);
      console.log(this.userList);
    })
   }

}
