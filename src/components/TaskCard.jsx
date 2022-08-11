import React from 'react';

export default function TaskCard(props) {
  const { info: { id, name, image, description, urgency}, onDelete } = props;

  const coloredUrgency = urgency

  return (
    
            <div className='eachCard' >
              <h2 className="card__title">{name}</h2>
              <img className= "card__image" src={image} alt= "" />
              <p className="card__description">{description}</p>
              <p className="card__urgency">
              {coloredUrgency >= 10 && <p style={{ backgroundColor: 'black' }} >{urgency}</p> }
              {coloredUrgency <10 && coloredUrgency>=7 && <p style={{ backgroundColor: 'red' }} >{urgency}</p> }
              {coloredUrgency <7 && coloredUrgency>=4 && <p style={{ backgroundColor: 'orange' }} >{urgency}</p> }
              {coloredUrgency <4  && <p style={{ backgroundColor: 'green' }} >{urgency}</p> }
              </p>
              <div className='buttonsInCard'>
                <button className="card__buttonIn"  onClick={() => onDelete(id)}>Delete</button>
              </div>
              
            </div>
   
  
  )
}

