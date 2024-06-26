import { useState, useEffect } from 'react';

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Add error state to handle fetch errors

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error); // Set error state if fetch fails
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error }; // Return error state along with data and loading state
};

export default useFetchData;
