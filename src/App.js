import Container from "react-bootstrap/Container";
import InputComponent from "./components/InputComponent";
import { useState } from "react";
import useQuery from "./hooks/useQuery";
import Chart from "./components/Chart";
import {DEFAULT_SQL_QUERY} from "./utils/defaults";
function App() {
  const [query, setQuery] = useState(DEFAULT_SQL_QUERY);
  function handleQuery(q) {
    setQuery(q);
  }

  const { results, loading } = useQuery(query);

  return (
    <Container style={{ height: "100vh" }}>
      <InputComponent handleQuery={handleQuery} />
      {query ? !loading ? <Chart data={results} /> : "Loading" : ""}
    </Container>
  );
}

export default App;
