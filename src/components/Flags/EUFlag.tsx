import React from 'react'

const EUFlag: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <img
      src="/Flag_of_Europe.svg.webp"
      alt="European Union Flag"
      className={className}
      role="img"
      aria-label="European Union Flag"
    />
  )
}

export default EUFlag
