import React from 'react'
import styles from './Diagram.module.scss'

interface NetworkNodesDiagramProps {
  className?: string
  variant?: 'full' | 'inline'
}

const NetworkNodesDiagram: React.FC<NetworkNodesDiagramProps> = ({ 
  className = '', 
  variant = 'full' 
}) => {
  return (
    <div className={`${styles.diagramContainer} ${styles[variant]} ${className}`}>
      <svg
        viewBox="0 0 400 300"
        className={styles.diagramSvg}
        role="img"
        aria-label="Мрежова диаграма с транспортни възли и връзки"
        aria-describedby="network-nodes-desc"
      >
        <title>Мрежова диаграма с възли</title>
        <desc id="network-nodes-desc">
          Схематична мрежова диаграма показваща ключови транспортни възли (център, квартали, 
          транспортни спирки) и връзките между тях. Различните типове линии представляват 
          различни видове транспорт или важност на връзката.
        </desc>
        
        {/* Background */}
        <rect width="400" height="300" fill="var(--bg-secondary)" opacity="0.3" />
        
        {/* Network connections - primary routes */}
        <g aria-label="Основни транспортни връзки">
          <line x1="200" y1="150" x2="100" y2="80" stroke="var(--primary-blue)" strokeWidth="3" strokeLinecap="round" />
          <line x1="200" y1="150" x2="300" y2="80" stroke="var(--primary-blue)" strokeWidth="3" strokeLinecap="round" />
          <line x1="200" y1="150" x2="100" y2="220" stroke="var(--primary-blue)" strokeWidth="3" strokeLinecap="round" />
          <line x1="200" y1="150" x2="300" y2="220" stroke="var(--primary-blue)" strokeWidth="3" strokeLinecap="round" />
        </g>
        
        {/* Secondary connections */}
        <g aria-label="Вторични транспортни връзки">
          <line x1="100" y1="80" x2="300" y2="80" stroke="var(--primary-blue-light)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4,4" opacity="0.6" />
          <line x1="100" y1="220" x2="300" y2="220" stroke="var(--primary-blue-light)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4,4" opacity="0.6" />
        </g>
        
        {/* Nodes - Center (main hub) */}
        <g aria-label="Централен възел">
          <circle cx="200" cy="150" r="16" fill="var(--primary-blue)" stroke="var(--white)" strokeWidth="3" />
          <text x="200" y="155" textAnchor="middle" fill="var(--white)" fontSize="12" fontWeight="700">Ц</text>
        </g>
        
        {/* Nodes - Districts/Areas */}
        <g aria-label="Квартални възли">
          {/* Top left */}
          <circle cx="100" cy="80" r="12" fill="var(--accent-green)" stroke="var(--white)" strokeWidth="2" />
          <text x="100" y="85" textAnchor="middle" fill="var(--white)" fontSize="10" fontWeight="600">К1</text>
          
          {/* Top right */}
          <circle cx="300" cy="80" r="12" fill="var(--accent-green)" stroke="var(--white)" strokeWidth="2" />
          <text x="300" y="85" textAnchor="middle" fill="var(--white)" fontSize="10" fontWeight="600">К2</text>
          
          {/* Bottom left */}
          <circle cx="100" cy="220" r="12" fill="var(--accent-green)" stroke="var(--white)" strokeWidth="2" />
          <text x="100" y="225" textAnchor="middle" fill="var(--white)" fontSize="10" fontWeight="600">К3</text>
          
          {/* Bottom right */}
          <circle cx="300" cy="220" r="12" fill="var(--accent-green)" stroke="var(--white)" strokeWidth="2" />
          <text x="300" y="225" textAnchor="middle" fill="var(--white)" fontSize="10" fontWeight="600">К4</text>
        </g>
        
        {/* Transport type indicators (small icons) */}
        <g aria-label="Индикатори за тип транспорт">
          <circle cx="150" cy="115" r="4" fill="var(--accent-orange)" opacity="0.8" />
          <circle cx="250" cy="115" r="4" fill="var(--accent-orange)" opacity="0.8" />
        </g>
      </svg>
    </div>
  )
}

export default NetworkNodesDiagram
