'use client';

import React, { useContext, useState } from 'react';
import { ProjectContext } from '@/app/project';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import ServiceMeshModal from '@/components/ServiceMeshModalNew';
import { NetworkTypes } from '@/types';

const ServiceMeshPage = () => {
    const { hcxProject, setHcxProject } = useContext(ProjectContext);
    const [showModal, setShowModal] = useState(false);

    const serviceMeshes = hcxProject?.vcenters?.flatMap(vcenter => 
        vcenter.serviceMeshes.map(mesh => ({
            ...mesh,
            vcenter_name: vcenter.vcenter_name
        }))
    ) || [];

    const handleSave = (mesh) => {
        if (hcxProject && setHcxProject) {
            const vcenter = hcxProject.vcenters.find(vc => vc.vcenter_name === mesh.vcenter_name);
            if (vcenter) {
                const updatedMeshes = [...vcenter.serviceMeshes, { ...mesh, id: `mesh_${Date.now()}` }];
                const updatedVCenters = hcxProject.vcenters.map(vc => 
                    vc.vcenter_name === mesh.vcenter_name 
                        ? { ...vc, serviceMeshes: updatedMeshes }
                        : vc
                );
                setHcxProject({ ...hcxProject, vcenters: updatedVCenters });
            }
        }
    };

    const initialMesh = {
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
    };

    return (
        <div className="card">
            <div className="flex justify-content-between mb-4">
                <h2>Service Mesh Configuration</h2>
                <Button 
                    label="Add Service Mesh" 
                    icon="pi pi-plus" 
                    severity="success"
                    onClick={() => setShowModal(true)}
                />
            </div>
            
            <DataTable
                value={serviceMeshes}
                paginator
                rows={10}
                rowsPerPageOptions={[5, 10, 20]}
                tableStyle={{ minWidth: '50rem' }}
                emptyMessage="No service meshes found"
                stripedRows
            >
                <Column 
                    field="name" 
                    header="Name" 
                    sortable 
                    style={{ width: '20%' }}
                />
                <Column 
                    field="vcenter_name" 
                    header="vCenter" 
                    sortable 
                    style={{ width: '20%' }}
                />
                <Column 
                    field="clusters_services" 
                    header="Service Clusters"
                    body={(rowData) => (
                        <span className="text-sm">
                            {rowData.clusters_services?.join(', ') || '-'}
                        </span>
                    )}
                    style={{ width: '30%' }}
                />
                <Column 
                    field="clusters_deployments" 
                    header="Deployment Clusters"
                    body={(rowData) => (
                        <span className="text-sm">
                            {rowData.clusters_deployments?.join(', ') || '-'}
                        </span>
                    )}
                    style={{ width: '30%' }}
                />
            </DataTable>

            <ServiceMeshModal 
                visible={showModal}
                onHide={() => setShowModal(false)}
                onSave={handleSave}
                editingMesh={null}  // Set to null for new service mesh
            />
        </div>
    );
};

export default ServiceMeshPage;