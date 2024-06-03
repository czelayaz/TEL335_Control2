import {useState, useEffect} from "react";
import axios from "axios"

function FactsList(){
    const [factsData, setFactsData] = useState([])

    useEffect(()=>{
        const  fetchData = async () => {
            if (!loaded) {
                const result = await axios.get("https://api.chucknorris.io/jokes/categories")
                if (result.data) {
                    setFactsData(result.data)
                }
            }
        }
        fetchData()
    })

    return(
        <div className="List">
            <FactsList facts={factsData} />
        </div>
        )
}

export default FactsList


