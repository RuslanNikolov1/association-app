import React from 'react'

const BulgarianFlag: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 300 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Bulgarian Flag"
    >
      <rect width="300" height="66.67" y="0" fill="#FFFFFF"/>
      <rect width="300" height="66.67" y="66.67" fill="#00966E"/>
      <rect width="300" height="66.67" y="133.33" fill="#D62612"/>
    </svg>
  )
}

export default BulgarianFlag

