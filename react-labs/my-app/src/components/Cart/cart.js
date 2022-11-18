import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {useDispatch} from 'react-redux';
import { addCar, deleteCar } from "../../redux/slice";
import "./cart.css"

function Cart(){
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const handleIncrement = (car) => dispatch(addCar(car));
    const handleDecrement = (car) => dispatch(deleteCar(car));
    const listItems = cart.cars;
    let rendered_items_list = listItems.map((item) => (
        <Card key={item.id} className="card">
        <Card.Img
        style={{ objectFit: "cover", minHeight: 200, paddingBottom: 20 }}
        variant="top"
        src={item.image_uri}
        />
        <Card.Title>{item.producer}</Card.Title>
        <Card.Text>{item.horsepower} hp</Card.Text>
        <div className="price">
            <Card.Text style={{ fontWeight: 500 }}>Price:</Card.Text>
            <Card.Text>$ {item.price}</Card.Text>
        </div>
        <Link
            to="/item"
            state={{
            id: item.id
            }}
        >
            <Button
            style={{ margin: 10, borderRadius: 10, width: 200 }}
            variant="dark"
            >
            View more
            </Button>
        </Link>
        <div className="amount">
            <Button onClick={() => handleDecrement(item)} variant="outline-dark">-</Button>
            <h1>{item.amount}</h1>
            <Button onClick={() => handleIncrement(item)} variant="dark">+</Button>
        </div>
    </Card>
    ));
    return(
        <div className="cart">
            {rendered_items_list}
        </div>
    )
}

export default Cart;