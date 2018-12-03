const inputKeys = {
    'STOCK-NO.': 'stockNumber',
    YR: 'year',
    MAKE: 'make',
    MODEL: 'model',
    SERIAL: 'vin',
    COLOR: 'color',
};

const reduceCDKText = (label, line) => {
    const data = line.split(/\s/).filter(str => !!str);
    const key = inputKeys[data[0]];

    if (key) {
        label[key] = data.slice(1, data.length).join(' ');
    }

    return label;
};

export default batchInput => {
    const lines = batchInput.split(/\n/).filter(str => !!str);

    return lines.reduce(reduceCDKText, { batchInput });
};
