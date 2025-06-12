import {z} from 'zod';

import {Messages} from '../messages';

import {zodJapaneseErrorMap} from './zod-japanese-error-map';

describe('zodJapaneseErrorMap', () => {
    const ctx = {defaultError: 'デフォルトエラー', data: undefined, path: [], schema: {}};

    it('custom', () => {
        const issue = {code: z.ZodIssueCode.custom} as z.ZodIssue;
        const result = zodJapaneseErrorMap(issue, ctx);
        expect(result).toBeDefined();
    });

    it('invalid date', () => {
        const issue = {code: z.ZodIssueCode.invalid_date} as z.ZodIssue;
        const result = zodJapaneseErrorMap(issue, ctx);
        expect(result).toBeDefined();
        expect(result.message).toBe(Messages.errors.date);
    });

    it('to small (required)', () => {
        const issue = {code: z.ZodIssueCode.too_small, type: 'string', minimum: 1} as z.ZodIssue;
        const result = zodJapaneseErrorMap(issue, ctx);
        expect(result).toBeDefined();
        expect(result.message).toBe(Messages.errors.required);
    });

    it('to small (min length)', () => {
        const issue = {code: z.ZodIssueCode.too_small, minimum: 2} as z.ZodIssue;
        const result = zodJapaneseErrorMap(issue, ctx);
        expect(result).toBeDefined();
        expect(result.message).toBe(Messages.errors.minLength(2));
    });
});
