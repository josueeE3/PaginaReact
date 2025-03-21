import React, { useState } from 'react';

const NavTabs = () => {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div style={{ margin: "20px" }}>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                        onClick={() => setActiveTab('home')}
                    >
                        Inicio
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        Perfil
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                        onClick={() => setActiveTab('contact')}
                    >
                        Contacto
                    </button>
                </li>
            </ul>

            <div className="tab-content" style={{ marginTop: "15px" }}>
                {activeTab === 'home' && <div className="tab-pane fade show active">Contenido de Inicio</div>}
                {activeTab === 'profile' && <div className="tab-pane fade show active">Contenido de Perfil</div>}
                {activeTab === 'contact' && <div className="tab-pane fade show active">Contenido de Contacto</div>}
            </div>
        </div>
    );
};

export default NavTabs;
