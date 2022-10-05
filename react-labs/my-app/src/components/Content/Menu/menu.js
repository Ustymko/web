import './menu.css'

function menu() {
    return(
        <div className="menu">
            <div className="search">
                <img className="search-icon" alt="search-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"/>
                <input className="search-car" placeholder="Search..." type="text"/>
            </div>
            <div className='separator'/>
            <div className="sorting">
                Sort by
                <img alt="down-arrow" src='https://cdnjs.cloudflare.com/ajax/libs/uswds/2.0.0-beta.6/img/angle-arrow-down-white.png'/>
            </div>
            <div className='separator'/>
            <div className="total-price">Total price:</div>
            <br></br>
            <div className='separator'/>
            <button className='create-car'>Create car</button>
        </div>
    )
}

export default menu;