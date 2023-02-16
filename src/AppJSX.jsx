import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function AppJSX() {
  const name = '엘리';
  const list = ['우유', '딸기', '바나나']
  return (
   <Fragment>
    <h1 className='orange'>{`Hello! ${name}`}</h1>
    <h2>{name}</h2> 
    <ul>
      {
         list.map(item => <li>{item}</li>)
      }
    </ul>
    <img 
    style={{ width:'250px', height:'250px' }}
    src="https://images.unsplash.com/photo-1676275198667-dc0401d89bf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
   </Fragment>
  );
}

export default AppJSX;
