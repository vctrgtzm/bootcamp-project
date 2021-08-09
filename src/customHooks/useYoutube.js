import axios from "axios";
import { useEffect, useState } from "react";

export function useYoutubeSearch(defaultSearchTerm, defaultMaxResults) {
    const [searchTerm, setSearchTerm] = useState(defaultSearchTerm);
    const [searchMaxResults, setSearchMaxResults] = useState(defaultMaxResults);
    const [searchIsLoading, setSearchIsLoading] = useState(true);
    const [searchError, setSearchError] = useState(null);
    const [searchResult, setSearchRestult] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            setSearchIsLoading(true);

            await axios.get('https://www.googleapis.com/youtube/v3/search',
                {
                    params: {
                        part: 'snippet',
                        maxResults: searchMaxResults,
                        key: process.env.REACT_APP_YOUTUBE_API_KEY,
                        q: searchTerm,
                        type: 'video'
                    }
                }).then(res => {
                    setSearchRestult(res.data);
                }).catch(err => {
                    setSearchError(err);
                });

            setSearchIsLoading(false);
        }

        fetchData();
    }, [searchTerm, searchMaxResults]);

    return { searchResult, searchIsLoading, searchError, setSearchTerm, setSearchMaxResults };
}

export function useYoutubeVideo() {
    const [videoId, setVideoId] = useState(null);
    const [videoIsLoading, setVideoIsLoading] = useState(true);
    const [videoError, setVideoError] = useState(null);
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            setVideoIsLoading(true);

            await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                params: {
                    part: 'snippet,player',
                    id: videoId,
                    key: process.env.REACT_APP_YOUTUBE_API_KEY
                }
            }).then(res => {
                setVideoData(res.data);
            }).catch(err => {
                setVideoError(err);
            });

            setVideoIsLoading(false);
        }

        videoId && fetchData();

    }, [videoId]);

    return { videoData, videoIsLoading, videoError, videoId, setVideoId };

}

export function useYoutubeRelatedVideos(videoId, defaultMaxResults) {
    const [relatedVideosIsLoading, setRelatedVideosIsLoading] = useState(true);
    const [relatedVideosResult, setRelatedVideosResult] = useState(null);
    const [relatedVideosError, setRelatedVideosError] = useState(null);
    const [maxRelatedVideosResults, setMaxRelatedVideosResults] = useState(defaultMaxResults);

    useEffect(() => {
        const fetchData = async () => {
            setRelatedVideosIsLoading(true);

            await axios.get('https://www.googleapis.com/youtube/v3/search',
                {
                    params: {
                        part: 'snippet',
                        maxResults: maxRelatedVideosResults,
                        key: process.env.REACT_APP_YOUTUBE_API_KEY,
                        relatedToVideoId: videoId,
                        type: 'video'
                    }
                }).then(res => {
                    setRelatedVideosResult(res.data);
                }).catch(err => {
                    setRelatedVideosError(err);
                });

            setRelatedVideosIsLoading(false);
        }

        videoId && fetchData();

    }, [videoId, maxRelatedVideosResults]);

    return { relatedVideosResult, relatedVideosIsLoading, relatedVideosError, setMaxRelatedVideosResults };
}
