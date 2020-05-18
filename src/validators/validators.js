export const requiredField = value => {
    return value ? undefined : 'Це поле обовязкове'
};

export const maxLengthCreator = maxLength => value => {
    return value.length > maxLength ? `Максимальна довжина не більше ${maxLength} символів` : undefined
};