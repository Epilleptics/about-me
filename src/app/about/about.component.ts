import { Component, OnInit } from '@angular/core';
import { Line } from '../models/line';
import { ABOUT } from '../data/about';

@Component({
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	lines: Array<Line> = ABOUT;

	constructor() {
	}

	ngOnInit() {
	}
}
