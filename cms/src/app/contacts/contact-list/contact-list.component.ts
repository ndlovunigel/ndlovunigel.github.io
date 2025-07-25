import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-list',
  standalone: false,
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [
    new Contact(
      "1",
      "R. Kent Jackson",
      "jacksonk@byui.edu",
      "208-496-3771",
      "assets/images/jacksonk.jpg",
      null
    ),
    new Contact(
      "2",
      "Rex Barzee",
      "barzeer@byui.edu",
      "208-496-3768",
      "assets/images/barzeer.jpg",
      null
    ),
  ];

  @Output() selectedContactEvent = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() { }

  onContactSelected(contact: Contact) {
    this.selectedContactEvent.emit(contact);
  }

}
