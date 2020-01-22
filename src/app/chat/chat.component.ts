import {Component, OnInit} from '@angular/core';
import {ChatService} from '../services/chat.service';

import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/throttleTime';

@Component({
  selector: 'app-chat-root',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string;
  messages: string[] = [];
  secretCode: string;

  constructor(private chatService: ChatService) {
    this.secretCode = 'Secret code';
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }


  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
      });
  }
}
