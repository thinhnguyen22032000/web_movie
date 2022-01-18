import axios from "axios"
import { useEffect, useState } from "react"
import {Row, Divider} from 'antd'

import { apiConfig } from "../../../../api/apiConfig"
import SingleContent from "./SingleContent"


const Trending = () => {
    
    const [trending, setTranding] = useState([])

    const fetchTranding = async () => {
        const option = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/trending/all/day?api_key=${apiConfig.key}`
        }

        const {data} = await axios(option)
        setTranding(data.results)
    }

    useEffect(()=> {
        fetchTranding()
    }, [])

    return (
        <Row className="content-wrap"  
         justify="center" gutter={[16,16]}
         >
         <Divider style={{color: '#fff', fontSize:'20px'}}>Trending</Divider>
            {
              trending && trending.map((item) => (
                     <SingleContent trending={item}  key={item.id}/>
                ))
            }
        </Row>
            
             
    )
}

export default Trending