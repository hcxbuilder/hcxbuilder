'use client';

import React, { useContext, useState } from 'react';
import { ProjectContext } from '@/app/project';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import ServiceMeshModal from '@/components/ServiceMeshModalNew';
import { NetworkTypes } from '@/types';

const ServiceMeshPage = () => {
    const { hcxProject, setHcxProject } = useContext(ProjectContext);
    const [showModal, setShowModal] = useState(false);
    const [editingMesh, setEditingMesh] = useState(null);

    const handleEdit = (mesh) => {
        setEditingMesh(mesh);
        console.log('service mesh to update:');
        console.log(mesh)
        setShowModal(true);
    };

    const handleDelete = (mesh) => {
        confirmDialog({
            message: 'Are you sure you want to delete this service mesh?',
            header: 'Delete Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                if (hcxProject && setHcxProject) {
                    const updatedVCenters = hcxProject.vcenters.map(vc => ({
                        ...vc,
                        serviceMeshes: vc.serviceMeshes.filter(m => m.id !== mesh.id)
                    }));
                    setHcxProject({
                        ...hcxProject,
                        vcenters: updatedVCenters
                    });
                }
            }
        });
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="flex gap-2">
                <Button 
                    icon="pi pi-pencil" 
                    rounded 
                    outlined 
                    className="mr-2" 
                    onClick={() => handleEdit(rowData)}
                />
                <Button 
                    icon="pi pi-trash" 
                    rounded 
                    outlined 
                    severity="danger" 
                    onClick={() => handleDelete(rowData)}
                />
            </div>
        );
    };

    const handleSave = (updatedMesh) => {
        if (hcxProject && setHcxProject) {
            const meshToSave = {
                ...updatedMesh,
                storage: updatedMesh.storage || [],
                pool: updatedMesh.pool || [],
                clusters_services: updatedMesh.clusters_services || [],
                clusters_deployments: updatedMesh.clusters_deployments || []
            };

            const updatedVCenters = hcxProject.vcenters.map(vc => {
                if (vc.vcenter_name === meshToSave.vcenter_name) {
                    const meshes = editingMesh 
                        ? vc.serviceMeshes.map(m => m.id === meshToSave.id ? meshToSave : m)
                        : [...(vc.serviceMeshes || []), meshToSave];
                    return { ...vc, serviceMeshes: meshes };
                }
                return vc;
            });
            
            setHcxProject({
                ...hcxProject,
                vcenters: updatedVCenters
            });
        }
        setShowModal(false);
        setEditingMesh(null);
    };

    return (
        <div className="card">
            <ConfirmDialog />
            <div className="flex justify-content-between mb-4">
                <h2>Service Mesh Configuration</h2>
                <Button 
                    label="Add Service Mesh" 
                    icon="pi pi-plus" 
                    severity="success"
                    onClick={() => {
                        setEditingMesh(null);
                        setShowModal(true);
                    }}
                />
            </div>
            <DataTable
                value={hcxProject?.vcenters?.flatMap(vc => vc.serviceMeshes) || []}
                paginator
                rows={10}
                rowsPerPageOptions={[5, 10, 20]}
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column field="name" header="Name" sortable />
                <Column field="vcenter_name" header="vCenter" sortable />
                <Column 
                    field="clusters_services" 
                    header="Service Clusters"
                    body={(rowData) => rowData.clusters_services?.join(', ')}
                />
                <Column 
                    field="clusters_deployments" 
                    header="Deployment Clusters"
                    body={(rowData) => rowData.clusters_deployments?.join(', ')}
                />
                <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }} />
            </DataTable>

            <ServiceMeshModal
                visible={showModal}
                onHide={() => {
                    setShowModal(false);
                    setEditingMesh(null);
                }}
                onSave={handleSave}
                editingMesh={editingMesh}
            />
        </div>
    );
};

export default ServiceMeshPage;