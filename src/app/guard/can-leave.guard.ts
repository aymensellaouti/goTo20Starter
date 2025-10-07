import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

import { CanLeave } from './can-leave.interface';

 export function canLeaveGuard(component: CanLeave, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (!component.canLeave()) {
      return confirm('Are you sure');
    }
    return true;
  }

