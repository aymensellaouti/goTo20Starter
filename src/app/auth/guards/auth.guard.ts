import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate,
  GuardResult,
  MaybeAsync,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { APP_ROUTES } from '../../../config/routes.config';
import { Injectable, inject } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  private authService = inject(AuthService);
  private router = inject(Router);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate([APP_ROUTES.login]);
      return false;
    }
    return true;
  }
}
