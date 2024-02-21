import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Aside() {
    const [isAccordionOpen, setAccordionOpen] = useState(true);

    const handleAccordionToggle = () => {
        setAccordionOpen(!isAccordionOpen);
    };

    return (
        <div>
            <aside className="side-navigation text-center" style={{ width: '', height: '100vh', backgroundColor: '#333', padding: '20px', boxSizing: 'border-box', color: 'white' }}>
                <nav>
                    <Link to={'/cards'} className='fw-bold fs-3' style={{ textDecoration: 'none', color: '#ED7117' }} >
                        <i class="fa-solid fa-lock me-1 mt-2"></i>
                        <span>LockBox</span>
                    </Link>
                    <hr />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* accordion */}
                        <div className="accordion mb-3" style={{ borderColor: '#333' }} >
                            <div className="accordion-item bg-dark">
                                <button className={`accordion-button ${isAccordionOpen ? '' : 'collapsed'} accordion-header`} type="button" style={{ backgroundColor: '#333', color: 'white' }} onClick={handleAccordionToggle}><i class="fa-solid fa-lock me-2"></i>Inventory
                                </button>
                                <div className={`accordion-collapse collapse ${isAccordionOpen ? 'show' : ''}`}>
                                    <div className="accordion-body text-strong" style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Link to={'/cards'} style={{ textDecoration: 'none', color: 'white', marginBottom: '25px' }}>Cards</Link>
                                        <Link to={'/identities'} style={{ textDecoration: 'none', color: 'white', marginBottom: '25px' }}>Identities</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr style={{ marginBottom: '25px' }} />
                        <Link to={'/upgrade'} style={{ textDecoration: 'none', color: 'white', marginBottom: '25px' }}><i class="fa-regular fa-star me-2"></i>Upgrade</Link>
                        <Link to={'/settings'} style={{ textDecoration: 'none', color: 'white', marginBottom: '25px' }}><i class="fa-solid fa-gear me-2"></i>Settings</Link>
                    </div>
                </nav>
            </aside>
        </div>
    );
}

export default Aside;