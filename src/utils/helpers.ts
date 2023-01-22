import { Timestamp } from "firebase/firestore";

export const defaultAvatarUrl = "http://i.stack.imgur.com/Dj7eP.jpg";

export const parseDate = (epochDate: number) => {
  let days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  let dif = Math.floor(new Date().getTime() / 1000.0) - epochDate;
  let date = Timestamp.fromMillis(epochDate * 1000).toDate();
  if (dif < 86400) {
    return (
      TwoNumberFormat(date.getHours().toString()) +
      ":" +
      TwoNumberFormat(date.getMinutes().toString())
    );
  }
  if (dif < 604800) {
    return days[date.getDay() - 1];
  } else {
    return date.toLocaleDateString();
  }
};

const TwoNumberFormat = (num: string) => (num.length == 1 ? "0" + num : num);
