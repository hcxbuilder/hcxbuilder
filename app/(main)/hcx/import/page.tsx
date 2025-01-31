'use client';
import React, { useContext, useRef } from 'react';
import { Button } from 'primereact/button';
import { ProjectContext } from '@/app/project';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';

const ImportPage = () => {
    const { setHcxProject } = useContext(ProjectContext);
    const toast = useRef<Toast>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const content = e.target?.result as string;
                const yaml = await import('js-yaml');
                const data = yaml.load(content);

                setHcxProject(data);
                toast.current?.show({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Project imported successfully'
                });
            } catch (error) {
                toast.current?.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to import project'
                });
                console.error('Import error:', error);
            }
        };

        reader.readAsText(file);
    };

    return (
        <div className="grid">
            <Toast ref={toast} />
            <div className="col-12">
                <div className="text-900 font-bold text-4xl mb-4">Import Project</div>
                <div className="text-500 mb-5">Import your HCX project from a YAML file</div>
            </div>
            
            <div className="col-12 md:col-6 lg:col-4">
                <Card title="Import YAML" className="h-full">
                    <div className="flex flex-column gap-3">
                        <div 
                            className="border-2 border-dashed surface-border border-round p-5 cursor-pointer hover:surface-200 transition-colors transition-duration-150"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <div className="flex flex-column align-items-center">
                                <i className="pi pi-upload text-4xl mb-3"></i>
                                <p className="m-0">Click or drag and drop your YAML file here</p>
                            </div>
                        </div>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept=".yaml,.yml"
                            onChange={handleFileUpload}
                            style={{ display: 'none' }}
                        />
                        <Button 
                            label="Import YAML" 
                            icon="pi pi-upload" 
                            className="w-full p-button-primary"
                            onClick={() => fileInputRef.current?.click()}
                        />
                        <small className="text-gray-500">
                            Supported formats: YAML (.yaml, .yml)
                        </small>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ImportPage;
