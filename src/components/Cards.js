
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div id="about">
    <div className='cards'>
      <h1>About Us!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpg'
              head="Aim"
              text='To support children in need of care and protection and to help destitute poor, neglected needy and orphan children.To promote and provide formal and informal education to the children, functional literacy in the community they live and vocational training to the youth.'
            />
            <CardItem
              src='images/img4.jpg'
              head="Vision"
              text='A world where children break out of poverty and lead fulfilling, rewarding lives, contributing positively to their community and to the world around them. One day, all children in this nation will have the opportunity to attain an excellent education.'
            />
            <CardItem
              src='images/img1.jpg'
              head="Approach"
              text='Our NGO frequently help to establish Child Welfare Committees (CWCs) or Child Protection Committees that consist of 10–20 women and men and also children. Having been trained, these Committees monitor, respond to, mitigate, and prevent various forms of child abuse.'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;