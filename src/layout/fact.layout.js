import {useState, useEffect} from "react";
import axios from "axios"
import FactsList from "../component/factsList";

function List(props){
    const [factsData, setFactsData] = useState([])

    useEffect(()=>{
        const  fetchData = async () => {
                const result = await axios.get("https://api.chucknorris.io/jokes/search?query="+props.text)
                if (result.data) {
                    setFactsData(result.data.result)
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


