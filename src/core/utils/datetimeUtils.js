import moment from "moment";

export function dateInputToTimestamps(day, month, year) {
  const timestamp = new Date(year, month - 1, date.day).getTime();
}

function nanoToSecondTimestampto(timestamp) {
  const timestampInNanoseconds = 1704939117903545000;

  // Konversi timestamp ke dalam satuan detik
  const timestampInSeconds = timestampInNanoseconds / 1e9;

  // Buat objek Date berdasarkan timestamp dalam detik
  return timestampInSeconds;
}

export function getHumanFormat(nanoTimestamp) {
  const timestamp = nanoToSecondTimestampto(nanoTimestamp);
  console.log(nanoTimestamp);
  const date = moment.unix(timestamp).format("D MMM YYYY");
  return date;
}

export function getUpdatedAtStatus(nanoTimestamp) {
  const timestamp = nanoToSecondTimestampto(nanoTimestamp);
  const updatedAt = moment.unix(timestamp);
  const now = moment();

  const difference = now.diff(updatedAt, "days");

  if (difference < 1) {
    return "updated today";
  } else if (difference < 7) {
    return `updated at ${difference} days ago`;
  } else if (difference < 365) {
    return `updated at ${difference / 7} weeks ago`;
  } else {
    return `updated at ${difference / 365} years ago`;
  }
}
