// OUTPUT : Wed, Apr 26
export const getFormattedDate = (dateTime) => {
  const dayObj = new Date(dateTime);
  const options = { weekday: "short", month: "short", day: "numeric" };

  let formattedDateStr = dayObj.toLocaleDateString(dayObj, options);

  return formattedDateStr;
};
