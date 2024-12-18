import dayjs from 'dayjs';

function date(val, b) {
  let data = dayjs(val).format(b);
  return data;
}

export default {
  date
}