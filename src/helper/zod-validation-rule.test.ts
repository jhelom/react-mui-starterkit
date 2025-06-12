// noinspection DuplicatedCode

import {ZodValidationRule} from './zod-validation-rule.ts';

describe('Zod バリデーション', () => {
    it('string optional', () => {
        const schema = ZodValidationRule.stringOptional();
        expect(schema.safeParse(undefined).success).toBe(true);
        expect(schema.safeParse(null).success).toBe(true);
        expect(schema.safeParse('').success).toBe(true);
        expect(schema.safeParse(' ').success).toBe(true);
        expect(schema.safeParse('0').success).toBe(true);
        expect(schema.safeParse('1').success).toBe(true);
        expect(schema.safeParse('a').success).toBe(true);
    });

    it('string required', () => {
        const schema = ZodValidationRule.stringRequired();
        expect(schema.safeParse(undefined).success).toBe(false);
        expect(schema.safeParse(null).success).toBe(false);
        expect(schema.safeParse('').success).toBe(false);
        expect(schema.safeParse(' ').success).toBe(false);
        expect(schema.safeParse('0').success).toBe(true);
        expect(schema.safeParse('1').success).toBe(true);
        expect(schema.safeParse('a').success).toBe(true);
    });

    it('number optional', () => {
        const schema = ZodValidationRule.numberOptional();
        expect(schema.safeParse(undefined).success).toBe(true);
        expect(schema.safeParse(null).success).toBe(true);
        expect(schema.safeParse('').success).toBe(true);
        expect(schema.safeParse(' ').success).toBe(true);
        expect(schema.safeParse('0').success).toBe(true);
        expect(schema.safeParse(' 0 ').success).toBe(true);
        expect(schema.safeParse('1').success).toBe(true);
        expect(schema.safeParse(' 1 ').success).toBe(true);
        expect(schema.safeParse('1.1').success).toBe(true);
        expect(schema.safeParse('-1').success).toBe(true);
        expect(schema.safeParse('a').success).toBe(false);
        expect(schema.safeParse(0).success).toBe(true);
        expect(schema.safeParse(1).success).toBe(true);
        expect(schema.safeParse(1.1).success).toBe(true);
        expect(schema.safeParse(-1).success).toBe(true);
    });

    it('number required', () => {
        const schema = ZodValidationRule.numberRequired();
        expect(schema.safeParse(undefined).success).toBe(false);
        expect(schema.safeParse(null).success).toBe(false);
        expect(schema.safeParse('').success).toBe(false);
        expect(schema.safeParse(' ').success).toBe(false);
        expect(schema.safeParse('0').success).toBe(true);
        expect(schema.safeParse('1').success).toBe(true);
        expect(schema.safeParse('1.1').success).toBe(false);
        expect(schema.safeParse('-1').success).toBe(false);
        expect(schema.safeParse('a').success).toBe(false);
    });

    it('date optional', () => {
        const schema = ZodValidationRule.dateOptional();
        expect(schema.safeParse(undefined).success).toBe(true);
        expect(schema.safeParse(null).success).toBe(true);
        expect(schema.safeParse('').success).toBe(true);
        expect(schema.safeParse(' ').success).toBe(true);
        expect(schema.safeParse('0').success).toBe(false);
        expect(schema.safeParse('1').success).toBe(false);
        expect(schema.safeParse('a').success).toBe(false);
        expect(schema.safeParse('2025/01/02').success).toBe(true);
        expect(schema.safeParse('2025/02/31').success).toBe(false);
        expect(schema.safeParse('0000/00/00').success).toBe(false);
        expect(schema.safeParse('9999/99/99').success).toBe(false);
        expect(schema.safeParse(new Date()).success).toBe(true);
    });

    it('date required', () => {
        const schema = ZodValidationRule.dateRequired();
        expect(schema.safeParse(undefined).success).toBe(false);
        expect(schema.safeParse(null).success).toBe(false);
        expect(schema.safeParse('').success).toBe(false);
        expect(schema.safeParse(' ').success).toBe(false);
        expect(schema.safeParse('0').success).toBe(false);
        expect(schema.safeParse('1').success).toBe(false);
        expect(schema.safeParse('a').success).toBe(false);
        expect(schema.safeParse('2025/01/02').success).toBe(true);
        expect(schema.safeParse('2025/02/31').success).toBe(false);
        expect(schema.safeParse('0000/00/00').success).toBe(false);
        expect(schema.safeParse('9999/99/99').success).toBe(false);
        expect(schema.safeParse(new Date()).success).toBe(true);
    });
});
