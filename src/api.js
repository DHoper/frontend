import axios from 'axios';

const URL = 'https://raspberrypia.zeabur.app';

export async function getRealtimeData() {
  const response = await axios.get(`${URL}/realtime`);
  return response.data;
}

export async function getPre7DayData() {
  const response = await axios.get(`${URL}/storedData/Pre7Day`);
  return response.data;
}

export async function getSpecificDateData(date) {
  const response = await axios.get(`${URL}/storedData/specificDate`, { params: { date } });
  return response.data;
}