import React from 'react'
import styles from './Diagram.module.scss'

interface ProcessFlowDiagramProps {
  className?: string
  variant?: 'full' | 'inline'
}

const ProcessFlowDiagram: React.FC<ProcessFlowDiagramProps> = ({ 
  className = '', 
  variant = 'full' 
}) => {
  return (
    <div className={`${styles.diagramContainer} ${styles[variant]} ${className}`}>
      <svg
        viewBox="0 0 500 200"
        className={styles.diagramSvg}
        role="img"
        aria-label="Flow диаграма на процеса за изработване на ГПОД"
        aria-describedby="process-flow-desc"
      >
        <title>Flow диаграма на процес</title>
        <desc id="process-flow-desc">
          Визуализация на 4-етапния процес за изработване на ГПОД с прякориентирани стрелки 
          между стъпките, показваща последователността от данни и обследване до план за изпълнение.
        </desc>
        
        {/* Background */}
        <rect width="500" height="200" fill="var(--bg-secondary)" opacity="0.2" />
        
        {/* Process steps */}
        <g aria-label="Етапи на процеса">
          {/* Step 1: Data & Survey */}
          <rect x="20" y="70" width="90" height="60" rx="8" fill="var(--primary-blue)" stroke="var(--white)" strokeWidth="2" />
          <text x="65" y="95" textAnchor="middle" fill="var(--white)" fontSize="11" fontWeight="700">1. Данни</text>
          <text x="65" y="110" textAnchor="middle" fill="var(--white)" fontSize="10">Обследване</text>
          
          {/* Step 2: Analysis */}
          <rect x="150" y="70" width="90" height="60" rx="8" fill="var(--primary-blue-light)" stroke="var(--white)" strokeWidth="2" />
          <text x="195" y="95" textAnchor="middle" fill="var(--white)" fontSize="11" fontWeight="700">2. Анализ</text>
          <text x="195" y="110" textAnchor="middle" fill="var(--white)" fontSize="10">Проблеми</text>
          
          {/* Step 3: Schemes */}
          <rect x="280" y="70" width="90" height="60" rx="8" fill="var(--accent-green)" stroke="var(--white)" strokeWidth="2" />
          <text x="325" y="95" textAnchor="middle" fill="var(--white)" fontSize="11" fontWeight="700">3. Схеми</text>
          <text x="325" y="110" textAnchor="middle" fill="var(--white)" fontSize="10">Мерки</text>
          
          {/* Step 4: Plan */}
          <rect x="410" y="70" width="90" height="60" rx="8" fill="var(--accent-green-dark)" stroke="var(--white)" strokeWidth="2" />
          <text x="455" y="95" textAnchor="middle" fill="var(--white)" fontSize="11" fontWeight="700">4. План</text>
          <text x="455" y="110" textAnchor="middle" fill="var(--white)" fontSize="10">Изпълнение</text>
        </g>
        
        {/* Flow arrows */}
        <g aria-label="Последователност на процеса">
          {/* Arrow 1 -> 2 */}
          <path d="M 110 100 L 150 100" stroke="var(--primary-blue)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
          
          {/* Arrow 2 -> 3 */}
          <path d="M 240 100 L 280 100" stroke="var(--primary-blue)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
          
          {/* Arrow 3 -> 4 */}
          <path d="M 370 100 L 410 100" stroke="var(--primary-blue)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
        </g>
        
        {/* Arrow marker definition */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="var(--primary-blue)" />
          </marker>
        </defs>
        
        {/* Start marker */}
        <g aria-label="Начало">
          <circle cx="20" cy="100" r="6" fill="var(--accent-green)" stroke="var(--white)" strokeWidth="2" />
          <text x="20" y="40" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">Начало</text>
        </g>
        
        {/* End marker */}
        <g aria-label="Край">
          <circle cx="500" cy="100" r="6" fill="var(--accent-green)" stroke="var(--white)" strokeWidth="2" />
          <text x="500" y="40" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">Край</text>
        </g>
        
        {/* Parallel process indicators (optional feedback loops) */}
        <g aria-label="Обратна връзка" opacity="0.5">
          <path d="M 325 130 Q 325 160 195 160 Q 195 130 325 130" stroke="var(--accent-orange)" strokeWidth="2" fill="none" strokeDasharray="4,2" />
          <path d="M 195 160 L 190 155 M 195 160 L 190 165" stroke="var(--accent-orange)" strokeWidth="2" fill="none" />
        </g>
      </svg>
    </div>
  )
}

export default ProcessFlowDiagram
