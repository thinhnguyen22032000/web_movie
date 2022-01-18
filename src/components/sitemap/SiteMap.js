import {Link} from 'react-router-dom'
const SiteMap = ({position}) => {
    return (
        <div className='site-map'><Link to='/'>{`Movie `}</Link>
        <span style={{color:'#fff'}}>{` > `}</span>
        <span style={{color:'#fff'}}>{position}</span></div> 
    )
}

export default SiteMap