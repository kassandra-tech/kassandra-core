import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { PlatformService } from "./platform.service";

declare let Moralis: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn: ReplaySubject<boolean> = new ReplaySubject(1);
  public readonly isLoggedIn$: Observable<boolean> = this._isLoggedIn.asObservable();

  public get isLoggedIn(): boolean {
    return this.platformService.isPlatformBrowser() ? !!Moralis.User.current() : false;
  }

  constructor(
    private platformService: PlatformService
  ) {
    const serverUrl = 'https://fbjp6fpn9cfk.usemoralis.com:2053/server';
    const appId = '2eSJJLFJUsHxYjS0FyMA8YOYyqX44DOKinZkvf8E';

    if (this.platformService.isPlatformBrowser()) {
      Moralis.start({ serverUrl, appId });
      this.updateAuthState();
    }
  }

  /**
   * Get the name of the member currently logged into Kassandra.
   * @returns the username of the currently logged in member.
   */
  public currentMember(): string {
    try {
      return Moralis.User.current().attributes.username;
    } catch {
      return "Unknown member";
    }
  }

  public async signInWithPhantomWallet(): Promise<void> {
    if (this.platformService.isPlatformBrowser()) {
      await Moralis.authenticate({ type: 'sol' });
    }
  }

  public async logIn(username: string, password: string): Promise<void> {
    if (this.platformService.isPlatformBrowser()) {
      await Moralis.User.logIn(username, password);
      this.updateAuthState();
    }
  }

  public async createAccount(username: string, email: string, password: string): Promise<void> {
    if (this.platformService.isPlatformBrowser()) {
      let user = new Moralis.User();

      user.set('username', username);
      user.set('password', password);
      user.set('email', email);

      await user.signUp();
      this.updateAuthState();
    }
  }

  public async logOut(): Promise<void> {
    if (this.platformService.isPlatformBrowser()) {
      await Moralis.User.logOut();
      this.updateAuthState();
    }
  }

  private updateAuthState(): void {
    if (this.platformService.isPlatformBrowser()) {
      this._isLoggedIn.next(!!Moralis.User.current());
    }
  }
}
