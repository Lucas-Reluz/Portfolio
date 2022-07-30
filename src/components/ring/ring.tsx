import './ring.css'
import { Link } from 'react-router-dom'

function Ring() {
    return (
        <>
            <div className='bodyy'>
                <Link to="/about" className='Text1'><h1>Entrar no Portfolio</h1></Link>
                <div className="circle"></div>
                <svg>
                    <filter id="wavy">
                        <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
                            <animate attributeName="baseFrequency" dur="60s" values="0.02;0.005;0.02" repeatCount="indefinite" />
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="30" />
                    </filter>
                </svg>
            </div>
        </>
    );
}
export default Ring;