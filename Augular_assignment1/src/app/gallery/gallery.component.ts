import { Component,Input } from '@angular/core';
import { ThemeProps } from '../Type';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  @Input() boxtheme: ThemeProps = { color: "", backgroundColor: "" };

 
  //currentTheme: ThemeProps = this.themeStyles[0]

  getColor(l:string) {
    if (l == 'blue') {
      return "blue";
    } else if (l == 'green') {
      return "green";
    } else if (l == 'orange') {
      return "orange";
    } else if (l == 'red') {
      return "red";
    } else
    return "black"
    
  }

}
