import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss'],
})
export class ChatPage implements OnInit{

  messages: any[] = [
    {
      type:'contact',
      message: 'Hola juanito'
    },
    {
      type:'contact',
      message: 'Hola juanito'
    },
    {
      type:'contact',
      message: 'Hola juanito'
    }
  ];

  messageForm: FormGroup;

  constructor() {}

  ngOnInit(){
    this.initMessageForm();
  }

  sendMessage(){
    this.messages.push({type: 'user', message: this.messageForm.value.message});
    this.messageForm.patchValue({message: ''});
  }

  initMessageForm(){
    this.messageForm = new FormGroup({
      message: new FormControl()
    });
  }

}
