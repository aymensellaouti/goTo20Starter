import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { countries } from '../data/countries';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-country-currency-selector',
  imports: [FormsModule],
  templateUrl: './country-currency-selector.component.html',
  styleUrl: './country-currency-selector.component.css',
})
export class CountryCurrencySelectorComponent {
  countries = signal(countries);
  selectedCountry = signal(countries[0]);
  selectedCurrency = computed(() => this.selectedCountry().acceptedCurrencies[0]);
}
