import React from 'react'

function Border() {
  return (
    <div>
      <h1 className='border-2 border-amber-300 rounded-3xl'>hello this border atg</h1>
      <h1 className='border-4 border-red-400 rounded-2xl border-dashed'>hello this border atg</h1>
      <h1 className='border-8 border-emerald-500 border-dotted'>hello this border atg</h1>

      <h1 className='border-2 border-amber-300 border-double'>hello this border atg</h1>
      <h1 className='border-4 border-red-400'>hello this border atg</h1>
      <h1 className='border-8 border-emerald-500'>hello this border atg</h1>
      <h1 className='border-2 border-amber-300'>hello this border atg</h1>
      <h1 className='border-4 border-red-400'>hello this border atg</h1>
      <h1 className='border-8 outline-4 outline-amber-600 outline-dashed border-emerald-500'>hello this border atg</h1>

    </div>
  )
}

export default Border
