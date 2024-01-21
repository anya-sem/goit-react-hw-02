import { useState, useEffect } from 'react'

import { Description } from './Description/Description'
import { Options } from './Options/Options'
import { Feedback } from './Feedback/Feedback'
import {Notification} from './Notification/Notification'

function App() {

  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem("saved-values");

    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });
  

  const onFeedback = (option) => {
    setValues({
      ...values,
      [option]: values[option] + 1
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round(((values.good + values.neutral) / totalFeedback) * 100);
  
  const isHidden = totalFeedback === 0;

  const onReset = () => {
    setValues({
      ...values,
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-values", JSON.stringify(values));
  }, [values]);


  return (
    <>
      <Description />
      <Options onUpdate={onFeedback} onReset={onReset} isHidden={isHidden}/>
      {isHidden ? <Notification/> : <Feedback values={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/>
}
    </>
  )
}

export default App
