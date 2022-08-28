const convertDMYToMDY = (dateToConvert) => {
  const [date, month, year] = dateToConvert.split("/");
  return [month, date, year].join("/");
};

module.exports = convertDMYToMDY;
