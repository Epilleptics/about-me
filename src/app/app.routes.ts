export const APP_ROUTES = [
	{path: 'about', loadChildren: './about/about.module#AboutModule'},
	{path: 'skills', loadChildren: './skills/skills.module#SkillsModule'},
	{path: '**', redirectTo: 'about'}
];