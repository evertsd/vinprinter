import moment from 'moment';

export const initialStockTagState = {
  stockNumber: '',
  year: '',
  vin: '',
  make: '',
  model: '',
  color: '',
  miles: ''
}

export const parseStockTag = stockTagInput => {
    const data = stockTagInput.split(/\s/).filter(str => !!str);

    return {
        raw: stockTagInput,
        stockNumber: data[1] || initialStockTagState['stockNumber'],
        year: data[3] || initialStockTagState['year'],
        vin: data[9] || initialStockTagState['vin'],
        make: data[5] || initialStockTagState['make'],
        model: data[7] || initialStockTagState['model'],
        receivedOn: moment().format('DD/MM/YYYY'),
    };
};
