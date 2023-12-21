import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-[#64FFDA] border-b border-white ' : 'text-[#ADB7BE]'

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-mono text-base hover:text-[#64FFDA] ${buttonClasses}`}>
        {children}
        </p>
        
    </button>
  )
}

export default TabButton