import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { childComponent } from './child.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './employee.service';
import { CountriesComponent } from './countries/countries.component';
import { CountriesService } from './countries.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { SeriesComponent } from './series/series.component';
import { ParallelComponent } from './parallel/parallel.component';
import { MyDirective } from './my.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    childComponent,
    FirstComponent,
    SecondComponent,
    EmployeeComponent,
    CountriesComponent,
    SeriesComponent,
    ParallelComponent,
    MyDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    OrderModule
  ],
  providers: [CountriesService, EmployeeService],
  bootstrap: [CountriesComponent]
})
export class AppModule { }
