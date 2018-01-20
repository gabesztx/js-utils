import { Pipe, PipeTransform } from '@angular/core';
import { L10nService } from '../../services/l10n.service';

@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform {
    constructor (private l10n: L10nService) {}
    transform(value: any, args?: any): any {
        return this.l10n.translate(value, args);
    }
}
