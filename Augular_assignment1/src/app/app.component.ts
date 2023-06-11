import { Component } from '@angular/core';
import { ThemeProps } from './Type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Augular_assignment1';

  services : string[] = ["About","Company","Services"]
  gallery : string[] = ["blue","green","orange","red"]

 
  themeStyles: ThemeProps[] = [
    { backgroundColor: "#81bfde", color: "whitesmoke" },
    { backgroundColor: "#a7c449", color: "whitesmoke" },
    { backgroundColor: "#fcc603", color: "whitesmoke" },
    { backgroundColor: "#e84a5d", color: "whitesmoke" }
  ]


}
