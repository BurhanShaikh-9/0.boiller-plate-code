import React, { useState } from 'react'

const Accordian = () => {
    const [activeSection, setActiveSection] = useState(0);


    const toggleSection = (index) => {
        setActiveSection(activeSection === index ? null : index);
    };

    const sections = [
        { title: 'Section 1', content: 'Content for Section 1' },
        { title: 'Section 2', content: 'Content for Section 2' },
        { title: 'Section 3', content: 'Content for Section 3' },
    ];

    return (
        <div>
            {sections.map((section, keyId) => (
                <div key={keyId} className="bas-accordian">
                    <div className={`bas-accordion-header ${activeSection === keyId ? 'active' : ''}`} onClick={() => toggleSection(keyId)}>
                        <span>
                            {section.title}
                        </span>
                    </div>
                    {activeSection === keyId && (
                        <div className="bas-accordion-body">
                            <span>
                                {section.content}
                            </span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Accordian