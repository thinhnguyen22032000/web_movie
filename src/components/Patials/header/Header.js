import { Row, Col } from "antd"

import './Header.css'

const Header = () => {
    return (
        <Row className="header">
            <Col span={24}>
            <div className="header_content">
               <p className="header_title">Movies</p>
            </div>
            </Col>
        </Row>
    )
}

export default Header