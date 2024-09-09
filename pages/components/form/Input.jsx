import React from 'react'

const Input = () => {
  return (
    <div className='w-full'>
        <label className='relative block cursor-text'>
            <input type="text" className='h-14 w-full border border-primary outline-none px-4 peer' required/>
            <span className='absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs per-valid:h-7 per-valid:text-xs transition-all'  >Email</span>
        </label>
    </div>
  )
}

export default Input