import {z} from 'zod';
import log from 'loglevel';

import {Messages} from '../messages.ts';

// Zodのエラーメッセージを日本語化
export const zodJapaneseErrorMap: z.ZodErrorMap = (issue, ctx) => {
    log.trace('ZodErrorMap', issue, ctx);
    switch (issue.code) {
        case z.ZodIssueCode.too_small:
            if (issue.type === 'string' && issue.minimum === 1) {
                return {message: Messages.errors.required};
            }
            return {message: Messages.errors.minLength(issue.minimum)};

        case z.ZodIssueCode.invalid_date:
            return {
                message: Messages.errors.date,
            };

        default:
            return {message: ctx.defaultError};
    }
};
