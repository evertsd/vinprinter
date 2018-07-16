export const toNumber = numberString => {
    const number = Number(numberString);

    return isNaN(number) ? numberString : number.toLocaleString('en-US');
};
