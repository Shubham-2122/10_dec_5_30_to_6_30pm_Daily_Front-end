import React from 'react'

function Flex() {
    return (
        <div>
            {/* <div className='flex gap-1'>
        <div className='w-1/2 border'>1</div>
        <div className='w-1/2 border'>2</div>
      </div>
      <div className="flex flex-row-reverse">
        <div className="size-52 border-2 border-red-500">1</div>
        <div className="size-52 border-2 border-red-500">2</div>
        <div className="size-52 border-2 border-red-500">3</div>
      </div>
      <div className="flex justify-start">
        <div className="size-52 border-2 border-red-500">1</div>
        <div className="size-52 border-2 border-red-500">2</div>
        <div className="size-52 border-2 border-red-500">3</div>
      </div>
      <div className="flex justify-center">
        <div className="size-52 border-2 border-red-500">1</div>
        <div className="size-52 border-2 border-red-500">2</div>
        <div className="size-52 border-2 border-red-500">3</div>
      </div>
      <div className="flex justify-end">
        <div className="size-52 border-2 border-red-500">1</div>
        <div className="size-52 border-2 border-red-500">2</div>
        <div className="size-52 border-2 border-red-500">3</div>
      </div>
      <div className="flex justify-between">
        <div className="size-52 border-2 border-red-500">1</div>
        <div className="size-52 border-2 border-red-500">2</div>
        <div className="size-52 border-2 border-red-500">3</div>
      </div>
      <div className="flex justify-around">
        <div className="size-52 border-2 border-red-500">1</div>
        <div className="size-52 border-2 border-red-500">2</div>
        <div className="size-52 border-2 border-red-500">3</div>
      </div> */}
            <div className="flex flex-row flex-wrap justify-center gap-1">
                <div className="size-52 rotate-45 border-2 border-red-500">1</div>
                <div className="size-52 scale-75 border-2 border-red-500">2</div>
                <div className="size-52 border-2 skew-6 border-red-500">3</div>
                <div className="size-52 border-2 border-red-500 text-[50px] text-center text-[green] bg-[rgba(221,209,41,0.5)]">1</div>
                <div className="size-52 border-2 border-red-500 hover:bg-amber-400 hover:text-green-500 ">2</div>
                <div className="size-52 border-2 border-red-500">3</div>
                <div className="size-52 border-2 border-red-500">1</div>
                <div className="size-52 border-2 border-red-500">2</div>
                <div className="size-52 border-2 border-red-500">3</div>
                <div className="size-52 border-2 border-red-500">1</div>
                <div className="size-52 border-2 border-red-500">2</div>
                <div className="size-52 border-2 border-red-500">3</div>
            </div>
            <button class="bg-violet-500 focus:bg-red-400 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
                Save changes
            </button>
        </div>
    )
}

export default Flex
