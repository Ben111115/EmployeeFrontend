import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UsercardComponent } from "./usercard/usercard.component";
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, RouterLink],
  //imports: [RouterModule, HeaderComponent, UsercardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employeemanagerapp';
}
