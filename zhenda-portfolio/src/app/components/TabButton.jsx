import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]'

  return (
    <button onClick={selectTab}>
        <p className={'mr-3 font-mono text-base hover:text-[#64FFDA] text-[#ADB7BE] ${buttonClasses}'}>
        {children}
        </p>
        
    </button>
  )
}

export default TabButton