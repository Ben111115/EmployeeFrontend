import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UsercardComponent } from "./usercard/usercard.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UsercardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employeemanagerapp';
}
