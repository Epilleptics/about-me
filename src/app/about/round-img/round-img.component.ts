import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'am-round-image',
	templateUrl: './round-img.component.html',
	styleUrls: ['./round-img.component.scss']
})
export class RoundImgComponent implements OnInit {

	@Input() image: string;

	constructor() {
	}

	ngOnInit() {
		if (typeof this.image !== 'string') {
			throw new Error('Please provide an image as input');
		}
	}
}
