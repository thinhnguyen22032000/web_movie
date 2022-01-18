
import {Spin} from 'antd'
import './spin.css'

const SpinerDetail = ({delay, size}) => {
    return (
        <div className='spiner'>
            <Spin delay={delay} size={size}/>
        </div>
    )
}

export default SpinerDetail