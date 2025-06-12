export const Messages = {
    http401: '認証エラーが発生しました',
    http400: 'リクエストエラーが発生しました',
    http404: 'ページが存在しません',
    http500: 'サーバーエラーが発生しました',
    errors: {
        network: 'ネットワークエラーが発生しました。\nサーバーと通信できません。',
        unknown: '不明なエラーが発生しました',
        required: '必須です',
        number: '数字で入力してください',
        date: '正しい日付を入力してください',
        minLength: (min: number | bigint) => `${min}文字以上で入力してください`,
        maxLength: (max: number | bigint) => `${max}文字以内で入力してください`,
    }
};
