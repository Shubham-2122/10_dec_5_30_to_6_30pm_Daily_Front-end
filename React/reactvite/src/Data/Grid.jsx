import React from 'react'

function Grid() {
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-2 sm:grid-rows-3">
        <div className="border-2 row-span-3">1</div>
        <div className="border-2">2</div>
        <div className="border-2 col-span-2">3</div>
        <div className="border-2">4</div>
        <div className="border-2">5</div>
        <div className="border-2">6</div>
        <div className="border-2">7</div>
        <div className="border-2">8</div>
        <div className="border-2">9</div>
        <div className="border-2">10</div>
      </div>
    </div>
  )
}

export default Grid
