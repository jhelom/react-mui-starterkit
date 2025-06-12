import {Convert} from './convert.ts';

describe('Convert', () => {
    it('toDateStringOrEmpty', () => {
        expect(Convert.toDateStringOrEmpty(undefined)).toBe('');
        expect(Convert.toDateStringOrEmpty(null)).toBe('');
        expect(Convert.toDateStringOrEmpty('2025-01-02')).toBe('2025/01/02');
        expect(Convert.toDateStringOrEmpty('2025-01-02T00:00:00')).toBe('2025/01/02');
        expect(Convert.toDateStringOrEmpty('2025-01-02T00:00:00Z+09:00')).toBe('2025/01/02');
        expect(Convert.toDateStringOrEmpty(new Date(2025, 0, 2))).toBe('2025/01/02');
        expect(Convert.toDateStringOrEmpty(new Date(2025, 0, 2, 3, 4, 5))).toBe('2025/01/02');
    });

    it('toStringOrEmpty', () => {
        expect(Convert.toStringOrEmpty(undefined)).toBe('');
        expect(Convert.toStringOrEmpty(null)).toBe('');
        expect(Convert.toStringOrEmpty('')).toBe('');
        expect(Convert.toStringOrEmpty('a')).toBe('a');
        expect(Convert.toStringOrEmpty(0)).toBe('0');
        expect(Convert.toStringOrEmpty(1)).toBe('1');
        expect(Convert.toStringOrEmpty(-1)).toBe('-1');
    });

    it('formatPrice', () => {
        expect(Convert.formatPrice(undefined)).toBe('');
        expect(Convert.formatPrice(null)).toBe('');
        expect(Convert.formatPrice(-1234567)).toBe('-1,234,567');
        expect(Convert.formatPrice(-1)).toBe('-1');
        expect(Convert.formatPrice(0)).toBe('0');
        expect(Convert.formatPrice(1)).toBe('1');
        expect(Convert.formatPrice(1234567)).toBe('1,234,567');
    });

    it('toNumber', () => {
        expect(Convert.toNumber(undefined)).toBe(NaN);
        expect(Convert.toNumber(null)).toBe(0);
        expect(Convert.toNumber('')).toBe(0);
        expect(Convert.toNumber(0)).toBe(0);
        expect(Convert.toNumber('0')).toBe(0);
        expect(Convert.toNumber(1)).toBe(1);
        expect(Convert.toNumber('1')).toBe(1);
        expect(Convert.toNumber(-1)).toBe(-1);
        expect(Convert.toNumber('-1')).toBe(-1);
    });


    it('toISODateStringOrEmpty', () => {
        expect(Convert.toISODateStringOrEmpty(undefined)).toBe('');
        expect(Convert.toISODateStringOrEmpty(null)).toBe('');
        expect(Convert.toISODateStringOrEmpty('2025-01-02')).toBe('2025-01-02');
        expect(Convert.toISODateStringOrEmpty('2025-01-02T00:00:00')).toBe('2025-01-02');
        expect(Convert.toISODateStringOrEmpty(new Date(2025, 0, 2))).toBe('2025-01-02');
        expect(Convert.toISODateStringOrEmpty('invalid-date')).toBe('');
    });

    it('toDateOrNull', () => {
        expect(Convert.toDateOrNull(undefined)).toBeNull();
        expect(Convert.toDateOrNull(null)).toBeNull();
        expect(Convert.toDateOrNull('')).toBeNull();
        expect(Convert.toDateOrNull('2025-01-02')).toEqual(new Date(2025, 0, 2));
        expect(Convert.toDateOrNull('invalid-date')).toBeNull();
        const date = new Date(2025, 0, 2);
        expect(Convert.toDateOrNull(date)).toBe(date);
        // フォーマット指定
        expect(Convert.toDateOrNull('01/02/2025', 'MM/dd/yyyy')).toEqual(new Date(2025, 0, 2));
    });
});
