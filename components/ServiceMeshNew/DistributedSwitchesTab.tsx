import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { ServiceMeshConfig, DistributedSwitchConfig } from '@/types';
import { Dropdown } from 'primereact/dropdown';

interface DistributedSwitchesTabProps {
    mesh: ServiceMeshConfig;
    onMeshChange: (field: keyof ServiceMeshConfig, value: any) => void;
}

const DistributedSwitchesTab: React.FC<DistributedSwitchesTabProps> = ({ mesh, onMeshChange }) => {
    const [selectedSwitch, setSelectedSwitch] = useState<DistributedSwitchConfig | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [showNetworkModal, setShowNetworkModal] = useState(false);
    const [selectedNetwork, setSelectedNetwork] = useState<any>(null);
    const handleEdit = (switchData: DistributedSwitchConfig) => {
        setSelectedSwitch({...switchData});
        setShowModal(true);
    };

    const getAvailableAppliances = () => {
        if (!selectedSwitch) return [];
        const usedAppliances = selectedSwitch.extended_network.flat()
            .map(net => net.ne_id)
            .filter(id => id !== selectedNetwork?.ne_id);
        
        const totalAppliances = [];
        
        // Add HA pairs first
        for (let i = 0; i < selectedSwitch.ne_ha_count; i++) {
            totalAppliances.push({
                label: `NE ${i + 1} (HA enabled)${usedAppliances.includes(`ne${i + 1}`) ? ' - In use' : ''}`,
                value: `ne${i + 1}`
            });
        }
        
        // Add standalone appliances
        for (let i = selectedSwitch.ne_ha_count; i < selectedSwitch.ne_count; i++) {
            totalAppliances.push({
                label: `NE ${i + 1}${usedAppliances.includes(`ne${i + 1}`) ? ' - In use' : ''}`,
                value: `ne${i + 1}`
            });
        }
        
        return totalAppliances;
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
    const handleAddNetwork = () => {
        setSelectedNetwork({
            name: '',
            network: '',
            prefix: '',
            gateway: '',
            vlan_id: '',
            ne_id: ''
        });
        setShowNetworkModal(true);
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
                    
                    rounded
                    onClick={handleAdd}
                    className=" col-12 md:col-6 lg:col-3"
                />
            </div>
            <DataTable
                value={mesh.distributed_switches}
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column field="name" header="Name" sortable />
  
                <Column 
                    field="extended_network" 
                    header="Extended Networks"
                    body={(rowData) => rowData.extended_network.flat().length}
                />
                <Column 
                    header="Appliances" 
                    sortable 
                    body={(rowData) => (
                        <div>
                            {rowData.ne_ha_count > 0 && `${rowData.ne_ha_count} HA pairs`}
                            {rowData.ne_ha_count > 0 && rowData.ne_count - rowData.ne_ha_count > 0 && ', '}
                            {rowData.ne_count - rowData.ne_ha_count > 0 && `${rowData.ne_count - rowData.ne_ha_count} standalone`}
                        </div>
                    )}
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
                                onValueChange={(e) => setSelectedSwitch(prev => prev ? {
                                    ...prev, 
                                    ne_ha_count: Math.min(e.value || 0, prev.ne_count)
                                } : null)}
                                min={0}
                                max={selectedSwitch?.ne_count || 0}
                            />
                            <small className="text-gray-500 block mt-1">
                                {`${selectedSwitch?.ne_ha_count || 0} HA pairs, ${(selectedSwitch?.ne_count || 0) - (selectedSwitch?.ne_ha_count || 0)} standalone appliances`}
                            </small>
                        </div>
                    </div>
                    <div className="col-12 md:col-8">
                        <div className="flex justify-content-between align-items-center mb-4">
                            <h5 className="m-0">Extended Networks</h5>
                            <Button
                                label='Add network'
                                icon="pi pi-plus"
                                rounded
                                className=" col-12 md:col-6 lg:col-3"
                                severity="success"
                                onClick={handleAddNetwork}
                            />
                            
              
                            <Dialog
                                visible={showNetworkModal}
                                style={{ width: '450px' }}
                                header="Add Network"
                                modal
                                className="p-fluid"
                                footer={(
                                    <div>
                                        <Button label="Cancel" icon="pi pi-times" onClick={() => setShowNetworkModal(false)} className="p-button-text" />
                                        <Button 
                                            label="Save" 
                                            icon="pi pi-check" 
                                            onClick={() => {
                                                if (selectedNetwork && selectedSwitch) {
                                                    setSelectedSwitch(prev => {
                                                        if (!prev) return prev;
                                                        const networks = [...prev.extended_network];
                                                        const existingGroupIndex = networks.findIndex(group => 
                                                            group.some(net => net.name === selectedNetwork.name)
                                                        );
                                                        
                                                        if (existingGroupIndex >= 0) {
                                                            networks[existingGroupIndex] = networks[existingGroupIndex].map(net => 
                                                                net.name === selectedNetwork.name ? selectedNetwork : net
                                                            );
                                                        } else {
                                                            networks.push([selectedNetwork]);
                                                        }
                                                        
                                                        return {...prev, extended_network: networks};
                                                    });
                                                    setShowNetworkModal(false);
                                                    setSelectedNetwork(null);
                                                }
                                            }} 
                                            severity="success" 
                                        />
                                    </div>
                                )}
                                onHide={() => setShowNetworkModal(false)}
                            >
                                <div className="grid">
                                    <div className="col-12">
                                        <div className="field">
                                            <label htmlFor="net_name">Name</label>
                                            <InputText
                                                id="net_name"
                                                value={selectedNetwork?.name || ''}
                                                onChange={(e) => setSelectedNetwork(prev => ({...prev, name: e.target.value}))}
                                            />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="network">Network</label>
                                            <InputText
                                                id="network"
                                                value={selectedNetwork?.network || ''}
                                                onChange={(e) => setSelectedNetwork(prev => ({...prev, network: e.target.value}))}
                                            />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="prefix">Prefix</label>
                                            <InputText
                                                id="prefix"
                                                value={selectedNetwork?.prefix || ''}
                                                onChange={(e) => setSelectedNetwork(prev => ({...prev, prefix: e.target.value}))}
                                            />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="gateway">Gateway</label>
                                            <InputText
                                                id="gateway"
                                                value={selectedNetwork?.gateway || ''}
                                                onChange={(e) => setSelectedNetwork(prev => ({...prev, gateway: e.target.value}))}
                                            />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="vlan_id">VLAN ID</label>
                                            <InputNumber
                                                id="vlan_id"
                                                value={selectedNetwork?.vlan_id || ''}
                                                onValueChange={(e) => setSelectedNetwork(prev => ({...prev, vlan_id: e.value}))}
                                                min={0}
                                                max={4094}
                                                useGrouping={false}
                                            />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="ne_id">NE Appliance</label>
                                            <Dropdown
        id="ne_id"
        value={selectedNetwork?.ne_id || ''}
        options={getAvailableAppliances()}
        onChange={(e) => setSelectedNetwork(prev => ({...prev, ne_id: e.value}))}
        placeholder="Select an appliance"
    />
                                        </div>
                                    </div>
                                </div>
                            </Dialog>
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
                            <Column field="ne_id" header="NE Appliance" />
                            <Column 
                                body={(rowData) => (
                                    <div className="flex gap-2">
                                        <Button
                                            icon="pi pi-pencil"
                                            rounded
                                            text
                                            onClick={() => {
                                                setSelectedNetwork({...rowData});
                                                setShowNetworkModal(true);
                                            }}
                                        />
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
                                    </div>
                                )}
                                style={{ width: '8rem' }}
                            />
                        </DataTable>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default DistributedSwitchesTab;