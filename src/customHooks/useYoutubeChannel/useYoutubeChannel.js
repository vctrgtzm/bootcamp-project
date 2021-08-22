import axios from "axios";
import { useEffect, useState } from "react";

export function useYoutubeChannel(channelId) {
    const [channelIsLoading, setChannelIsLoading] = useState(true);
    const [channelResult, setChannelResult] = useState(null);
    const [channelError, setChannelError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setChannelIsLoading(true);

            await axios.get('https://www.googleapis.com/youtube/v3/channels',
                {
                    params: {
                        part: 'snippet',
                        key: process.env.REACT_APP_YOUTUBE_API_KEY,
                        id: channelId
                    }
                }).then(res => {
                    setChannelResult(res.data)
                }).catch(err => {
                    setChannelError(err);
                });

            setChannelIsLoading(false);
        }

        channelId && fetchData();
    }, [channelId]);

    return { channelResult, channelIsLoading, channelError };
}
