import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'am-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'About Me';

	constructor() {
	}

	ngOnInit(): void {
	}
}
