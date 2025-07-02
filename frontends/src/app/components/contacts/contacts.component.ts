import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: { name: string; email: string; phone: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    // Puedes cargar contactos aquí si es necesario
    this.contacts = [
      { name: 'Juan Pérez', email: 'juan.perez@email.com', phone: '123-456-7890' },
      { name: 'Ana Garay', email: 'ana.garay@email.com', phone: '987-654-3210' }
    ];
  }

  addContact(contact: { name: string; email: string; phone: string }): void {
    this.contacts.push(contact);
  }

  removeContact(index: number): void {
    this.contacts.splice(index, 1);
  }
}
