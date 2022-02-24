Primera pre-entrega del proyecto final de React
En este proyecto, he utilizado CSS puro y react, BrowserRouter, Routes, Route y hooks como useState y useEffect y tambien a useParams
Se puede ver que este proyecto consta de:
1) Componente NavBar con un menu con 4 categorias(cada una siendo un boton)
2) Componente Cart Widget que contiene un boton con una imagen de carrito (cartWdiget)
3) Componente Item donde se tienen las dos funciones de getItem(filtra los items por categoria pero en caso de no hacerlo muestra la lista de Items completa) y detalleItem (que encuentra el item por id proporcionado por la lista de Items)
4) Componente ItemListContainer quien tiene dentro la funcion getItem y retorna al componente ItemList
5) Componente ItemList encargado de mapear los items y crear li por cada uno y renderizarlo con su id dentro de key y su nombre
6) Componente ItemDetailContainer quien retorna al componente de Item encargado de hacer una presentacion individual de cada item gracias al componente DetalleItem
7) componente App quien es la que contiene todos los componentes anteriores siendo los principales: ItemListContainer e ItemDetailContainer
