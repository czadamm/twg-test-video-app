import { YouTubeSearchResponse } from '@/src/services/types';

export const VIDEOS: YouTubeSearchResponse = {
  pageInfo: {
    totalResults: 2136,
    resultsPerPage: 5,
  },
  items: [
    {
      id: {
        kind: 'youtube#video',
        videoId: 'cPN4H0sSCHQ',
      },
      snippet: {
        publishedAt: '2023-01-16T16:58:40Z',
        title: 'Switch Disco - REACT (feat. Ella Henderson) (Lyric Video)',
        description:
          'Stream "REACT" here: https://switchdisco.lnk.to/REACToutnow INSTAGRAM: https://www.instagram.com/switchdisco FACEBOOK: ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/cPN4H0sSCHQ/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/cPN4H0sSCHQ/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/cPN4H0sSCHQ/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'SwitchDiscoVEVO',
      },
    },
    {
      id: {
        kind: 'youtube#video',
        videoId: 'Tn6-PIqc4UM',
      },
      snippet: {
        publishedAt: '2020-09-08T19:06:55Z',
        title: 'React in 100 Seconds',
        description:
          'React is a little JavaScript library with a big influence over the webdev world. Learn the basics of React in 100 Seconds ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/Tn6-PIqc4UM/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/Tn6-PIqc4UM/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/Tn6-PIqc4UM/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Fireship',
      },
    },
    {
      id: {
        kind: 'youtube#video',
        videoId: 'FQH9OzUmEZU',
      },
      snippet: {
        publishedAt: '2024-10-20T12:47:43Z',
        title: 'Flutter vs React Native Which is Better for Mobile App Development?',
        description: 'Thanks for watching.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/FQH9OzUmEZU/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/FQH9OzUmEZU/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/FQH9OzUmEZU/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Yaqoob Developer',
      },
    },
  ],
};
