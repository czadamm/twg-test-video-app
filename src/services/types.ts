export interface YouTubeSearchResponse {
  nextPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeSearchItem[];
}

export interface YouTubeSearchItem {
  id: {
    kind: 'youtube#video';
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
        width: number;
        height: number;
      };
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
  };
}

export type getVideosByQueryProps = {
  query: string;
  maxPerPage?: number;
  order?: string;
};
