import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  private camera : Camera;

  constructor(private _camera: Camera){
    this.camera = _camera;
   }

  const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
  }

  // getPictureNow:(void) {
  // this.camera.getPicture(options).then(
  //   (imageData) => {
  //   // imageData is either a base64 encoded string or a file URI
  //   // If it's base64 (DATA_URL):
  //   let base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //   // Handle error
  //     }
  //   );
  // }


}
