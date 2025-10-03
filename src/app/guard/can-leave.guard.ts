import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { TodoComponent } from '../todo/todo/todo.component';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class CanLeaveGuard implements CanDeactivate<TodoComponent> {
  canDeactivate(component: TodoComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (component.todo.name.trim() || component.todo.content.trim()) {
      return confirm('Are you sure');
    }
    return true;
  }
}
