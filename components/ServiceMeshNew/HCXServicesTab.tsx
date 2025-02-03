import React from 'react';
import { Chips } from 'primereact/chips';
import { Checkbox } from 'primereact/checkbox';
import { ServiceMeshConfig } from '@/types';

interface HCXServicesTabProps {
    mesh: ServiceMeshConfig;
    onMeshChange: (field: keyof ServiceMeshConfig, value: any) => void;
}

const HCXServicesTab: React.FC<HCXServicesTabProps> = ({ mesh, onMeshChange }) => {
    return (
        <div className="field">
            <div className="flex flex-column gap-4">
                <div className="flex flex-column gap-3">
                    <div className="flex flex-column">
                        <div className="flex align-items-center">
                            <Checkbox
                                inputId="hcx_ix"
                                checked
                                disabled
                            />
                            <label htmlFor="hcx_ix" className="ml-2">HCX-IX Enabled</label>
                        </div>
                        <small className="text-gray-500 ml-6">Interconnect service is enabled by default for all service meshes</small>
                    </div>

                    <div className="flex flex-column">
                        <div className="flex align-items-center">
                            <Checkbox
                                inputId="wo_enabled"
                                checked={mesh.wo_enabled}
                                onChange={(e) => onMeshChange('wo_enabled', e.checked)}
                            />
                            <label htmlFor="wo_enabled" className="ml-2">Enable WO</label>
                        </div>
                        <small className="text-gray-500 ml-6">WAN Optimization service (recommended for connections below 1Gbps)</small>
                    </div>

                    <div className="flex flex-column">
                        <div className="flex align-items-center">
                            <Checkbox
                                inputId="ne_enabled"
                                checked={mesh.ne_enabled}
                                onChange={(e) => onMeshChange('ne_enabled', e.checked)}
                            />
                            <label htmlFor="ne_enabled" className="ml-2">Enable NE</label>
                        </div>
                        <small className="text-gray-500 ml-6">Network Extension service for stretched L2 networks</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HCXServicesTab;