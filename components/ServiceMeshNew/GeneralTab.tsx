import React, { useContext, useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Chips } from 'primereact/chips';  // Add this import
import { ServiceMeshConfig } from '@/types';
import { ProjectContext } from '@/app/project';

interface GeneralTabProps {
    mesh: ServiceMeshConfig;
    onMeshChange: (field: keyof ServiceMeshConfig, value: any) => void;
}

const GeneralTab: React.FC<GeneralTabProps> = ({ mesh, onMeshChange }) => {
    const { hcxProject } = useContext(ProjectContext);
    const [availableClusters, setAvailableClusters] = useState<string[]>([]);
    const [vCenterOptions, setVCenterOptions] = useState<{ label: string; value: string }[]>([]);

    useEffect(() => {
        if (hcxProject?.vcenters) {
            const options = hcxProject.vcenters.map(vc => ({
                label: vc.vcenter_name,
                value: vc.vcenter_name
            }));
            setVCenterOptions(options);
        }
    }, [hcxProject]);

    useEffect(() => {
        if (mesh.vcenter_name && hcxProject?.vcenters) {
            const selectedVCenter = hcxProject.vcenters.find(
                vc => vc.vcenter_name === mesh.vcenter_name
            );
            if (selectedVCenter) {
                setAvailableClusters(selectedVCenter.vcenter_clusters || []);
            }
        } else {
            setAvailableClusters([]);
        }
    }, [mesh.vcenter_name, hcxProject]);

    const clusterOptions = availableClusters.map(cluster => ({
        label: cluster,
        value: cluster
    }));

    const handleVCenterChange = (value: string) => {
        onMeshChange('vcenter_name', value);
        onMeshChange('clusters_services', []);
        onMeshChange('clusters_deployments', []);
        onMeshChange('storage', []);
        onMeshChange('pool', []);
    };

    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <div className="field">
                    <label htmlFor="name" className="font-bold">Service Mesh Name</label>
                    <InputText
                        id="name"
                        value={mesh.name}
                        onChange={(e) => onMeshChange('name', e.target.value)}
                        className="w-full"
                        placeholder="Enter service mesh name"
                    />
                </div>
            </div>
            <div className="col-12 md:col-6">
                <div className="field">
                    <label htmlFor="vcenter" className="font-bold">vCenter</label>
                    <Dropdown
                        id="vcenter"
                        value={mesh.vcenter_name}
                        onChange={(e) => handleVCenterChange(e.value)}
                        options={vCenterOptions}
                        className="w-full"
                        placeholder="Select vCenter"
                    />
                </div>
            </div>
       
            <div className="col-12 md:col-6">
                <div className="field">
                    <label className="font-bold">Service Clusters</label>
                    <MultiSelect
                        value={mesh.clusters_services}
                        onChange={(e) => onMeshChange('clusters_services', e.value)}
                        options={clusterOptions}
                        placeholder="Select service clusters"
                        className="w-full"
                        disabled={!mesh.vcenter_name}
                    />
                </div>
            </div>
            <div className="col-12 md:col-6">
                <div className="field">
                    <label className="font-bold">Deployment Clusters</label>
                    <MultiSelect
                        value={mesh.clusters_deployments}
                        onChange={(e) => onMeshChange('clusters_deployments', e.value)}
                        options={clusterOptions}
                        placeholder="Select deployment clusters"
                        className="w-full"
                        disabled={!mesh.vcenter_name}
                    />
                </div>
            </div>
            <div className="col-12 md:col-6">
                <div className="field">
                    <label className="font-bold">Storage</label>
                    <Chips
                        value={mesh.storage}
                        onChange={(e) => onMeshChange('storage', e.value)}
                        placeholder="Add storage"
                        className="w-full"
                        disabled={!mesh.vcenter_name}
                    />
                </div>
            </div>
            <div className="col-12 md:col-6">
                <div className="field">
                    <label className="font-bold">Resource Pool</label>
                    <Chips
                        value={mesh.pool}
                        onChange={(e) => onMeshChange('pool', e.value)}
                        placeholder="Add resource pool"
                        className="w-full"
                        disabled={!mesh.vcenter_name}
                    />
                </div>
            </div>

        </div>
    );
};

export default GeneralTab;