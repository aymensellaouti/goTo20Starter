import { Component, computed, inject, Injector, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { countries } from '../data/countries';
import { JsonPipe } from '@angular/common';
import { Country } from '../model/country.interface';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-currency-selector',
  imports: [FormsModule],
  templateUrl: './country-currency-selector.component.html',
  styleUrl: './country-currency-selector.component.css',
})
export class CountryCurrencySelectorComponent {
  countries = signal(countries);
  selectedCountry = signal(countries[0]);
  countries$!: Observable<Country[]>;
  injector = inject(Injector);
  /**
   * On va dépendre de selectedCountry => a chaque modification du pays sélectionné voila ce que je fais :
   *
   * Si l'ancienne valeur de devise est incluse dans la liste des monnies du nouveau pays sélectionné
   * Je la garde
   * Sinon on mette celle par défaut du nouveau pays séléctionné
   */
  selectedCurrency = linkedSignal<Country, string>({
    // Les signaux dont je dépend
    source: this.selectedCountry,
    // Comment je calcule la nouvelle valeur
    computation: (newCountry, previousValues) => {
      const oldSelectedCurrency = previousValues?.value ?? '';
      return newCountry.acceptedCurrencies.includes(oldSelectedCurrency)
            ? oldSelectedCurrency
            : newCountry.defaultCurrency
    }
  })

  test() {
    this.countries$ = toObservable(this.countries, {
      injector: this.injector
    });
  }
}
