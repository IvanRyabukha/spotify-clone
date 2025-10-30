import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export function formatTime(value: number) {
  return dayjs.utc(value * 1000).format('m:ss');
}

export default formatTime;