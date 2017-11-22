import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SkillComponent } from './skill/skill.component';
import { SkillsComponent } from './skills.component';

const SKILL_ROUTES = [
	{path: '', component: SkillsComponent}
];

@NgModule({
	declarations: [
		SkillsComponent,
		SkillComponent
	],
	imports: [
		FlexLayoutModule,
		CommonModule,
		RouterModule.forChild(SKILL_ROUTES)
	]
})
export class SkillsModule {
}
