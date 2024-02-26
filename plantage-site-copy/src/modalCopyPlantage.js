import React, { useState, useEffect } from 'react';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
                        <p>This site is just a copy of the original site
                            <a href='https://www.plantagen.se/'> Plantagen.se</a>.
                            Which was created only to demonstrate skills on the project</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
