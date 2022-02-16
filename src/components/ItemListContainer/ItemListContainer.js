import FunctionCounter from "../counter/ItemCounter"
const ItemListContainer = ({greeting})=>{
    return (
        <>
        <h1> {greeting}</h1>
        <FunctionCounter stock={9} />
        </>
    )
}
export default ItemListContainer