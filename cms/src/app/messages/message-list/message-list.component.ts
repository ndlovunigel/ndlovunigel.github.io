import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  standalone: false,
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {
  messages: Message[] = [
    new Message('1', 'Welcome', 'The grades for this assignment have been posted', 'Bro. Jackson'),
    new Message('2', 'Reminder', 'When is assignment 3 due', 'Steve Johnson'),
    new Message('3', 'Greetings', 'Assignment 3 is due on Saturday at 11:30 PM', 'Bro. Jackson')
  ];

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
