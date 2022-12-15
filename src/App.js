import Container from 'react-bootstrap/Container'
import InputComponent from "./components/InputComponent";
import {useState} from "react";
import useQuery from "./hooks/useQuery";
import Chart from "./components/Chart";
function App() {
   const [query, setQuery] = useState('');
   function handleQuery(q) {
    setQuery(q);
   }

   const {results, loading} = useQuery(query);

  return (
      <Container style={{backgroundColor: "lightskyblue", height: "100vh"}}>
        <InputComponent handleQuery={handleQuery}/>
          { query ? !loading ?  <Chart data={results} /> : "Loading" : "" }
      </Container>
  );
}

export default App;
