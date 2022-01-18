import React from 'react';
import data from './data';

const List = (props) => {

  const { people } = props;

  return (
    <React.Fragment>
      {people.map(person => {
        const {id, name, age, image} = person;
        return (
          <article key={id} className='person'>
            <img src={image}/>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </React.Fragment>
  );
};

export default List;