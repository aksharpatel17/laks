import { useState, useEffect } from "react";
import {DEFAULT_SQL_QUERY} from "../utils/defaults";


export default function useQuery(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [key_values, setKeyValues] = useState([]);

  useEffect(() => {
    if (!query) query = DEFAULT_SQL_QUERY;
    console.log(JSON.stringify(query))
    setLoading(true);
    const t = fetch(
      "https://2hiz3fpmurkgsv72leev3agoma0woxry.lambda-url.ca-central-1.on.aws/",
      // "https://4w12s32b0g.execute-api.ca-central-1.amazonaws.com/default/issuerQuery",
      {
        method: "POST",
        body: JSON.stringify({ query }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        var keys = Object.keys(data.rows[0]);
        setKeyValues(keys)
        const mappedData = data.rows.map((dataInstance) => (
          
          {
         
          name: dataInstance[keys[0]],
          count: dataInstance[keys[1]],
        }));
        setResults(mappedData);
        setLoading(false);
      });
    return () => {};
  }, [query]);

  return {
    results,
    loading,
    key_values
  };
}
