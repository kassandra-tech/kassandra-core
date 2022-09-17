import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
