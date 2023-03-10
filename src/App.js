import InputComponent from "./components/InputComponent";
import { useState } from "react";
import useQuery from "./hooks/useQuery";
import Chart from "./components/Chart";
import { DEFAULT_SQL_QUERY } from "./utils/defaults";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  const [query, setQuery] = useState(DEFAULT_SQL_QUERY);
  function handleQuery(q) {
    setQuery(q);
  }

  const { results, loading,key_values } = useQuery(query);

  return (
    <div>
      <Row className="underline">
        <Col className="underline1" md={2}>
          <div className="item">
            <img src="data:image/png;base64,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" alt="" className="avatar" />
          </div>
        </Col>
        <Col className="text" md={10}> GRAPH VISUALISATION</Col>
      </Row>

      <div className="container" style={{ height: "100vh" }}>
        <InputComponent handleQuery={handleQuery} />
        {query ? !loading ? <Chart data={results} keys = {key_values}/> : "Loading" : ""}
      </div>
    </div>
  );
}

export default App;
