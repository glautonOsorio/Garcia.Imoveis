import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import errorTEste from '../../assets/error404.gif'
import Card from 'react-bootstrap/Card';
import './Style.css'

export const TeamCard = ({usuario}) => {
    
    const [descricao, setDescricao] = useState('')
  
useEffect(()=>{
        fetch(`https://api.github.com/users/portexrp`)
        .then(response => response.json())
        .then(data => {
            setDescricao(data)
        }).catch(error =>{
            console.log('error fetch from git', error)
        })
        
    },[])
 
    
    return (
        <div>
            <Card className='styleCard' style={{width: '18rem' }}>
                <Card.Img variant="top" src={descricao?.avatar_url} />
                <Card.Body>
                    <Card.Title>{descricao?.name}</Card.Title>
                    <hr />
                    <Card.Text className='font-italic'>
                        <strong>Bio: </strong>
                       <em>{descricao?.bio} </em>                     
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    )
}