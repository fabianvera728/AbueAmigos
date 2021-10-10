import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../../core/services/api-rest/api-rest.service';
import { StorageService } from '../../../core/services/storage/storage.service';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
})
export class ContactPage implements OnInit{

  conversations: any[] = [];

  constructor(private api: ApiRestService, private storage: StorageService) {}

  ngOnInit(){
    this.getConversations();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getConversations();
    setTimeout(() => {
      console.log('Async operation has ended');
      /* event.target.complete(); */
    }, 1000);
  }

  getConversations(){
    this.api.query('conversations','GET').subscribe(
      (data) => {
        console.log(data);
        this.conversations = data;
      },
      (error) => {

      }
    );
  }

  sendConversations(){
    const params = {user: this.storage.getCurrentUser().id, message: 'Quiero un abueamigo'};
    console.log(params);
    this.api.query('conversations','POST', params).subscribe(
      (data) => {
        console.log(data);
        this.doRefresh({});
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
