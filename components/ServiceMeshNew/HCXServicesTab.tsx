import React from 'react';
import { Chips } from 'primereact/chips';
import { ServiceMeshConfig } from '@/types';

interface HCXServicesTabProps {
    mesh: ServiceMeshConfig;
    onMeshChange: (field: keyof ServiceMeshConfig, value: any) => void;
}

const HCXServicesTab: React.FC<HCXServicesTabProps> = ({ mesh, onMeshChange }) => {
    return (
        <div className="field">
            <div className="flex flex-column gap-2">
                <label className="font-bold">HCX Services</label>
                <Chips
                    value={mesh.services}
                    onChange={(e) => onMeshChange('services', e.value)}
                    placeholder="Add HCX service"
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default HCXServicesTab;