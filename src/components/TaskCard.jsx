import React from 'react'

export default function TaskCard(props) {
  const {tasks} = props;

  return (
    
    <div className="allCards">
      {tasks.map((task) => {
          return (
            <div className='eachCard' key={task.id}>
              <h2 className="card__title">{task.name}</h2>
              <img className= "card__image" src={task.image} alt= "" />
              <p className="card__description">{task.description}</p>
              <p className="card__urgency">{task.urgency}</p>
              <button className="card__button">Edit</button>
              <button className="card__button" onClick={() => props.handleDelete (task.id)} >Delete</button>
          
            </div>
          )
      }) 
      }
    </div>
   


    
    
  )
}

