import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'am-skill',
	templateUrl: './skill.component.html',
	styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

	@Input() score = .25;
	@Input() name = '';
	@Input() image: string;

	private initialStroke = 890;
	private additionalStroke = 314;
	private stroke: number;

	getScoreForDescription(): number {
		return ~~(this.score * 100) / 10;
	}

	constructor() {
	}

	ngOnInit() {
		this.stroke = this.initialStroke;
	}

	showScore() {
		requestAnimationFrame(() => {
			this.stroke = this.initialStroke;
			requestAnimationFrame(() => {
				this.stroke = this.initialStroke + (this.additionalStroke * this.score);
			});
		});
	}
}
