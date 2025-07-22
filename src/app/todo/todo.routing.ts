import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CanLeaveGuard } from "../guard/can-leave.guard";
import { TodoComponent } from "./todo/todo.component";

const routes: Route[] = [
    { path: '', component: TodoComponent, canDeactivate:[CanLeaveGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
