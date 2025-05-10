import axios from 'axios';
import { getVideosByQueryProps, YouTubeSearchResponse } from '@/src/services/types';

// temp public access to API for recruitment process only
// TODO: delete YOUTUBE_API_KEY after demonstration
const YOUTUBE_API_KEY = 'AIzaSyBLplCPgEIVIZJDM7fxuf-rhW1AU1mwSjk';

export async function getVideosByQuery({ query, maxPerPage, order }: getVideosByQueryProps) {
  const response = await axios.get<YouTubeSearchResponse>('https://www.googleapis.com/youtube/v3/search', {
    params: {
      key: YOUTUBE_API_KEY,
      part: 'snippet',
      order: order || 'viewCount',
      maxResults: maxPerPage || 10,
      q: query,
    },
  });

  return response.data;
}
