import { Component, computed, resource, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { API } from 'src/config/api.config';

export interface UserR {
  id: number;
  name: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}


@Component({
  selector: 'app-user-resource',
  imports: [FormsModule],
  templateUrl: './user-resource.component.html',
  styleUrl: './user-resource.component.css',
})
export class UserResourceComponent {
  search = signal<string>('');
}
