import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent {

  stateControl = new FormControl('');
  states: string[] = ['Kerala', 'Tamil Nadu', 'Karnataka', 'Goa'];
  filteredStates: string[] = [];

  constructor() {
    this.stateControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterStates(value || ''))
    ).subscribe(res => {
      console.log(res);
      this.filteredStates = res
    });
  }

  private filterStates(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.toLowerCase().includes(filterValue));
  }

}
