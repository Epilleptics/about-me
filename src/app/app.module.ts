import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { APP_ROUTES } from 'app/app.routes';

import { AppComponent } from './app.component';
import { FooterItemComponent } from './shared/footer-item/footer-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@NgModule({
	providers: [
		{ provide: LocationStrategy, useClass: HashLocationStrategy }
	],
	declarations: [
		AppComponent,
		FooterItemComponent
	],
	imports: [
		RouterModule.forRoot(APP_ROUTES),
		FormsModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatToolbarModule,
		MatSidenavModule,
		BrowserModule,
		FlexLayoutModule,
		Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
