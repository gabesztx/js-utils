import { Pipe, PipeTransform } from '@angular/core';
import { L10nService } from '../../services/l10n.service';

@Pipe({
    name: 'tooltTip'
})
export class TooltipPipe implements PipeTransform {
    constructor(private l10n: L10nService) {}

    transform(value: any): any {
        let toolTipText = '';
        value.forEach((text, key) => {
            if (key === 0) {
                toolTipText = this.l10n.translate(text);
            } else {
                toolTipText += ' ' + this.l10n.translate(text);
            }
        });
        return toolTipText;
    }
}
