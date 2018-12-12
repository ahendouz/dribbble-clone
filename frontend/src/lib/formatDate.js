export const formatDate = date => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const newDate = new Date(date).toLocaleDateString("en-US").split("/");
  const month = monthNames[newDate[0] - 1];
  const day = newDate[1];
  const year = newDate[2];
  return `${month} ${day}, ${year}`;
};
