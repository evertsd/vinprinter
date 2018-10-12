const inputKeys = {
    'STOCK-NO.': 'stockNumber',
    YR: 'year',
    MAKE: 'make',
    MODEL: 'model',
    SERIAL: 'vin',
    COLOR: 'color',
};

export default currentState => {
    const lines = currentState.batchInput.split(/\n/).filter(str => !!str);

    return lines.reduce((label, line) => {
        const data = line.split(/\s/).filter(str => !!str);
        const key = inputKeys[data[0]];

        if (key) {
            label[key] = data.slice(1, data.length).join(' ');
        }

        return label;
    }, {});
};
