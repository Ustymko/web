import "./item.css"
import { useLocation } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item(){
    const location = useLocation();
    const state = location.state;
    console.log(state);
    return(
        <>
            {state && (
                <div className="item-page">
                    <div className="item-page__info">
                        <img alt="car" className="item-page__image" src={state.image}/>
                        <div className="item-page__text">
                            <h1>{state.producer}</h1>
                            <p>{state.horsepower}</p>
                        </div>
                    </div>
                    <div className="item-page__bottom">
                        <h3>Price: ${state.price}.00</h3>
                        <div className="item-page__bottom__buttons">
                            <Button as={Link} to="/catalog" style={{width: 180}} variant="outline-dark">Go back</Button>
                            <Button style={{width: 180}} variant="light">Add to cart</Button>
                        </div>
                    </div>
                </div>
            )}
            
        </>
    )
}

export default Item;