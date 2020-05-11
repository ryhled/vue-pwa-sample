import { API_URL } from '@/config';
import axios from 'axios';

export const getPosts = async function getPosts() {
  try {
    console.info(`?Retrieving posts from ${API_URL}..`);
    const response = await axios.get(`https://${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createPost = async function createPost(post: any) {
  try {
    console.info(`Creating post, target: ${API_URL}..`);
    await axios.post(`https://${API_URL}/posts`, post);
  } catch (error) {
    console.error(error);
  }
};
