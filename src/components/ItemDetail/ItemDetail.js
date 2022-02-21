import './Item.css'


const Item = ({products}) => {
   
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {products?.title}
                </h2>
            </header>
            <picture>
                <img src={products?.thumbnail} alt={products?.title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${products?.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
            </footer>
        </article>
    )
}

export default Item