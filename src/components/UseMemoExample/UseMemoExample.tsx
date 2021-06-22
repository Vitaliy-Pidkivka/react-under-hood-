import React, { useMemo, useState } from 'react'

const calculateToughValue = (baseValue) => {
  console.log(baseValue ** 4)

  return baseValue ** 4
}

const UseMemoExample: React.FC = () => {
  const [name, setName] = useState('')
  const [baseValue, setBaseValue] = useState<number>(22)

  // const bigValue = calculateToughValue(baseValue)
  const bigValue = useMemo(() => calculateToughValue(baseValue), [baseValue])

  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={baseValue} onChange={(e) => setBaseValue(parseInt(e.target.value))} />
      <div>{bigValue}</div>
    </>
  )
}

export default UseMemoExample
