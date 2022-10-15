import './catalog.css'
import Items from './Items/items'
import FilterBar from './FilterBar/filterbar';

function catalog(){
    return(
        <div className="catalog">
            <FilterBar/>
            <Items/>
        </div>
    )
}

export default catalog;