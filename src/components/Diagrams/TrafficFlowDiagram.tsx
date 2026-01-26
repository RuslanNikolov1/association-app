import React from 'react'
import styles from './Diagram.module.scss'

interface TrafficFlowDiagramProps {
  className?: string
  variant?: 'full' | 'inline'
}

const TrafficFlowDiagram: React.FC<TrafficFlowDiagramProps> = ({ 
  className = '', 
  variant = 'full' 
}) => {
  return (
    <div className={`${styles.diagramContainer} ${styles[variant]} ${className}`}>
      <svg
        viewBox="0 0 400 300"
        className={styles.diagramSvg}
        role="img"
        aria-label="Схема на трафик потоци - показва основни улици, посоки на движение и интензитет"
        aria-describedby="traffic-flow-desc"
      >
        <title>Диаграма на трафик потоци</title>
        <desc id="traffic-flow-desc">
          Схематична визуализация на транспортни потоци с основни улици (линии), 
          посоки на движение (стрелки) и интензитет (дебелина на линиите). 
          Кръстовищата са маркирани като възли.
        </desc>
        
        {/* Background grid (subtle) */}
        <defs>
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid)" />
        
        {/* Main streets - horizontal */}
        <g aria-label="Хоризонтални улици">
          {/* Heavy traffic street */}
          <line 
            x1="50" y1="100" x2="350" y2="100" 
            stroke="var(--primary-blue)" 
            strokeWidth="4" 
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M 320 90 L 350 100 L 320 110"
            fill="var(--primary-blue)"
            opacity="0.8"
          />
          <path
            d="M 80 90 L 50 100 L 80 110"
            fill="var(--primary-blue)"
            opacity="0.8"
          />
          
          {/* Medium traffic street */}
          <line 
            x1="50" y1="200" x2="350" y2="200" 
            stroke="var(--primary-blue-light)" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M 330 190 L 350 200 L 330 210"
            fill="var(--primary-blue-light)"
            opacity="0.6"
          />
        </g>
        
        {/* Main streets - vertical */}
        <g aria-label="Вертикални улици">
          {/* Heavy traffic street */}
          <line 
            x1="200" y1="50" x2="200" y2="250" 
            stroke="var(--primary-blue)" 
            strokeWidth="4" 
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M 190 80 L 200 50 L 210 80"
            fill="var(--primary-blue)"
            opacity="0.8"
          />
          <path
            d="M 190 220 L 200 250 L 210 220"
            fill="var(--primary-blue)"
            opacity="0.8"
          />
          
          {/* Medium traffic street */}
          <line 
            x1="100" y1="50" x2="100" y2="250" 
            stroke="var(--primary-blue-light)" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M 90 80 L 100 50 L 110 80"
            fill="var(--primary-blue-light)"
            opacity="0.6"
          />
        </g>
        
        {/* Intersection nodes */}
        <g aria-label="Кръстовища">
          <circle cx="200" cy="100" r="8" fill="var(--white)" stroke="var(--primary-blue)" strokeWidth="2.5" />
          <circle cx="100" cy="100" r="6" fill="var(--white)" stroke="var(--primary-blue-light)" strokeWidth="2" />
          <circle cx="200" cy="200" r="6" fill="var(--white)" stroke="var(--primary-blue-light)" strokeWidth="2" />
          <circle cx="100" cy="200" r="5" fill="var(--white)" stroke="var(--primary-blue-light)" strokeWidth="1.5" opacity="0.7" />
        </g>
        
        {/* Traffic intensity indicators (small arrows) */}
        <g aria-label="Индикатори за интензитет">
          <circle cx="250" cy="100" r="4" fill="var(--accent-green)" opacity="0.7" />
          <circle cx="150" cy="200" r="3" fill="var(--accent-orange)" opacity="0.7" />
        </g>
      </svg>
    </div>
  )
}

export default TrafficFlowDiagram
