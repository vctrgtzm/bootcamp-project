import axios from "axios";
import { useEffect, useState } from "react";

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
