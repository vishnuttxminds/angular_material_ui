import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsComponent } from './mat-tabs/mat-tabs.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormComponent } from './mat-form/mat-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonComponent } from './mat-button/mat-button.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectComponent } from './mat-select/mat-select.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCheckBoxComponent } from './mat-check-box/mat-check-box.component';
import { MatRadioComponent } from './mat-radio/mat-radio.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatePickerComponent } from './mat-date-picker/mat-date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    MatTabsComponent,
    MatFormComponent,
    MatButtonComponent,
    MatSelectComponent,
    MatCheckBoxComponent,
    MatRadioComponent,
    MatDatePickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
