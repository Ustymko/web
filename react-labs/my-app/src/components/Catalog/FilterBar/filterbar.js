import './filter-bar.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Form } from 'react-bootstrap';

function filterbar() {
    return(
        <div className="filter-bar">
            <div className="filters">
                <DropdownButton style={{}} className="dropdown" as={ButtonGroup} variant="secondary" title="filter 1">
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                        Active Item
                    </Dropdown.Item>
                </DropdownButton>

                <DropdownButton className="dropdown" as={ButtonGroup} variant="secondary" title="filter 1">
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                        Active Item
                    </Dropdown.Item>
                </DropdownButton>
            </div>
            <Button variant="outline-secondary">Apply filters</Button>
                <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search..."
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-secondary">Search</Button>
            </Form>
        </div>
    )
}

export default filterbar;