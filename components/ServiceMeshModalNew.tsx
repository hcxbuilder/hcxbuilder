import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { ServiceMeshConfig, NetworkTypes } from '@/types';  // Add NetworkTypes import
import GeneralTab from './ServiceMeshNew/GeneralTab';
import HCXServicesTab from './ServiceMeshNew/HCXServicesTab';
import NetworkProfileTab from './ServiceMeshNew/NetworkProfileTab';
import DistributedSwitchesTab from './ServiceMeshNew/DistributedSwitchesTab';

interface ServiceMeshModalProps {
    visible: boolean;
    onHide: () => void;
    onSave: (mesh: ServiceMeshConfig) => void;
    editingMesh: ServiceMeshConfig | null;
}

const ServiceMeshModal = ({ visible, onHide, onSave, editingMesh }: ServiceMeshModalProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentMesh, setCurrentMesh] = useState<ServiceMeshConfig>({
        id: '',
        name: '',
        vcenter_name: '',
        clusters_services: [],
        clusters_deployments: [],
        storage: [],
        pool: [],
        management: {
            network: '',
            ip: [],
            prefix: '',
            gateway: '',
            dns_servers: []
        },
        vmotion_type: NetworkTypes.MANAGEMENT,
        replication_type: NetworkTypes.MANAGEMENT,
        uplink_type: NetworkTypes.MANAGEMENT,
        vmotion: null,
        replication: null,
        uplink: null,
        ha_enabled: false,
        distributed_switches: [],
        wo_enabled: false
    });

    useEffect(() => {
        if (editingMesh) {
            setCurrentMesh(editingMesh);
        } else {
            // Reset for new service mesh
            setCurrentMesh({
                id: '',
                name: '',
                vcenter_name: '',
                clusters_services: [],
                clusters_deployments: [],
                storage: [],
                pool: [],
                management: {
                    network: '',
                    ip: [],
                    prefix: '',
                    gateway: '',
                    dns_servers: []
                },
                vmotion_type: NetworkTypes.MANAGEMENT,
                replication_type: NetworkTypes.MANAGEMENT,
                uplink_type: NetworkTypes.MANAGEMENT,
                vmotion: null,
                replication: null,
                uplink: null,
                ha_enabled: false,
                distributed_switches: [],
                wo_enabled: false
            });
        }
    }, [editingMesh, visible]);

    const handleMeshChange = (field: keyof ServiceMeshConfig, value: any) => {
        setCurrentMesh(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = () => {
        if (currentMesh) {
            if (!currentMesh.id) {
                // New service mesh
                currentMesh.id = `mesh_${Date.now()}`;
            }
            onSave(currentMesh);
            onHide();
            setActiveIndex(0);
        }
    };

    const handleCancel = () => {
        onHide();
        setActiveIndex(0); // Reset to first tab after cancel
    };

    const footer = (
        <div className="flex justify-content-end gap-2">
            <Button label="Cancel" icon="pi pi-times" onClick={handleCancel} />
            <Button label="Save" icon="pi pi-check" onClick={handleSave} severity="success" />
        </div>
    );

    return (
        <Dialog
            visible={visible}
            style={{ width: '80vw' }}
            header={editingMesh?.id ? 'Edit Service Mesh' : 'Add Service Mesh'}
            modal
            className="p-fluid"
            footer={footer}
            onHide={onHide}
        >
            {currentMesh && (
                <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                    <TabPanel header="General">
                        <GeneralTab 
                            mesh={currentMesh} 
                            onMeshChange={handleMeshChange}
                        />
                    </TabPanel>
                    <TabPanel header="HCX Services">
                        <HCXServicesTab 
                            mesh={currentMesh} 
                            onMeshChange={handleMeshChange}
                        />
                    </TabPanel>
                    <TabPanel header="Network Profile">
                        <NetworkProfileTab 
                            mesh={currentMesh} 
                            onMeshChange={handleMeshChange}
                        />
                    </TabPanel>
                    <TabPanel header="Distributed Switches">
                        <DistributedSwitchesTab 
                            mesh={currentMesh} 
                            onMeshChange={handleMeshChange}
                        />
                    </TabPanel>
                </TabView>
            )}
        </Dialog>
    );
};

export default ServiceMeshModal;