import axios from 'axios';

const fetchCourses= async () => {
  try {
    const response = await axios.get('http://localhost:3000/courses');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export { fetchCourses };