import './Item.css'


const Item = ({items}) => {
   
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {Item.title}
                </h2>
            </header>
            <picture>
                <img src={Item.thumbnail} alt={Item.title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${Item.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
            </footer>
        </article>
    )
}

export default Item