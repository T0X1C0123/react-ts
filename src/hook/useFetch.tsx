import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const jsonData = await response.json();
                
                setData(jsonData);
                setError(null);

            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, [url]);

    return { data, loading, error };
}