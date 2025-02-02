import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { ServiceMeshConfig, NetworkTypes } from '@/types';

interface NetworkProfileTabProps {
    mesh: ServiceMeshConfig;
    onMeshChange: (field: keyof ServiceMeshConfig, value: any) => void;
}

const NetworkProfileTab: React.FC<NetworkProfileTabProps> = ({ mesh, onMeshChange }) => {
    const networkTypes = [
        { label: 'Management', value: NetworkTypes.MANAGEMENT },
        { label: 'vMotion', value: NetworkTypes.VMOTION },
        { label: 'Replication', value: NetworkTypes.REPLICATION }
    ];

    return (
        <div className="grid">
            <div className="col-12">
                <h3>Management Network</h3>
                <div className="grid">
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label className="font-bold">Network</label>
                            <InputText
                                value={mesh.management?.network}
                                onChange={(e) => onMeshChange('management', { ...mesh.management, network: e.target.value })}
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label className="font-bold">Gateway</label>
                            <InputText
                                value={mesh.management?.gateway}
                                onChange={(e) => onMeshChange('management', { ...mesh.management, gateway: e.target.value })}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <h3>Network Types</h3>
                <div className="grid">
                    <div className="col-12 md:col-4">
                        <div className="field">
                            <label className="font-bold">vMotion Type</label>
                            <Dropdown
                                value={mesh.vmotion_type}
                                options={networkTypes}
                                onChange={(e) => onMeshChange('vmotion_type', e.value)}
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="col-12 md:col-4">
                        <div className="field">
                            <label className="font-bold">Replication Type</label>
                            <Dropdown
                                value={mesh.replication_type}
                                options={networkTypes}
                                onChange={(e) => onMeshChange('replication_type', e.value)}
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="col-12 md:col-4">
                        <div className="field">
                            <label className="font-bold">Uplink Type</label>
                            <Dropdown
                                value={mesh.uplink_type}
                                options={networkTypes}
                                onChange={(e) => onMeshChange('uplink_type', e.value)}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NetworkProfileTab;