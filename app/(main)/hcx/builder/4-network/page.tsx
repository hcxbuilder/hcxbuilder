'use client';

import React, { useContext, useState } from 'react';
import Menu from '../page';
import { ProjectContext } from '@/app/project';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

interface NetworkConfig {
    name: string;
    cidr: string;
    gateway: string;
    vlan: number;
    ne_id: string;
}

function SeatDemo() {
    const { hcxProject, setHcxProject } = useContext(ProjectContext);
    const [activeVCenter, setActiveVCenter] = useState(0);
    const [activeCluster, setActiveCluster] = useState(0);

    const handleNetworkChange = (vCenterIndex: number, clusterIndex: number, networkIndex: number, field: keyof NetworkConfig, value: any) => {
        const updatedVCenters = [...(hcxProject.vcenters || [])];
        if (!updatedVCenters[vCenterIndex].clusters[clusterIndex].networks) {
            updatedVCenters[vCenterIndex].clusters[clusterIndex].networks = [];
        }
        updatedVCenters[vCenterIndex].clusters[clusterIndex].networks[networkIndex] = {
            ...updatedVCenters[vCenterIndex].clusters[clusterIndex].networks[networkIndex],
            [field]: value
        };
        
        setHcxProject({
            ...hcxProject,
            vcenters: updatedVCenters
        });
    };

    const addNetwork = (vCenterIndex: number, clusterIndex: number) => {
        const updatedVCenters = [...(hcxProject.vcenters || [])];
        if (!updatedVCenters[vCenterIndex].clusters[clusterIndex].networks) {
            updatedVCenters[vCenterIndex].clusters[clusterIndex].networks = [];
        }
        updatedVCenters[vCenterIndex].clusters[clusterIndex].networks.push({} as NetworkConfig);
        setHcxProject({
            ...hcxProject,
            vcenters: updatedVCenters
        });
    };

    const deleteNetwork = (vCenterIndex: number, clusterIndex: number, networkIndex: number) => {
        confirmDialog({
            message: 'Are you sure you want to delete this network?',
            header: 'Delete Network',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                const updatedVCenters = [...(hcxProject.vcenters || [])];
                updatedVCenters[vCenterIndex].clusters[clusterIndex].networks.splice(networkIndex, 1);
                setHcxProject({
                    ...hcxProject,
                    vcenters: updatedVCenters
                });
            }
        });
    };

    const renderNetworkForm = (vCenterIndex: number, clusterIndex: number, networkIndex: number) => {
        const cluster = hcxProject.vcenters?.[vCenterIndex]?.clusters?.[clusterIndex] || {};
        const network = cluster.networks?.[networkIndex] || {};
        const neOptions = Array.from({ length: cluster.ne_count || 0 }).map((_, index) => ({
            label: `NE ${index + 1} (${cluster.ne_ips?.[index] || 'No IP'})`,
            value: cluster.ne_ips?.[index] || ''
        })).filter(option => option.value !== '');

        return (
            <Card className="mb-3">
                <div className="flex justify-content-end mb-3">
                    <Button 
                        icon="pi pi-trash" 
                        severity="danger" 
                        onClick={() => deleteNetwork(vCenterIndex, clusterIndex, networkIndex)}
                    />
                </div>
                <div className="grid p-fluid">
                    <div className="col-12 md:col-6">
                        <div className="p-float-label mb-3">
                            <InputText
                                id={`network-name-${vCenterIndex}-${clusterIndex}-${networkIndex}`}
                                value={network.name || ''}
                                onChange={(e) => handleNetworkChange(vCenterIndex, clusterIndex, networkIndex, 'name', e.target.value)}
                            />
                            <label>Network Name</label>
                        </div>

                        <div className="p-float-label mb-3">
                            <InputText
                                id={`network-cidr-${vCenterIndex}-${clusterIndex}-${networkIndex}`}
                                value={network.cidr || ''}
                                onChange={(e) => handleNetworkChange(vCenterIndex, clusterIndex, networkIndex, 'cidr', e.target.value)}
                            />
                            <label>CIDR</label>
                        </div>

                        <div className="p-float-label mb-3">
                            <InputText
                                id={`network-gateway-${vCenterIndex}-${clusterIndex}-${networkIndex}`}
                                value={network.gateway || ''}
                                onChange={(e) => handleNetworkChange(vCenterIndex, clusterIndex, networkIndex, 'gateway', e.target.value)}
                            />
                            <label>Gateway</label>
                        </div>

                        <div className="p-float-label mb-3">
                            <InputNumber
                                id={`network-vlan-${vCenterIndex}-${clusterIndex}-${networkIndex}`}
                                value={network.vlan || 0}
                                onValueChange={(e) => handleNetworkChange(vCenterIndex, clusterIndex, networkIndex, 'vlan', e.value)}
                                min={0}
                                max={4095}
                            />
                            <label>VLAN ID</label>
                        </div>

                        <div className="p-float-label mb-3">
                            <Dropdown
                                id={`network-ne-${vCenterIndex}-${clusterIndex}-${networkIndex}`}
                                value={network.ne_id}
                                options={neOptions}
                                onChange={(e) => handleNetworkChange(vCenterIndex, clusterIndex, networkIndex, 'ne_id', e.value)}
                                placeholder="Select NE"
                                className="w-full"
                            />
                            <label>Network Extension Appliance</label>
                        </div>
                    </div>
                </div>
            </Card>
        );
    };

    return (
        <Menu>
            <div className="flex flex-column gap-3 py-5 px-3">
                <ConfirmDialog />
                <TabView activeIndex={activeVCenter} onTabChange={(e) => setActiveVCenter(e.index)}>
                    {(hcxProject.vcenters || []).map((vcenter, vCenterIndex) => (
                        <TabPanel key={vCenterIndex} header={vcenter.name || `vCenter ${vCenterIndex + 1}`}>
                            <TabView activeIndex={activeCluster} onTabChange={(e) => setActiveCluster(e.index)}>
                                {(vcenter.clusters || []).map((cluster, clusterIndex) => (
                                    <TabPanel key={clusterIndex} header={cluster.name || `Cluster ${clusterIndex + 1}`}>
                                        <div className="mb-3">
                                            <Button 
                                                label="Add Network" 
                                                icon="pi pi-plus" 
                                                onClick={() => addNetwork(vCenterIndex, clusterIndex)}
                                            />
                                        </div>
                                        <TabView>
                                            {(hcxProject.vcenters?.[vCenterIndex]?.clusters?.[clusterIndex]?.networks || []).map((network, networkIndex) => (
                                                <TabPanel key={networkIndex} header={network.name || `Network ${networkIndex + 1}`}>
                                                    {renderNetworkForm(vCenterIndex, clusterIndex, networkIndex)}
                                                </TabPanel>
                                            ))}
                                        </TabView>
                                    </TabPanel>
                                ))}
                            </TabView>
                        </TabPanel>
                    ))}
                </TabView>
            </div>
        </Menu>
    );
}

export default SeatDemo;
