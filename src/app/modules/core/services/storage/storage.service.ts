import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Session } from '../../interfaces/utils/session';
import { User } from '../../interfaces/user/user/user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private localStorageService;
  private currentSession!: Session | null;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
  }

  loadSessionData(): Session | null {
    const sessionStr = this.localStorageService.getItem('currentUser');
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return sessionStr ? <Session>JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): Session | null {
    return this.loadSessionData();
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
  }

  getCurrentUser(): User | null {
    const session: Session | null = this.getCurrentSession();
    return session && session.user ? session.user : null;
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() != null ? true : false;
  }

  logout(): void {
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }

}

