'use client';

import React, { useCallback, useEffect, useState, useContext } from 'react';
import { Steps } from 'primereact/steps';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Button } from 'primereact/button';
import { ProjectContext } from '@/app/project';
import { InputText } from 'primereact/inputtext';

interface WizardItem {
    label: string;
    command: () => void;
}

const HCXBuilderWizard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const { hcxProject, setHcxProject } = useContext(ProjectContext);
    const [activeIndex, setActiveIndex] = useState(0);
    const router = useRouter();
    const pathname = usePathname();

    const checkActiveIndex = useCallback(() => {
        const paths = pathname.split('/');
        const currentPath = paths[paths.length - 1];

        switch (currentPath) {
            case '2-vcenter':
                setActiveIndex(1);
                break;
            case '3-cluster':
                setActiveIndex(2);
                break;
            case '4-network':
                setActiveIndex(3);
                break;
            default:
                break;
        }
    }, [pathname]);

    useEffect(() => {
        checkActiveIndex();
    }, [checkActiveIndex]);

    const wizardItems: WizardItem[] = [
        { label: 'Project', command: () => router.push('/hcx/builder') },
        { label: 'vCenters', command: () => router.push('/hcx/builder/2-vcenter') },
        { label: 'Clusters', command: () => router.push('/hcx/builder/3-cluster') },
        { label: 'Network Extension', command: () => router.push('/hcx/builder/4-network')}
    ];

    const next = () => {
        const nextIndex = activeIndex + 1;
        setActiveIndex(nextIndex);
        switch (nextIndex) {
            case 1:
                router.push('/hcx/builder/2-vcenter');
                break;
            case 2:
                router.push('/hcx/builder/3-cluster');
                break;
            case 3:
                router.push('/hcx/builder/4-network');
                break;
        }
    };

    const back = () => {
        const prevIndex = activeIndex - 1;
        setActiveIndex(prevIndex);
        switch (prevIndex) {
            case 0:
                router.push('/hcx/builder');
                break;
            case 1:
                router.push('/hcx/builder/2-vcenter');
                break;
            case 2:
                router.push('/hcx/builder/3-cluster');
                break;
        }
    };

    const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHcxProject({ ...hcxProject, name: e.target.value });
    };
    return (
        <div className="flex flex-column h-full">
            <div className="card m-3">
                <Steps 
                    model={wizardItems} 
                    activeIndex={activeIndex} 
                    onSelect={(e) => setActiveIndex(e.index)} 
                    readOnly={false} 
                />
            </div>

            <div className="card m-3 flex-1 overflow-hidden">
                <div className="overflow-y-auto h-full" style={{ maxHeight: 'calc(100vh - 250px)' }}>
                    {pathname === '/hcx/builder' ? (
                        <div className="flex flex-column lg:flex-row align-items-center justify-content-between gap-5 py-5 px-3">
                            <div className="card w-25rem shadow-none">
                                <div className="flex flex-column gap-3">
                                    <div className="text-center">
                                        <h2 className="text-3xl font-bold m-0 mb-3">HCX Builder</h2>
                                        <p className="text-700 m-0">Create your HCX deployment configuration</p>
                                    </div>
                                    <div className="flex flex-column gap-2">
                                        <label htmlFor="projectname" className="font-bold">Project Name</label>
                                        <InputText 
                                            id="projectname" 
                                            value={hcxProject.name || ''} 
                                            aria-describedby="project-help" 
                                            onChange={handleProjectNameChange}
                                            placeholder="Enter your project name"
                                            className="p-2"
                                        />
                                        <small id="project-help" className="text-600">
                                            This name will be used to identify your HCX configuration
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-content-center flex-grow-1">
                                <img 
                                    src="/images/home.png" 
                                    alt="HCX Builder" 
                                    className="w-full"
                                    style={{ 
                                        maxHeight: '400px', 
                                        objectFit: 'contain',
                                        maxWidth: '600px'
                                    }} 
                                />
                            </div>
                        </div>
                    ) : (
                        <>{children}</>
                    )}
                </div>
            </div>

            <div className="card mx-3 mb-0 flex justify-content-center">
                <span className="p-buttonset flex">
                    <Button 
                        disabled={activeIndex === 0} 
                        label="Previous" 
                        icon="pi pi-chevron-left"
                        onClick={back} 
                        rounded 
                    />
                    <Button 
                        disabled={activeIndex === 3} 
                        label="Next" 
                        icon="pi pi-chevron-right"
                        iconPos="right"
                        onClick={next} 
                        rounded 
                    />
                </span>
            </div>
        </div>
    );
};

export default HCXBuilderWizard;
