import { AfterViewInit, Component, computed, ElementRef, signal, ViewChild } from '@angular/core';
import { SearchComponent } from "../../search/search.component";
import { famousFootballPlayers } from '../../players';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewchild-starter-exo',
  imports: [FormsModule],
  templateUrl: './viewchild-starter-exo.component.html',
  styleUrls: ['./viewchild-starter-exo.component.css'],
  standalone: true
})
export class ViewchildStarterExoComponent implements AfterViewInit {
  players = signal(famousFootballPlayers);
  searchValue = signal('');
  @ViewChild('searchField', { read: ElementRef })
  searchElement!: ElementRef;
  filtredList = computed(() =>
    this.players().filter((player) =>
      player.toLowerCase().includes(this.searchValue())
    )
  );
  ngAfterViewInit(): void {
    this.searchElement.nativeElement.focus();
  }
}
