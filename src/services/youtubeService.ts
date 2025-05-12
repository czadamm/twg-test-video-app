import axios from 'axios';
import { getVideosByQueryProps, YouTubeSearchResponse, YouTubeVideoResponse } from '@/src/services/types';
import { TEST_SEARCH_VIDEOS, TEST_VIDEOS } from '@/src/services/test-data';

// temp public access to API for recruitment process only
// TODO: delete YOUTUBE_API_KEY after demonstration
// const YOUTUBE_API_KEY = 'AIzaSyBLplCPgEIVIZJDM7fxuf-rhW1AU1mwSjk';
const YOUTUBE_API_KEY = 'AIzaSyChPziNFHvSyNN_p4d_FUoAq1DG5XF3-98';

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

export async function getVideoById(id: string) {
  const response = await axios.get<YouTubeVideoResponse>('https://www.googleapis.com/youtube/v3/videos', {
    params: {
      key: YOUTUBE_API_KEY,
      part: 'snippet, statistics',
      id: id,
    },
  });

  return response.data.items[0];
}

export function getTestVideosData(initialLoad: boolean) {
  if (initialLoad) {
    return TEST_SEARCH_VIDEOS;
  } else
    return {
      pageInfo: {
        totalResults: 0,
        resultsPerPage: 0,
      },
      items: [],
    };
}

export function getTestVideoData(id: string) {
  return TEST_VIDEOS.items.find((item) => item.id === id);
}
