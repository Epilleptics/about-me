import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
	selector: 'am-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'About Me';

	constructor(googleAnalytics: Angulartics2GoogleAnalytics) {
	}

	ngOnInit(): void {
	}
}
