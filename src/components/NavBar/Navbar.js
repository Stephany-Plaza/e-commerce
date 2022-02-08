import './Navbar.css'

const NavBar = ()=>{
    return(
        <nav>
            <h1 className="h1">Bienvenidos al tecnoStore</h1>
            <ul className="nav">
                <li className="navLi"><a href="#">Celulares</a></li>
                <li className="navLi"><a href="#">Tablets</a></li>
                <li className="navLi"><a href="#">Laptos</a></li>
                <li className="navLi"><a href="#">Camaras</a></li>
            </ul>
            <div className="img"><img src={"./images/logo192.png"} alt='logo' /></div>
        </nav>
    )
}
export default NavBar
