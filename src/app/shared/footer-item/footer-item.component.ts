import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'am-footer-item',
	templateUrl: './footer-item.component.html',
	styleUrls: ['./footer-item.component.scss']
})
export class FooterItemComponent implements OnInit {

	@Input() link: string;
	@Input() name: string;
	@Input() showImage = false;

	constructor() {
	}

	ngOnInit() {
		if (typeof this.link !== 'string') {
			throw new Error('Please provide a link as input');
		}
	}
}
