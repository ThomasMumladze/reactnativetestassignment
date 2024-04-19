import './style.css'
import React, { useContext } from 'react'
import { AppContext } from '../App';

import array_01_data from '../data/Array_1.json'
import array_02_data from '../data/Array_2.json'

export default function List() {
const context = useContext(AppContext);

const array_01 = context.filterUniqueIds (array_01_data);
const array_02 = context.filterUniqueIds (array_02_data);
  return <div>
     <div className='list-wrapper'>
      <div>
        <h1>first array</h1>
      {array_01.map((item) => <div className='items'>
        <span>{item.id}.</span>
        <p>{item.body}</p>
      </div>)}
      </div>
      <div>
        <h1>second array</h1>
      {array_02.map((item) => <div className='items'>
        <span>{item.id}.</span>
        <p>{item.body}</p>
      </div>)}
      </div>
     </div>
  </div>
}
