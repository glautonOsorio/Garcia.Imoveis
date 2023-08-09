import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { IoMdAlert } from 'react-icons/io';
import error404 from '../../assets/error404.gif'
import './Style.css'

export const Error = ()=>{
   return (<>
    <Col className="alignItens">
        <h2>Eitcha, parece que não encontramos essa página <IoMdAlert style={{color: 'red'}}/></h2>
            
            <Image className='ImageError' src={error404} rounded />
    </Col>
    </>)
}