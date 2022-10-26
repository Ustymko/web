import './items.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'

function items() {
    let items_list = [
        {'producer': 'VolksWagen',
        'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
        'price': 250, 
        'horsepower': 200},
        {'producer': 'VolksWagen',
        'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
        'price': 250, 
        'horsepower': 200},
        {'producer': 'VolksWagen',
        'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
        'price': 250, 
        'horsepower': 200},
        {'producer': 'VolksWagen',
        'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
        'price': 250, 
        'horsepower': 200},
        {'producer': 'VolksWagen',
        'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
        'price': 250, 
        'horsepower': 200},
        {'producer': 'VolksWagen',
        'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
        'price': 250, 
        'horsepower': 200},
        {'producer': 'VolksWagen',
        'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
        'price': 250, 
        'horsepower': 200},
        {'producer': 'VolksWagen',
        'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
        'price': 250, 
        'horsepower': 200},
        {'producer': 'VolksWagen',
        'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
        'price': 250, 
        'horsepower': 200},
        {'producer': 'VolksWagen',
        'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
        'price': 250, 
        'horsepower': 200},
        {'producer': 'VolksWagen',
        'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
        'price': 250, 
        'horsepower': 200}
    ]
    let rendered_items_list = items_list.map(
        (item) => 
    <Card className="card">
        <Card.Img style={{objectFit: 'cover'}} variant='top' src={item.image}/>
        <Card.Title>{item.producer}</Card.Title>
        <Card.Text>{item.price} $</Card.Text>
        <Card.Text>{item.horsepower} hp</Card.Text>
    </Card>
    )
    return(
        <div className="items">
            {rendered_items_list}
        </div>
    )
}

export default items;