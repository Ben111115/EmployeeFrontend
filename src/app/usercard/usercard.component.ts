import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Employee } from '../employee';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usercard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent {
  constructor(private http: HttpClient) {}
  fetchData() {
    this.http.get('http://localhost:8080/employee/all')
    .subscribe(response => {
      console.log('Daten von der API:', response);
    }, error => {
      console.error('Fehler beim Abrufen der Daten:', error);
    });
  }
}
