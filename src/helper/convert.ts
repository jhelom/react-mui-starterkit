import * as dateFns from 'date-fns';
import _ from 'lodash';

export class Convert {
    static formatPrice(value?: number | null): string {
        return value?.toLocaleString() || '';
    }

    static toNumber(value: unknown): number {
        return _.toNumber(value);
    }

    static toISODateStringOrEmpty(value: unknown): string {
        return this.toDateStringOrEmpty(value, 'yyyy-MM-dd');
    }

    static toDateStringOrEmpty(value: unknown, outputFormatStr: string = 'yyyy/MM/dd'): string {
        if (!value) {
            return '';
        }

        let date: Date;

        if (_.isString(value)) {
            date = dateFns.parseISO(value);
        } else {
            date = value as Date;
        }

        if (!dateFns.isValid(date)) {
            return '';
        }

        return dateFns.format(date, outputFormatStr);
    }

    static toDateOrNull(value: unknown, inputFormatStr: string = 'yyyy-MM-dd'): Date | null {
        if (_.isDate(value)) {
            return value;
        }

        if (_.isString(value)) {
            const parsedValue = dateFns.parse(value, inputFormatStr, new Date());
            return dateFns.isValid(parsedValue) ? parsedValue : null;
        }

        return null;
    }

    static toStringOrEmpty(value: unknown): string {
        if (_.isNumber(value)) {
            return value.toString();
        }

        if (_.isString(value)) {
            return value;
        }

        return '';
    }
}
