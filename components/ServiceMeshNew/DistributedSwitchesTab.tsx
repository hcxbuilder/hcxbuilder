import React from 'react';
import { Chips } from 'primereact/chips';
import { ServiceMeshConfig } from '@/types';

interface DistributedSwitchesTabProps {
    mesh: ServiceMeshConfig;
    onMeshChange: (field: keyof ServiceMeshConfig, value: any) => void;
}

const DistributedSwitchesTab: React.FC<DistributedSwitchesTabProps> = ({ mesh, onMeshChange }) => {
    return (
        <div className="field">
            <div className="flex flex-column gap-2">
                <label className="font-bold">Distributed Switches</label>
                <Chips
                    value={mesh.distributed_switches}
                    onChange={(e) => onMeshChange('distributed_switches', e.value)}
                    placeholder="Add distributed switch"
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default DistributedSwitchesTab;