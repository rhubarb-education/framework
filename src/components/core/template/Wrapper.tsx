import React from 'react';
export const Wrapper: React.FC = ({ children }) => {
    return (
        <div className="app-wrapper">
            <div className="bg-wrapper"></div>
            {children}
        </div>
    );
};

export default Wrapper;
