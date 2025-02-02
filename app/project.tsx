'use client';

import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { DEFAULT_VALUES } from '../constants';
import type { HCXProject } from '../types';

interface ProjectContextType {
    hcxProject: HCXProject;
    setHcxProject: React.Dispatch<React.SetStateAction<HCXProject>>;
}

export const ProjectContext = createContext<ProjectContextType>({
    hcxProject: { name: '' },
    setHcxProject: () => {}
});

export function ProjectProvider({ children }: { children: ReactNode }) {
    const [isClient, setIsClient] = useState(false);
    const [hcxProject, setHcxProject] = useState<HCXProject>({
        name: '',
        vcenters: [{
            ...DEFAULT_VALUES.VCENTER,
            serviceMeshes: [{
                ...DEFAULT_VALUES.SERVICE_MESH
            }]
        }]
    });

    useEffect(() => {
        setIsClient(true);
        const saved = localStorage.getItem('hcxProject');
        if (saved) {
            setHcxProject(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            localStorage.setItem('hcxProject', JSON.stringify(hcxProject));
        }
    }, [hcxProject, isClient]);

    return (
        <ProjectContext.Provider value={{ hcxProject, setHcxProject }}>
            {children}
        </ProjectContext.Provider>
    );
}
