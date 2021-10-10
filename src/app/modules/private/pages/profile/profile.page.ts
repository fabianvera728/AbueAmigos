import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services/storage/storage.service';
import { User } from '../../../core/interfaces/user/user/user';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user!: User;

  constructor(private storageService: StorageService) { }

  ngOnInit(){
    this.user = this.storageService.getCurrentUser();
  }

}
