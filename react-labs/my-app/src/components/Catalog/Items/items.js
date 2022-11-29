import "./items.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Items(props) {
  // let items_list = [
  //     {'producer': '123',
  //     'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
  //     'price': 100,
  //     'horsepower': 50},
  //     {'producer': '1234',
  //     'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
  //     'price': 1500,
  //     'horsepower': 10},
  //     {'producer': '124',
  //     'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
  //     'price': 40,
  //     'horsepower': 41},
  //     {'producer': 'VolksWagen',
  //     'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
  //     'price': 250,
  //     'horsepower': 30},
  //     {'producer': 'VolksWagen',
  //     'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
  //     'price': 300,
  //     'horsepower': 200},
  //     {'producer': 'VolksWagen',
  //     'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
  //     'price': 250,
  //     'horsepower': 260},
  //     {'producer': 'VolksWagen',
  //     'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
  //     'price': 250,
  //     'horsepower': 220},
  //     {'producer': 'VolksWagen',
  //     'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
  //     'price': 250,
  //     'horsepower': 200},
  //     {'producer': 'VolksWagen',
  //     'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
  //     'price': 250,
  //     'horsepower': 200},
  //     {'producer': 'VolksWagen',
  //     'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
  //     'price': 250,
  //     'horsepower': 200},
  //     {'producer': 'VolksWagen',
  //     'image': 'https://thumbs.dreamstime.com/b/red-car-isolated-8213963.jpg',
  //     'price': 250,
  //     'horsepower': 200}
  // ]

  // let sorted_list = [];

  // const sortBy = props.sortingParameters.sortBy;
  // const sortOrder = props.sortingParameters.sortingOrder;
  // const searchValue = props.searchValueParameter;

  // let foundItemsList = items_list.filter(car => car.producer.search(searchValue) !== -1);

  // if(sortBy === "Sort by price"){
  //     if(sortOrder === "Descending order"){
  //         sorted_list = foundItemsList.sort(function(a, b){
  //             return a.price < b.price ? 1 : -1;
  //         })
  //     }
  //     else{
  //         sorted_list = foundItemsList.sort(function(a, b){
  //             return a.price < b.price ? -1 : 1;
  //         })
  //     }

  // } else if(sortBy === "Sort by horsepower"){
  //     if (sortOrder === "Descending order"){
  //         sorted_list = foundItemsList.sort(function(a, b){
  //             return a.horsepower < b.horsepower ? 1 : -1;
  //         })
  //     } else{
  //         sorted_list = foundItemsList.sort(function(a, b){
  //             return a.horsepower < b.horsepower ? -1 : 1;
  //         })
  //     }
  // } else{
  //     sorted_list = foundItemsList;
  // }

  let rendered_items_list = [];

  if (props.cars.length > 0) {
    let items_to_render = props.cars.filter(car => car.producer.search(props.searchValue) !== -1);
    rendered_items_list = items_to_render.map((item) => (
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
      </Card>
    ));
  }

  return <div className="items">{rendered_items_list}</div>;
}

export default Items;
