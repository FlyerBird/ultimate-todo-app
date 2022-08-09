import React from 'react';

export default function TaskCard(props) {
  const { info: { id, name, image, description, urgency}, onDelete } = props

  return (
    
            <div className='eachCard' >
              <h2 className="card__title">{name}</h2>
              <img className= "card__image" src={image} alt= "" />
              <p className="card__description">{description}</p>
              <p className="card__urgency">{urgency}</p>
              <button className="card__buttonIn"  onClick={() => onDelete(id)} >Delete</button>
            </div>
   
  
  )
}

