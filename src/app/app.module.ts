import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensComponent } from './mens/mens.component';
import  { WomensComponent } from './womens/womens.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './about-us/form/form.component';
import { TableComponent } from './about-us/table/table.component';
import { OverViewComponent } from './overview/over-view/over-view.component';
import { OverviewFormComponent } from './overview/overview-form/overview-form.component';
import { OverviewTableComponent } from './overview/overview-table/overview-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    // dont need to load these at initial load time
    MensComponent,
    WomensComponent,
    
    FormComponent,
    TableComponent,
    OverViewComponent,
    OverviewFormComponent,
    OverviewTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
