import { Link } from "react-router-dom"

export const Navbar=()=>{
    return (
        <>
        <Link style={{marginLeft:"45%", marginRight:'2%'}} to='/drive-u'>Product</Link>
        <Link to='/cart'>Cart</Link>
        </>
    )
}