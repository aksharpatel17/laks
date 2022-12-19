import { useState } from "react";
import Button from 'react-bootstrap/Button';
import FormControl from "react-bootstrap/FormControl";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DEFAULT_SQL_QUERY } from "../../utils/defaults";


export default function InputComponent({ handleQuery }) {
    const [query, setQuery] = useState(DEFAULT_SQL_QUERY);
    return (<div>
        <form onSubmit={(e) => {
            e.preventDefault();
            handleQuery(query);
        }}>
            <Row>
                <Col className="white mt-4 pt-1" md={3}>
                    Please Enter The Query Here:
                </Col>
                <Col md={9}>
                    <FormControl type="text" className={"mt-4 placeholder"} placeholder="Enter Your Query" value={query} onChange={(e) => { setQuery(e.target.value) }} />
                </Col>
                <Col className="white mt-4 pt-1" md={3}>
                </Col>
                <Col md={8}>
                    <Button type="submit" className={"mt-3 mb-4 ttu"}>Submit</Button>
                </Col>
            </Row>
        </form>
    </div>)
}
