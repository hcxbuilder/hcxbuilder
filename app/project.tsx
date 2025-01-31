import React, { useState, createContext } from 'react';


export const ProjectContext = createContext(null);

export const ProjectProvider = ({ children }) => {
    const [hcxProject, setHcxProject] = useState({});

    const value = {
        hcxProject,
        setHcxProject
    };

    return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
};
