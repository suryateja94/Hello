import { Component, OnInit } from '@angular/core';
//import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public personal : number;

  public count : number;

  public profile : string;

  constructor(){
    this.personal = 1;
    this.profile = 'Personal';
    this.count = 0;
   }



   segmentChanged(ev: any){
     if(this.count==1){
       if(this.personal===1){
         this.personal = 0;
       }
       else{
         this.personal = 1;
       }
    }
    else{
      this.count = 1;
    }
   }




}
