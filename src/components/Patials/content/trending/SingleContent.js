import {Col, Card, Image ,Badge} from 'antd'
import {Link} from 'react-router-dom'

import { apiConfig } from '../../../../api/apiConfig'

const { image300 } = apiConfig
const Meta = {Card}
const SingleContent = ({trending}) => {
    return (
       <Col className='content' xs={12} xl={5} md={6}>
           <Card
             className='content-card'
             cover={<Image
             preview={false} alt='img' src={`${image300}${trending.poster_path}`} />}
           >
            <Badge className='badge' style={{backgroundColor: trending.vote_average>6? 'blue': 'red'}} count={trending.vote_average}>
            </Badge>
          
            <Link to={`/${trending.id}/${trending.media_type}`}><p className='content-card__title'>{trending.title? trending.title:trending.name}</p></Link>
            <div className='content-card__info'>
                <p>{trending.media_type}</p>
                <p>{trending.release_date || trending.first_air_date}</p>
            </div>
           
           </Card>
       </Col>
    )
}

export default SingleContent