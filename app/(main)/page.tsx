'use client';
import React, { useContext } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';
import { ProjectContext } from '../project';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

const HomePage = () => {
    const router = useRouter();
    const { hcxProject, setHcxProject } = useContext(ProjectContext);

    const handleDeleteProject = () => {
        confirmDialog({
            message: 'Are you sure you want to delete this project?',
            header: 'Delete Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptClassName: 'p-button-danger',
            accept: () => {
                setHcxProject({
                    name: '',
                    vcenters: []
                });
                localStorage.removeItem('hcxProject');
            }
        });
    };

    return (
        <div className="grid">
            <ConfirmDialog />
            <div className="col-12">
                <div className="text-900 font-bold text-4xl mb-4">Welcome to HCX Builder</div>
                <div className="text-500 mb-5">Start building your HCX configuration</div>
            </div>
            
            {hcxProject.name ? (
                <div className="col-12 md:col-6 lg:col-3">
                    <Card title="Current Project" className="h-full">
                        <div className="flex flex-column gap-3">
                            <p className="m-0 text-secondary font-bold">
                                {hcxProject.name}
                            </p>
                            <div className="flex gap-2">
                                <Button 
                                    label="Continue" 
                                    icon="pi pi-arrow-right" 
                                    onClick={() => router.push('/hcx/builder')}
                                    className="p-button-primary"
                                />
                                <Button 
                                    label="Delete" 
                                    icon="pi pi-trash" 
                                    onClick={handleDeleteProject}
                                    severity="danger"
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            ) : (
                <>
                    <div className="col-12 md:col-6 lg:col-3">
                        <Card title="Create New Project" className="h-full">
                            <div className="flex flex-column gap-3">
                                <p className="m-0 text-secondary">
                                    Start a new HCX configuration project from scratch
                                </p>
                                <Button 
                                    label="Create Project" 
                                    icon="pi pi-plus" 
                                    onClick={() => router.push('/hcx/builder')}
                                    className="p-button-primary"
                                />
                            </div>
                        </Card>
                    </div>

                    <div className="col-12 md:col-6 lg:col-3">
                        <Card title="Import Project" className="h-full">
                            <div className="flex flex-column gap-3">
                                <p className="m-0 text-secondary">
                                    Import an existing HCX configuration from YAML
                                </p>
                                <Button 
                                    label="Import YAML" 
                                    icon="pi pi-upload" 
                                    onClick={() => router.push('/hcx/import')}
                                    className="p-button-secondary"
                                />
                            </div>
                        </Card>
                    </div>
                </>
            )}
        </div>
    );
};

export default HomePage;
