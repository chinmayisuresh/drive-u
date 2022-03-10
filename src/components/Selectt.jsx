import { useContext } from "react"
import { Winecontext } from "../context/Data"

export const Select = () => {

const {setChange} = useContext(Winecontext)
    return (
        <div class='move'>

                <h4>select your location</h4><select onChange={(e)=>setChange(e.target.value)}>

                <option value={'IndraNagar'}>Indra Nagar</option>
                <option value={'Basavangudi'}>Basavangudi</option>
                <option value={'Whitefield'}>Whitefield</option>
                <option value={'kengeri'}>kengeri</option>
                <option value={'Kormangla'}>Kormangala</option>
                <option value={'Hebbal'}>Hebbal</option>

            </select>

        </div>
    )
}