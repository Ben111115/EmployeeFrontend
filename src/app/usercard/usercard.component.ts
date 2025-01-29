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
export class UsercardComponent implements OnInit {

  users: any[] = [];  // Variable, um die Daten zu speichern
  errorMessage: string = '';  // Variable für Fehlernachrichten

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();  // Methode zum Abrufen der Daten aufrufen
  }

  fetchData() {
    this.http.get<any[]>('http://localhost:8080/employee/all')
      .subscribe(
        data => {
          this.users = data;  // Abgerufene Daten speichern
        },
        error => {
          this.errorMessage = 'Fehler beim Abrufen der Daten';
          console.error('Fehler beim Abrufen der Daten:', error);
        }
      );
  }
}
