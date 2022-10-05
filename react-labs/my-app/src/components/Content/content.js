import './content.css'
import Menu from './Menu/menu'
import Items from './Items/items'

function content(){
    return(
        <div className="content">
            <Menu/>
            <Items/>
        </div>
    )
}

export default content;