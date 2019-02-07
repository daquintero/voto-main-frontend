import numeral from 'numeral';

export default (val, len, formatType) => {
  if (val) {
    if (typeof val === 'string' && len) {
      return `${val.toString().substring(0, len)}${val.toString().length > len ? '...' : ''}`;
    }
    if (typeof val === 'number') {
      return formatType ? numeral(val).format(formatType).toUpperCase() : numeral(val).format('$ 0.0a').toUpperCase();
    }
  }
  return val;
};
