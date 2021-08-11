import axios from "axios";
import { useEffect, useState } from "react";

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
