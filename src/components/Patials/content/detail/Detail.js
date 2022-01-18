import {Row, Col, Card, Image, Button, Spin } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import SpinerDetail from '../../../spin/SpinerDetail'
import { apiConfig } from "../../../../api/apiConfig"

import './Detail.css'
import SiteMap from '../../../sitemap/SiteMap'


const Detail = () => {
    const [spiner, setSpiner] = useState(false)
    const [detail, setDetail] = useState([])
    const params = useParams()

    const fetchDetail = async () => {

        const option = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/${params.type}/${params.id}?api_key=${apiConfig.key}&language=en-US`
        }

        const { data } = await axios(option)

        setDetail(data)
        setSpiner(true)

    }
    useEffect(() => {
        fetchDetail()
    }, [])
    
    return (
        !spiner? (
            <SpinerDetail delay={2000} size='large'/>
        ) : (
            <Row className="content-wrap" justify="center">
            <Col  xs={20} lg={12}>
               <SiteMap position={detail.title || detail.name} />
               <div className='detail-content'>
                <div className='detail-left'>
                       <Image
                            className='detail-img' 
                            preview={false}
                            src={`${apiConfig.image500}/${detail.poster_path}`}
                        />
                        <div className='detail-wrap-btn'>
                           <Button className='btn-watch'><a href={detail.homepage}>Watch movie</a></Button>
                        </div>
                   
                </div>
                <div className='detail-rigth'>
                    <p>Name: {detail.title || detail.name}</p>
                    <p>Year: {detail.release_date || detail.first_air_date}</p>
                    <p>Run time: {detail.runtime || detail.episode_run_time}</p>
                    <p>Type: {
                        detail.genres && detail.genres.map(item => (
                            <span key={item.id}>{`${item.name}, `}</span>
                        ))
                        
                    }</p>
                    <p>Language: {detail.original_language}</p>
                    <p>Tag line: {detail.tagline}</p>
                    <p>Description: {detail.overview}</p>



                </div>
               </div>
            </Col>
        </Row>
        )
        
    )
}

export default Detail