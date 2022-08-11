import React from 'react';

export default function TaskCard(props) {
  const { info: { id, name, image, description, urgency}, onDelete} = props;

  const coloredUrgency = urgency;

  return (
    
            <div className='eachCard' >

              <img className= "card__image" src={image} alt= "" />

              <div className='dadUrgency'>
                <div className="card__urgency">
              {coloredUrgency > 10 && <p style={{ backgroundColor: 'black' }} > ❗❗❗{urgency}</p> }
              {coloredUrgency === 10 && <p style={{ backgroundColor: 'black' }} > ❗{urgency}</p> }
              {coloredUrgency <10 && coloredUrgency>=7 && <p style={{ backgroundColor: 'red' }} > {urgency}</p> }
              {coloredUrgency <7 && coloredUrgency>=4 && <p style={{ backgroundColor: 'orange' }} > {urgency}</p> }
              {coloredUrgency <4  && <p style={{ backgroundColor: 'green' }} > {urgency}</p> }
                </div>
              </div>

              <div className='title'>
                <h3 className="card__title">{name}</h3>
              </div>
              
              <div className='descriptionBox'>
                  <p className="card__description">{description}</p>
              </div>
              
              <div className='buttonsInCard'>
                <button className="card__buttonIn"  onClick={() => onDelete(id)}>Delete</button>
              </div>
              
            </div>
   
  
  )
}

