import axios from 'axios';
import { getVideosByQueryProps, YouTubeSearchItem, YouTubeSearchResponse } from '@/src/services/types';
import { VIDEOS } from '@/src/services/test-data';

// temp public access to API for recruitment process only
// TODO: delete YOUTUBE_API_KEY after demonstration
const YOUTUBE_API_KEY = 'AIzaSyBLplCPgEIVIZJDM7fxuf-rhW1AU1mwSjk';

export async function getVideosByQuery({ query, maxPerPage, order, pageToken }: getVideosByQueryProps) {
  const response = await axios.get<YouTubeSearchResponse>('https://www.googleapis.com/youtube/v3/search', {
    params: {
      key: YOUTUBE_API_KEY,
      type: 'video',
      part: 'snippet',
      order: order || 'viewCount',
      maxResults: maxPerPage || 5,
      pageToken: pageToken || undefined,
      q: query,
    },
  });

  return response.data;
}

export function getTestVideoData(initialLoad: boolean) {
  if (initialLoad) {
    return VIDEOS;
  } else
    return {
      pageInfo: {
        totalResults: 0,
        resultsPerPage: 0,
      },
      items: [],
    };
}
