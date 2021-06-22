import React, { useCallback, useEffect, useState } from 'react'

const UseCallbackExample = () => {
  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState('Hello')

  // const greeting = (message) => console.log(message)
  const greeting = useCallback((message) => console.log(message), [])

  useEffect(() => {
    greeting(message)
  }, [greeting, message])

  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>I was clicked {counter} times</button>
    </>
  )
}

export default UseCallbackExample
