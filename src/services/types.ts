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

export type YouTubeVideoResponse = {
  items: YouTubeVideoItem[];
};

export type YouTubeVideoItem = {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    publishedAt: string;
    channelTitle: string;
  };
  statistics: {
    viewCount: string;
    likeCount?: string;
    commentCount?: string;
  };
};

export type getVideosByQueryProps = {
  query: string;
  maxPerPage?: number;
  order?: string;
  pageToken?: string | null;
};
