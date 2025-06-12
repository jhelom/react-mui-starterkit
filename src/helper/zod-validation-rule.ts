import log from 'loglevel';
import {z} from 'zod';
import {format, isValid, parse} from 'date-fns';
import _ from 'lodash';

import {Messages} from '../messages.ts';

export const ZodValidationRule = {
    stringOptional: () => z.string().optional().nullable(),

    stringRequired: () =>
        z.string()
            .transform((val) => _.trim(val))
            .refine((val) => val.length > 0, {message: Messages.errors.required}),

    numberOptional: () =>
        z.preprocess((val) => {
                if (_.isNil(val) || (_.isString(val) && _.trim(val) === '')) {
                    return undefined;
                }

                if (_.isString(val)) {
                    return _.toNumber(_.trim(val));
                }
                
                return val;
            },
            z.number({message: Messages.errors.number}).optional().nullable())
            .refine((val) => val === undefined || !_.isNaN(val), {
                message: Messages.errors.number
            })
            .transform((val) => val ?? null),

    numberRequired: () =>
        ZodValidationRule.stringRequired().refine((val) => /^[0-9]+$/.test(val), {
            message: Messages.errors.number
        }),

    dateOptional: (formatStr: string = 'yyyy/MM/dd') =>
        z.union([z.date(), z.string(), z.undefined(), z.null()])
            .transform(val => {
                if (_.isNil(val) || (_.isString(val) && _.trim(val) === '')) {
                    return {original: val, parsed: undefined};
                }

                if (_.isString(val)) {
                    const parsed = parse(val, formatStr, new Date());
                    return {original: val, parsed};
                }

                return {original: val, parsed: val};
            })
            .refine(({original, parsed}) => {
                if (_.isUndefined(parsed)) {
                    return true;
                }

                if (!isValid(parsed)) {
                    return false;
                }

                if (_.isString(original)) {
                    return format(parsed, formatStr) === original;
                }

                return true;

            }, {message: Messages.errors.date})
            .transform(({parsed}) => parsed ?? null),

    dateRequired: (formatStr: string = 'yyyy/MM/dd') =>
        z.union([z.date(), z.string(), z.undefined(), z.null()])
            .transform(val => {
                log.trace(typeof val, val);
                if (_.isNil(val) || (_.isString(val) && _.trim(val) === '')) {
                    return {original: val, parsed: undefined};
                }

                if (_.isString(val)) {
                    const parsed = parse(val, formatStr, new Date());
                    return {original: val, parsed};
                }

                return {original: val, parsed: val};
            })
            .refine(({original, parsed}) => {
                if (_.isUndefined(parsed)) {
                    return false;
                }

                if (!isValid(parsed)) {
                    return false;
                }

                if (_.isString(original)) {
                    return format(parsed, formatStr) === original;
                }

                return true;

            }, {message: Messages.errors.date})
            .transform(({parsed}) => parsed
            )
};
