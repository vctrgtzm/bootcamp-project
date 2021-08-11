import axios from "axios";
import { useEffect, useState } from "react";

export function useYoutubeSearch(defaultSearchTerm = 'wizeline', defaultMaxResults=50) {
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
