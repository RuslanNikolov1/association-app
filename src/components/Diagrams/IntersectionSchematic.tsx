import React from 'react'
import styles from './Diagram.module.scss'

interface IntersectionSchematicProps {
  className?: string
  variant?: 'full' | 'inline'
}

const IntersectionSchematic: React.FC<IntersectionSchematicProps> = ({ 
  className = '', 
  variant = 'full' 
}) => {
  return (
    <div className={`${styles.diagramContainer} ${styles[variant]} ${className}`}>
      <svg
        viewBox="0 0 300 300"
        className={styles.diagramSvg}
        role="img"
        aria-label="Схема на 4-посочно кръстовище с конфликтни точки и пешеходни пътеки"
        aria-describedby="intersection-desc"
      >
        <title>Схема на кръстовище</title>
        <desc id="intersection-desc">
          Схематична визуализация на 4-посочно кръстовище показваща пътища, 
          конфликтни точки (маркирани), пешеходни пътеки и сигнализация.
        </desc>
        
        {/* Background */}
        <rect width="300" height="300" fill="var(--bg-secondary)" opacity="0.2" />
        
        {/* Roads - horizontal */}
        <g aria-label="Хоризонтален път">
          <rect x="0" y="140" width="300" height="20" fill="var(--text-muted)" opacity="0.3" />
          <line x1="0" y1="150" x2="300" y2="150" stroke="var(--primary-blue)" strokeWidth="2" strokeDasharray="8,4" />
        </g>
        
        {/* Roads - vertical */}
        <g aria-label="Вертикален път">
          <rect x="140" y="0" width="20" height="300" fill="var(--text-muted)" opacity="0.3" />
          <line x1="150" y1="0" x2="150" y2="300" stroke="var(--primary-blue)" strokeWidth="2" strokeDasharray="8,4" />
        </g>
        
        {/* Intersection center */}
        <rect x="140" y="140" width="20" height="20" fill="var(--text-muted)" opacity="0.4" />
        
        {/* Conflict points */}
        <g aria-label="Конфликтни точки">
          <circle cx="150" cy="150" r="6" fill="var(--accent-red)" stroke="var(--white)" strokeWidth="2" />
          <circle cx="130" cy="150" r="4" fill="var(--accent-orange)" stroke="var(--white)" strokeWidth="1.5" opacity="0.8" />
          <circle cx="170" cy="150" r="4" fill="var(--accent-orange)" stroke="var(--white)" strokeWidth="1.5" opacity="0.8" />
          <circle cx="150" cy="130" r="4" fill="var(--accent-orange)" stroke="var(--white)" strokeWidth="1.5" opacity="0.8" />
          <circle cx="150" cy="170" r="4" fill="var(--accent-orange)" stroke="var(--white)" strokeWidth="1.5" opacity="0.8" />
        </g>
        
        {/* Pedestrian crossings */}
        <g aria-label="Пешеходни пътеки">
          {/* Top */}
          <rect x="120" y="110" width="60" height="4" fill="var(--accent-green)" opacity="0.7" />
          <line x1="120" y1="112" x2="180" y2="112" stroke="var(--white)" strokeWidth="1" strokeDasharray="2,2" />
          
          {/* Bottom */}
          <rect x="120" y="186" width="60" height="4" fill="var(--accent-green)" opacity="0.7" />
          <line x1="120" y1="188" x2="180" y2="188" stroke="var(--white)" strokeWidth="1" strokeDasharray="2,2" />
          
          {/* Left */}
          <rect x="110" y="120" width="4" height="60" fill="var(--accent-green)" opacity="0.7" />
          <line x1="112" y1="120" x2="112" y2="180" stroke="var(--white)" strokeWidth="1" strokeDasharray="2,2" />
          
          {/* Right */}
          <rect x="186" y="120" width="4" height="60" fill="var(--accent-green)" opacity="0.7" />
          <line x1="188" y1="120" x2="188" y2="180" stroke="var(--white)" strokeWidth="1" strokeDasharray="2,2" />
        </g>
        
        {/* Traffic signals / Stop signs (simplified) */}
        <g aria-label="Сигнализация">
          {/* Top */}
          <circle cx="150" cy="90" r="8" fill="var(--accent-red)" stroke="var(--white)" strokeWidth="1.5" />
          <circle cx="150" cy="90" r="4" fill="var(--white)" />
          
          {/* Right */}
          <circle cx="210" cy="150" r="8" fill="var(--accent-red)" stroke="var(--white)" strokeWidth="1.5" />
          <circle cx="210" cy="150" r="4" fill="var(--white)" />
        </g>
        
        {/* Direction arrows */}
        <g aria-label="Посоки на движение">
          <path d="M 50 150 L 70 150 L 65 145 M 70 150 L 65 155" stroke="var(--primary-blue)" strokeWidth="2" fill="none" />
          <path d="M 250 150 L 230 150 L 235 145 M 230 150 L 235 155" stroke="var(--primary-blue)" strokeWidth="2" fill="none" />
          <path d="M 150 50 L 150 70 L 145 65 M 150 70 L 155 65" stroke="var(--primary-blue)" strokeWidth="2" fill="none" />
          <path d="M 150 250 L 150 230 L 145 235 M 150 230 L 155 235" stroke="var(--primary-blue)" strokeWidth="2" fill="none" />
        </g>
      </svg>
    </div>
  )
}

export default IntersectionSchematic
