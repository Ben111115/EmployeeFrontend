import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  providers: [EmployeeService]
})
export class AdminDashboardComponent {

  employee: any;
  searchQuery = ''; // Suchanfrage des Benutzers wird hier gespeichert
  searchResults: any[] = []; // Array für Suchergebnisse
  selectedUser: any = null;
  changeUserisVisible = false;
  adminisVidible = true;

  constructor(private employeeService: EmployeeService) {}

  onSubmit(){
    console.log("klicken funktioneirt");

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const imageUrl = (document.getElementById('imageUrl') as HTMLInputElement).value;
    const employeeCode = (document.getElementById('employeeCode') as HTMLInputElement).value;

    const formData = {
      name,
      email,
      jobTitle,
      phone,
      imageUrl,
      employeeCode
    };

    this.employee = formData;

    (document.getElementById('name') as HTMLInputElement).value = '';
    (document.getElementById('email') as HTMLInputElement).value = '';
    (document.getElementById('jobTitle') as HTMLInputElement).value = '';
    (document.getElementById('phone') as HTMLInputElement).value = '';
    (document.getElementById('imageUrl') as HTMLInputElement).value = '';
    (document.getElementById('employeeCode') as HTMLInputElement).value = '';

    this.sendData();
  }

  sendData(){
    this.employeeService.addEmployee(this.employee).subscribe(response => {
      console.log("Daten erfolgreich gespeichert:", response);
    }, error => {
      console.error("Fehler beim Speichern der Daten:", error);
    });
  }

  onSearch(){
    // if (this.searchQuery.length < 3) { // Suchanfrage unter 3 Zeilen
    //   this.searchResults = []; // Ergebnisse geleert wenn die Eingabe zu kurz
    //   return;
    // }
    
    // Service Aufruf
    this.employeeService.getEmployees(this.searchQuery).subscribe(
      (results: any[]) => { // Wenn die API Antwortet, dann Ergebnisse in Array
        this.searchResults = results.filter(user =>
          user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        ); // Speichert die Ergebnisse in der searchResults Variable und Filtert die Ergebnisse
      },
      (error) => {
        console.error('Fehler beim Abrufen der Suchergebnisse', error);
      }
    );
  }
  
  onSelect(user: any) {
    this.selectedUser = user; // Setzt die selectedUser Variable auf den ausgewählten Benutzer
    this.searchQuery = '';
    this.searchResults = [];
  }

  onAction() {
    console.log('Aktion für', this.selectedUser.name); 
  }

  deleteUser(){
    this. employeeService.deleteEmployee(this.selectedUser.id).subscribe({
      next: (response) => {
        alert("Element wurde erfolgreich gelöscht");
        this.selectedUser = "";
      },
      error: (error) => {
        alert("Fehler beim Löschen des Elements: " + error.message);
      }
    })
  }

  toggleOn(){
    this.changeUserisVisible = true;
    this.adminisVidible = false;
  }

  transmit(){
    (document.getElementById('cname') as HTMLInputElement).value = this.selectedUser.name;
    (document.getElementById('cemail') as HTMLInputElement).value = this.selectedUser.email;
    (document.getElementById('cjobTitle') as HTMLInputElement).value = this.selectedUser.jobTitle;
    (document.getElementById('cphone') as HTMLInputElement).value = this.selectedUser.phone;
    (document.getElementById('cimageUrl') as HTMLInputElement).value = this.selectedUser.imageUrl;
    (document.getElementById('cemployeeCode') as HTMLInputElement).value = this.selectedUser.employeeCode;
  }

  toggleOff(){
    this.changeUserisVisible = false;
    this.adminisVidible = true;
  }

  changeUser(){

    const id = this.selectedUser.id;
    const name = (document.getElementById('cname') as HTMLInputElement).value;
    const email = (document.getElementById('cemail') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('cjobTitle') as HTMLInputElement).value;
    const phone = (document.getElementById('cphone') as HTMLInputElement).value;
    const imageUrl = (document.getElementById('cimageUrl') as HTMLInputElement).value;
    const employeeCode = (document.getElementById('cemployeeCode') as HTMLInputElement).value;

    const formData = {
      id,
      name,
      email,
      jobTitle,
      phone,
      imageUrl,
      employeeCode
    };

    this.employee = formData;

    (document.getElementById('cname') as HTMLInputElement).value = '';
    (document.getElementById('cemail') as HTMLInputElement).value = '';
    (document.getElementById('cjobTitle') as HTMLInputElement).value = '';
    (document.getElementById('cphone') as HTMLInputElement).value = '';
    (document.getElementById('cimageUrl') as HTMLInputElement).value = '';
    (document.getElementById('cemployeeCode') as HTMLInputElement).value = '';

    this.updateData();
    this.toggleOff();
  }

  updateData(){
    this.employeeService.updateEmployee(this.employee).subscribe(response => {
      console.log("Daten erfolgreich gespeichert:", response);
      window.location.reload();
      alert("Employee updatet");
    }, error => {
      console.error("Fehler beim Speichern der Daten:", error);
    });
  }
}
