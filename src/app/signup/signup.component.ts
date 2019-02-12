import { Component, OnInit , Input} from '@angular/core';
//import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { PersonalProfile, WorkProfile } from '../profile';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit {

  public work_profile : WorkProfile;

  public personal_profile : PersonalProfile;

  public personal : number;

  public count : number;

  public profile : string;


  setInputFields(){


      let promise = this.storage.get("personal_profile");
      promise.then(data => {
        this.personal_profile = JSON.parse(data);
      });


      let work_promise = this.storage.get("work_profile");
      work_promise.then(data => {
        this.work_profile = JSON.parse(data);
      });

  }

  constructor(private storage: Storage){
    this.personal = 1;
    this.profile = 'Personal';
    this.count = 0;
    this.personal_profile = new PersonalProfile();
    this.work_profile = new WorkProfile();
   }

   ngOnInit() {
     this.setInputFields();
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

   savePeronalProfile(){
     if(this.personal_profile){
       this.storage.set("personal_profile",JSON.stringify(this.personal_profile));
     }
   }

   saveWorkProfile(){
     if(this.work_profile){
       console.log("Hits");
       this.storage.set("work_profile",JSON.stringify(this.work_profile));

     }
   }




}
