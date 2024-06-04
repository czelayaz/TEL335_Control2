import {useState, useEffect} from "react";
import axios from "axios"
import FactsList from "../component/factsList";

function List(){
    const [loaded, setDataLoaded] = useState(false)
    const [factsData, setFactsData] = useState([])

    useEffect(()=>{
        const  fetchData = async () => {
            if (!loaded) {
                const result = await axios.get("https://api.chucknorris.io/jokes/random")
                console.log(result.data)
                if (result.data) {
                    setDataLoaded(true)
                    setFactsData(result.data)
                }
            }
        }
        fetchData()
    })

    return(
        <div className="Listof">
            <FactsList facts={factsData} />
        </div>
        )
}

export default List


