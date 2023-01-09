import { names } from "../data/ToolboxTopics";
import { topicArray } from "../data/ToolboxTopics";
const generateSchedule = (days) => {
  let scheduleData = [];
  let namesBackup = names;
  let topicsBackup = topicArray;
  let numOfDays = days;
  const now = new Date();
  const time = now.getTime();
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  for (let i = 1; i < numOfDays; i++) {
    const current = new Date(time + i * 24 * 60 * 60 * 1000);
    let speaker;
    let topic;
    let currentdate;
    if (current.getDay() === 0 || current.getDay() === 6) {
      numOfDays++;
    }
    if (current.getDay() !== 0 && current.getDay() !== 6) {
      currentdate = new Intl.DateTimeFormat("en-UK", options).format(current);
      if (namesBackup.length === 1) {
        speaker = namesBackup[0];
        namesBackup = names;
      } else {
        speaker =
          namesBackup[Math.trunc(Math.random() * namesBackup.length - 1) + 1];
        namesBackup = namesBackup.filter((item) => item !== speaker);
      }
      topic =
        topicsBackup[Math.trunc(Math.random() * topicsBackup.length - 1 + 1)];
      topicsBackup = topicsBackup.filter((item) => item !== topic);
      scheduleData.push({
        id: `${topic.name.charAt(5)}${topic.name.charAt(0)}${speaker.charAt(
          3
        )}${speaker.charAt(3)}`,
        speaker,
        date: currentdate,
        topic: topic.name,
        link: topic.link,
      });
    }
  }
  console.log(scheduleData);
  return scheduleData;
};

export default generateSchedule;
