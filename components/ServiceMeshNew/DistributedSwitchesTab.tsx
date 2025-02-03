import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { ServiceMeshConfig, DistributedSwitchConfig } from '@/types';

interface DistributedSwitchesTabProps {
    mesh: ServiceMeshConfig;
    onMeshChange: (field: keyof ServiceMeshConfig, value: any) => void;
}

const DistributedSwitchesTab: React.FC<DistributedSwitchesTabProps> = ({ mesh, onMeshChange }) => {
    const [selectedSwitch, setSelectedSwitch] = useState<DistributedSwitchConfig | null>(null);
    const [showModal, setShowModal] = useState(false);

    const handleEdit = (switchData: DistributedSwitchConfig) => {
        setSelectedSwitch({...switchData});
        setShowModal(true);
    };

    const handleAdd = () => {
        const newSwitch: DistributedSwitchConfig = {
            name: '',
            ne_count: 1,
            ne_ha_count: 0,
            extended_network: []
        };
        setSelectedSwitch(newSwitch);
        setShowModal(true);
    };

    const handleSave = () => {
        if (selectedSwitch && mesh.distributed_switches) {
            const updatedSwitches = [...mesh.distributed_switches];
            const existingIndex = updatedSwitches.findIndex(s => s.name === selectedSwitch.name);
            
            if (existingIndex >= 0) {
                updatedSwitches[existingIndex] = selectedSwitch;
            } else {
                updatedSwitches.push(selectedSwitch);
            }
            
            onMeshChange('distributed_switches', updatedSwitches);
            setShowModal(false);
            setSelectedSwitch(null);
        }
    };

    const handleModalHide = () => {
        setShowModal(false);
        setSelectedSwitch(null);
    };
    const actionBodyTemplate = (rowData: DistributedSwitchConfig) => {
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

    const handleDelete = (switchData: DistributedSwitchConfig) => {
        const updatedSwitches = mesh.distributed_switches.filter(
            ds => ds.name !== switchData.name
        );
        onMeshChange('distributed_switches', updatedSwitches);
    };
    const modalFooter = (
        <div>
            <Button label="Cancel" icon="pi pi-times" onClick={handleModalHide} className="p-button-text" />
            <Button label="Save" icon="pi pi-check" onClick={handleSave} severity="success" />
        </div>
    );

    return (
        <div >
            <div className="flex justify-content-between align-items-center mb-4">
                <h4>Distributed Switches</h4>
                <Button 
                label="Add Switch"
                    icon="pi pi-plus" 
                    severity="success"
                    text
                    rounded
                    onClick={handleAdd}
                />
            </div>
            <DataTable
                value={mesh.distributed_switches}
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column field="name" header="Name" sortable />
                <Column field="ne_count" header="NE Count" sortable />
                <Column field="ne_ha_count" header="NE HA Count" sortable />
                <Column 
                    field="extended_network" 
                    header="Extended Networks"
                    body={(rowData) => rowData.extended_network.flat().length}
                />
                <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }} />
            </DataTable>

            <Dialog
                visible={showModal}
                style={{ width: '80vw' }}
                header={selectedSwitch?.name ? 'Edit Switch' : 'Add Switch'}
                modal
                className="p-fluid"
                footer={modalFooter}
                onHide={handleModalHide}
            >
                <div className="grid">
                    <div className="col-12 md:col-4">
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <InputText
                                id="name"
                                value={selectedSwitch?.name || ''}
                                onChange={(e) => setSelectedSwitch(prev => prev ? {...prev, name: e.target.value} : null)}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="ne_count">NE Count</label>
                            <InputNumber
                                id="ne_count"
                                value={selectedSwitch?.ne_count || 1}
                                onValueChange={(e) => setSelectedSwitch(prev => prev ? {...prev, ne_count: e.value || 1} : null)}
                                min={1}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="ne_ha_count">NE HA Count</label>
                            <InputNumber
                                id="ne_ha_count"
                                value={selectedSwitch?.ne_ha_count || 0}
                                onValueChange={(e) => setSelectedSwitch(prev => prev ? {...prev, ne_ha_count: e.value || 0} : null)}
                                min={0}
                            />
                        </div>
                    </div>
                    <div className="col-12 md:col-8">
                        <div className="flex justify-content-between align-items-center mb-4">
                            <h5 className="m-0">Extended Networks</h5>
                            <Button
                                icon="pi pi-plus"
                                rounded
                                text
                                severity="success"
                                onClick={() => {
                                    setSelectedSwitch(prev => {
                                        if (!prev) return prev;
                                        const networks = [...prev.extended_network];
                                        networks.push([{
                                            name: '',
                                            network: '',
                                            prefix: '',
                                            gateway: '',
                                            vlan_id: '',
                                            ne_id: ''
                                        }]);
                                        return {...prev, extended_network: networks};
                                    });
                                }}
                            />
                        </div>
                        <DataTable
                            value={selectedSwitch?.extended_network.flat() || []}
                            tableStyle={{ minWidth: '50rem' }}
                        >
                            <Column field="name" header="Name" />
                            <Column field="network" header="Network" />
                            <Column field="prefix" header="Prefix" />
                            <Column field="gateway" header="Gateway" />
                            <Column field="vlan_id" header="VLAN ID" />
                            <Column field="ne_id" header="NE ID" />
                            <Column 
                                body={(rowData) => (
                                    <Button
                                        icon="pi pi-trash"
                                        rounded
                                        text
                                        severity="danger"
                                        onClick={() => {
                                            setSelectedSwitch(prev => {
                                                if (!prev) return prev;
                                                const networks = prev.extended_network.map(group => 
                                                    group.filter(net => net !== rowData)
                                                ).filter(group => group.length > 0);
                                                return {...prev, extended_network: networks};
                                            });
                                        }}
                                    />
                                )}
                                style={{ width: '5rem' }}
                            />
                        </DataTable>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default DistributedSwitchesTab;