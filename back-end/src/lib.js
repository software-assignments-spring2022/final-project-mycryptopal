function getUnixTime(date) {
  return date.getTime() / 1000 | 0;
}

function from(queryInterval) {
  const d = new Date();
  d.setDate(d.getDate() - queryInterval);
  return getUnixTime(d);
}

function to() {
  return getUnixTime(new Date());
}

function transformData(data) {
  const mappedData = data.map((item) => {
    return { 
      timestamp: (new Date(item[0])).toLocaleDateString(),
      open: roundNumber(item[1]),
      close: roundNumber(item[2]),
    }});
  return mappedData;
}

function roundNumber(number) {
  let factor = 1;
  let rounded = Math.round(number * factor + Number.EPSILON) / factor;
  while(rounded === 0) {
    factor *= 10;
    rounded = Math.round(number * factor + Number.EPSILON) / factor;
  }
  return rounded;
}

function getDataMin(data) {
  return data.reduce((currentMin, current) => {
    const lower = Math.min(current.open, current.close);
    return Math.min(lower, currentMin);
  }, Infinity);
}

function getDataMax(data) {
  return dataMax = data.reduce((currentMax, current) => {
    const higher = Math.max(current.open, current.close);
    return Math.max(higher, currentMax)
  }, Number.NEGATIVE_INFINITY);
}

module.exports = {
  from: from,
  to: to,
  transformData: transformData,
  getDataMin: getDataMin,
  getDataMax: getDataMax,
};
