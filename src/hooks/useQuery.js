import {useState, useEffect} from "react";

export default function useQuery(query) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // TODO: Add real AJAX Call
        // TODO: Result should have X axis and Y axis labels
        if (!query)
            return () => {}
        setLoading(true);
        const t = setTimeout(() => {
            const values = [];
            for (let i = 0 ; i < 10; i++) {
                values.push({
                    name: `Point ${i}`,
                uv: Number(Math.random() * 100)
                }
                )
            }
            setResults(values)
            setLoading(false)
        }, 3000)
        return () => {
            clearTimeout(t);
        }
    }, [query])

    return {
        results,
        loading
    }
}