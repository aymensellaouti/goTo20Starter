import { AfterViewInit, Component, computed, contentChild, effect, ElementRef, signal, ViewChild, viewChild, viewChildren } from '@angular/core';
import { ListElementsComponent } from "../list-elements/list-elements.component";
import { famousFootballPlayers } from '../../players';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-query-exercice-starter',
  imports: [ListElementsComponent, FormsModule],
  templateUrl: './content-query-exercice-starter.component.html',
  styleUrl: './content-query-exercice-starter.component.css',
})
export class ContentQueryExerciceStarterComponent {
  searchFieldValue = signal('');
  players = signal(famousFootballPlayers);
  filtredList = computed(() => {
    return this.players().filter((player) =>
      player.toLowerCase().includes(this.searchFieldValue().toLowerCase())
    );
  });
}
