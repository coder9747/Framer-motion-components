import React from 'react';
import TextAnimations from './Components/TextAnimations';


const para = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nesciunt perspiciatis aut fugiat nobis ipsum odio, enim earum quidem voluptate.';

const App = () => {
  return (
    <div style={{height:"300vh"}} className='bg-blue-700'>
      <div style={{height:"100vh"}}/>
      <TextAnimations  value={para} />
      
    </div>
  )
}

export default App
