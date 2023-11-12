import axios from 'axios';

const fetchEvents = async () => {
  try {
    const response = await axios.get('http://localhost:3000/events');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export { fetchEvents };
