import React, {useEffect, useState} from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert('you clicked on: ' + count);
    }, 3000)
  }

  useEffect(() => {
    // document.title = `you clicked ${count} times`
    setTimeout(() => {
      console.log('count = ', count);
    }, 3000)
    return () => {
      console.log('Clean Up Callback, count = ', count);
    }
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={ () => setCount(count + 1) }>
        Click
      </button>
      <button onClick={ handleAlertClick }>
        Alert
      </button>
    </div>
  )
}
