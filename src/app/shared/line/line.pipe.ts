import { Pipe, PipeTransform } from '@angular/core';
import { Line } from '../../models/line';

@Pipe({name: 'line'})
export class LinePipe implements PipeTransform {
	transform(line: Line): string {
		const content = line.content;
		if (Array.isArray(content)) {
			return content.join('');
		}
		return content;
	}
}
