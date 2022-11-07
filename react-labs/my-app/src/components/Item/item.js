import "./item.css"
import { useLocation } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCar } from "../../API/api";

function Item(){
    const location = useLocation();
    const state = location.state;
    const [loading, setLoading] = useState(true);
    const [car, setCar] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        getCar(state.id,(res) => {
            setCar(res.data)
            },(err) => {
            console.log(err);
        alert(err);
        });
    }, [])

    return(
        <>
            {loading ? (<div className='loader'></div>) : (
                <div className="item-page">
                    <div className="item-page__info">
                        <img alt="car" className="item-page__image" src={car.image_uri}/>
                        <div className="item-page__text">
                            <h1>{car.producer}</h1>
                            <h3>{car.horsepower} hp</h3>
                        </div>
                    </div>
                    <div className="item-page__bottom">
                        <h3>Price: ${car.price}.00</h3>
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