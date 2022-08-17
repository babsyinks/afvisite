import React from 'react'

const RecreationAndSportsComplex = () => {
    const arr = ['Soccer','Basketball','Tennis','Golf','Polo','Cricket','Boxing','American Football','Rugby','Etc.']
  return (
    <div>
        <div>Recreation and Sports Complexes, and Gymnasiums – attached to the University, and also independently.</div>
        <ol>
            {arr.map(v=><li key={v} type='a'>{v}</li>)}
        </ol>
    </div>
  )
}

export default RecreationAndSportsComplex

