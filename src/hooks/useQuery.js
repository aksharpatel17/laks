import { useState, useEffect } from "react";
import {DEFAULT_SQL_QUERY} from "../utils/defaults";


export default function useQuery(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) query = DEFAULT_SQL_QUERY;
    setLoading(true);
    const t = fetch(
      "https://2hiz3fpmurkgsv72leev3agoma0woxry.lambda-url.ca-central-1.on.aws/",
      {
        method: "POST",
        body: JSON.stringify({ query }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const mappedData = data.rows.map((dataInstance) => ({
          name: dataInstance.issuing_agency,
          uv: dataInstance.count,
        }));
        setResults(mappedData);
        setLoading(false);
      });
    return () => {};
  }, [query]);

  return {
    results,
    loading,
  };
}
