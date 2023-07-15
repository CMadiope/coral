import { Component } from '@angular/core';
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  face = faFacebookF;
  you = faYoutube;
  twitter = faTwitter;
  insta = faInstagram;
  location = faLocationDot;
}
