import { Component, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkillComponent } from './skill/skill.component';
import { skills } from '../data/skills';
import { Skill } from '../models/skill';

@Component({
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {

	@ViewChildren(SkillComponent)
	private progressComponents: QueryList<SkillComponent>;

	public skills: Array<Skill> = [];

	constructor(private route: ActivatedRoute) {
		this.skills = skills.map(skill => {
			return {
				...skill,
				image: skill.image ? `assets/images/${skill.image}` : skill.image,
				score: skill.score / 100
			};
		});
	}

	ngAfterViewInit() {
		this.route.url.subscribe(() => {
			this.showSkillPercentage();
		});
	}

	private showSkillPercentage() {
		this.progressComponents.forEach(progress => progress.showScore());
	}
}
