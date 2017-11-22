import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AboutComponent } from './about.component';
import { RoundImgComponent } from './round-img/round-img.component';
import { LinePipe } from '../shared/line/line.pipe';

const ABOUT_ROUTES = [
	{path: '', component: AboutComponent}
];

@NgModule({
	declarations: [
		AboutComponent,
		RoundImgComponent,
		LinePipe
	],
	imports: [
		FlexLayoutModule,
		CommonModule,
		RouterModule.forChild(ABOUT_ROUTES)
	]
})
export class AboutModule {
}
