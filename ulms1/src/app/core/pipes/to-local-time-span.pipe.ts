import { Pipe, PipeTransform } from '@angular/core';
import { L10nService } from '../../services/l10n.service';

@Pipe({
    name: 'toLocalTimeSpan'
})
export class ToLocalTimeSpanPipe implements PipeTransform {
    constructor(private l10nService: L10nService) {}

    transform(value: any, args?: any): any {
        let id;
        let otherValue;
        if (args) {
            id = args.id ? args.id : '';
            otherValue = args.otherValue ? args.otherValue : '';
        }
        const getTransformTime = (timeValue) => {

            const sec_num = parseInt(timeValue, 10);
            const hours = Math.floor(sec_num / 3600) % 24;
            const minutes = Math.floor(sec_num / 60) % 60;
            const seconds = sec_num % 60;

            return [hours, minutes, seconds]
                .map(v => v < 10 ? '0' + v : v)
                .filter((v, i) => v !== '00' || i > 0)
                .join(':');

        };

        let activeTimeTransform = '';

        if (id === 'active' || id === 'closed') {
            if (value) {
                activeTimeTransform = getTransformTime(value);
            } else {
                activeTimeTransform = '00:00';
            }
            if (otherValue) {
                activeTimeTransform += ' / ' + getTransformTime(otherValue);
            }
        }

        if (id === 'recommended' || id === 'optional' || id === 'upcoming') {
            if (value) {
                activeTimeTransform = getTransformTime(value);
            } else {
                activeTimeTransform = this.l10nService.translate('txt_not_specified');
            }

        }

        return activeTimeTransform;
    }
}
