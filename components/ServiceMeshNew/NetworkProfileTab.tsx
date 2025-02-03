import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { ServiceMeshConfig, NetworkTypes, NetworkProfiles } from '@/types';
import NetworkProfileForm from './NetworkProfileForm';

interface NetworkProfileTabProps {
    mesh: ServiceMeshConfig;
    onMeshChange: (field: keyof ServiceMeshConfig, value: any) => void;
}

const NetworkProfileTab: React.FC<NetworkProfileTabProps> = ({ mesh, onMeshChange }) => {
    const networkTypes = [
        { label: 'Management', value: NetworkTypes.MANAGEMENT },
        { label: 'vMotion', value: NetworkTypes.VMOTION },
        { label: 'Dedicated', value: NetworkTypes.DEDICATED }
    ];

    const vmotionTypes = networkTypes.filter((t) => t.value !== NetworkTypes.VMOTION);
    const replicationTypes = mesh.vmotion_type === NetworkTypes.DEDICATED ? networkTypes : networkTypes.filter((t) => t.value !== NetworkTypes.VMOTION);

    return (
        <div className="grid">
            <NetworkProfileForm title="Management Network" profile={mesh.management} onChange={(profile) => onMeshChange(NetworkProfiles.MANAGEMENT, profile)} distributedSwitches={mesh.distributed_switches} networkType="management" />
            <div className=" card col-12">
                <h3>Network Types</h3>
                <div className="grid">
                    <div className="col-12 md:col-4">
                        <div className="field">
                            <label className="font-bold">vMotion Type</label>
                            <Dropdown value={mesh.vmotion_type || NetworkTypes.MANAGEMENT} options={vmotionTypes} onChange={(e) => onMeshChange('vmotion_type', e.value)} className="w-full" />
                        </div>
                    </div>
                    <div className="col-12 md:col-4">
                        <div className="field">
                            <label className="font-bold">Replication Type</label>
                            <Dropdown value={mesh.replication_type || NetworkTypes.MANAGEMENT} options={replicationTypes} onChange={(e) => onMeshChange('replication_type', e.value)} className="w-full" />
                        </div>
                    </div>
                    <div className="col-12 md:col-4">
                        <div className="field">
                            <label className="font-bold">Uplink Type</label>
                            <Dropdown value={mesh.uplink_type || NetworkTypes.MANAGEMENT} options={networkTypes.filter((t) => t.value !== NetworkTypes.VMOTION)} onChange={(e) => onMeshChange('uplink_type', e.value)} className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
            {mesh.vmotion_type === NetworkTypes.DEDICATED && (
                <NetworkProfileForm title="vMotion Network" profile={mesh.vmotion} onChange={(profile) => onMeshChange(NetworkProfiles.VMOTION, profile)} distributedSwitches={mesh.distributed_switches} networkType="vmotion" />
            )}

            {mesh.replication_type === NetworkTypes.DEDICATED && (
                <NetworkProfileForm title="Replication Network" profile={mesh.replication} onChange={(profile) => onMeshChange(NetworkProfiles.REPLICATION, profile)} distributedSwitches={mesh.distributed_switches} networkType="replication" />
            )}

            {mesh.uplink_type === NetworkTypes.DEDICATED && (
                <NetworkProfileForm title="Uplink Network" profile={mesh.uplink} onChange={(profile) => onMeshChange(NetworkProfiles.UPLINK, profile)} distributedSwitches={mesh.distributed_switches} networkType="uplink" />
            )}
        </div>
    );
};

export default NetworkProfileTab;
