'use client';
import React, { useContext } from 'react';
import { Button } from 'primereact/button';
import { ProjectContext } from '@/app/project';
import { Card } from 'primereact/card';

const ExportPage = () => {
    const { hcxProject } = useContext(ProjectContext);

    const exportYAML = () => {
        import('js-yaml').then(yaml => {
            const yamlStr = yaml.dump(hcxProject);
            const blob = new Blob([yamlStr], { type: 'text/yaml' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = `${hcxProject?.name || 'hcx-project'}.yaml`;
            link.href = url;
            link.click();
        });
    };

    return (
        <div className="grid">
            <div className="col-12 md:col-6 lg:col-4">
                <Card title="Export Options" className="h-full">
                    <div className="flex flex-column gap-3">
                        <Button 
                            label="Export as YAML" 
                            icon="pi pi-file-export" 
                            onClick={exportYAML}
                            className="p-button-primary"
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ExportPage;
