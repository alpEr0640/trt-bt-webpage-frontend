const dateTimeSelector = (rawDate) => {
  let unix_timestamp = Date.parse(rawDate);
  var a = new Date(unix_timestamp);
  var months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var day = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();

  const customizedDate = { year, month, day, hour, min, sec };
  return customizedDate;
};

export { dateTimeSelector };
