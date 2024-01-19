import { useState } from 'react'
import './App.css'

import { Description } from './Description/Description'
import { Options } from './Options/Options'
import { Feedback } from './Feedback/Feedback'
import {Notification} from './Notification/Notification'

function App() {
const [values, setValues] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0
    }
);
  const [clicks, setClicks] = useState(0);

  const onFeedback = (option) => {
    setValues({
      ...values,
      [option]: values[option] + 1
    });
    
    setClicks(clicks + 1);
  };

  return (
    <>
      <Description />
      <Options onUpdate={onFeedback}/>
      <Feedback values={values} />
      
    </>
  )
}

export default App
