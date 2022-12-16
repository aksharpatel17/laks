import {useState} from "react";
import Button from 'react-bootstrap/Button';
import FormControl from "react-bootstrap/FormControl";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {DEFAULT_SQL_QUERY} from "../../utils/defaults";


export default function InputComponent ({handleQuery}) {
    const [query, setQuery] = useState(DEFAULT_SQL_QUERY);
    return (<div>
        <form onSubmit={(e) => {
            e.preventDefault();
            handleQuery(query);
        }}>
            <Row>
                <Col md={4}>
                <FormControl type="text" value={query} onChange={(e) => {setQuery(e.target.value)}}/>
                </Col>
                <Col md={3}>
                <Button type="submit">Submit</Button>
                </Col>
            </Row>
        </form>
    </div>)
}
