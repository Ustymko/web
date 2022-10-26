import './catalog.css'
import Items from './Items/items'
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function Catalog(){
    const [sortBy, setSortBy] = useState("Sort by: ");
    const [sortingOrder, setSortingOrder] = useState("Sorting order: ");
    const [sortingParametersObject, setSortingParametersObject] = useState({sortBy: "no", sortingOrder:"no"});

    const [searchValue, setSearchValue] = useState("");
    const [searchValueProp, setSearchValueProp] = useState("");

    return(
        <div className="catalog">
            <div className="filter-bar">
            <div className="filters">
                <DropdownButton className="dropdown" as={ButtonGroup} variant="secondary" title={sortBy}>
                    <Dropdown.Item onClick={() => setSortBy("Sort by price")} eventKey="1">Price</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortBy("Sort by horsepower")} eventKey="2">Horsepower</Dropdown.Item>
                </DropdownButton>

                <DropdownButton className="dropdown" as={ButtonGroup} variant="secondary" title={sortingOrder}>
                    <Dropdown.Item onClick={() => setSortingOrder("Ascending order")} eventKey="1">Ascending</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSortingOrder("Descending order")} eventKey="2">Descending</Dropdown.Item>
                </DropdownButton>
            </div>
            <Button onClick={() => setSortingParametersObject({sortBy: sortBy, sortingOrder:sortingOrder})} variant="outline-secondary">Apply filters</Button>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search..."
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => (setSearchValue(e.target.value))}
                />
            <Button onClick={() => setSearchValueProp(searchValue)} variant="outline-secondary">Search</Button>
            </Form>
        </div>
            <Items sortingParameters={sortingParametersObject} searchValueParameter={searchValueProp}/>
        </div>
    )
}

export default Catalog;