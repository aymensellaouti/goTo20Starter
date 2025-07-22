import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../users.service';




@Component({
    selector: 'app-user-elements',
    templateUrl: './user-elements.component.html',
    styleUrls: ['./user-elements.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class UserElementsComponent {
  @Input() users: User[] = [];

}
