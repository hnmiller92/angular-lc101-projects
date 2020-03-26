import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Best. Photos. Ever.';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://i.pinimg.com/originals/3a/73/53/3a7353b4fa98c4eb47a768c1fff3537b.jpg';
  image3 = 'https://www.yourpurebredpuppy.com/dogbreeds/photos2-G/german-shepherd-05.jpg';

  constructor() { }

  ngOnInit() {
  }

}