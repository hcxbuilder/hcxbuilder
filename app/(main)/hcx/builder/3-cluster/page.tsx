'use client';

import React, { useContext, useState } from 'react';
import Menu from '../page';
import { ProjectContext } from '@/app/project';
import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

// First, update the interface
interface ClusterConfig {
    name: string;
    storage: string;
    pool: string;
    mgmt_network: string;
    mgmt_netmask: string;
    mgmt_gateway: string;
    ix_mgm_ip: string;
    dns_servers: string[];
    ntp_servers: string[];
    vmotion_same_as_mgm: boolean;
    vmotion_network?: string;
    vmotion_netmask?: string;
    vmotion_gateway?: string;
    vmotion_ip?: string;
    replication_same_as_mgm: boolean;
    replication_network?: string;
    replication_netmask?: string;
    replication_gateway?: string;
    replication_ip?: string;
    uplink_same_as_mgm: boolean;
    uplink_network?: string;
    uplink_netmask?: string;
    uplink_gateway?: string;
    uplink_ip?: string;
    ix_ip: string;
    ne_enabled?: boolean;
    ne_ha_enabled?: boolean;
    ne_count?: number;
    ne_ips?: string[];
    ne_ha_ips?: string[];
    wo_enabled?: boolean;
}

function SeatDemo() {
    const { hcxProject, setHcxProject } = useContext(ProjectContext);
    const [activeVCenter, setActiveVCenter] = useState(0);
    const [activeCluster, setActiveCluster] = useState(0);

    const handleClusterChange = (vCenterIndex: number, clusterIndex: number, field: keyof ClusterConfig, value: any) => {
        const updatedVCenters = [...(hcxProject.vcenters || [])];
        if (!updatedVCenters[vCenterIndex].clusters) {
            updatedVCenters[vCenterIndex].clusters = [];
        }
        if (!updatedVCenters[vCenterIndex].clusters[clusterIndex]) {
            updatedVCenters[vCenterIndex].clusters[clusterIndex] = {} as ClusterConfig;
        }

        updatedVCenters[vCenterIndex].clusters[clusterIndex] = {
            ...updatedVCenters[vCenterIndex].clusters[clusterIndex],
            [field]: value
        };

        setHcxProject({
            ...hcxProject,
            vcenters: updatedVCenters
        });
    };

    const addCluster = (vCenterIndex: number) => {
        const updatedVCenters = [...(hcxProject.vcenters || [])];
        if (!updatedVCenters[vCenterIndex].clusters) {
            updatedVCenters[vCenterIndex].clusters = [];
        }
        updatedVCenters[vCenterIndex].clusters.push({} as ClusterConfig);
        setHcxProject({
            ...hcxProject,
            vcenters: updatedVCenters
        });
    };

    const deleteCluster = (vCenterIndex: number, clusterIndex: number) => {
        confirmDialog({
            message: 'Are you sure you want to delete this cluster?',
            header: 'Delete Cluster',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                const updatedVCenters = [...(hcxProject.vcenters || [])];
                updatedVCenters[vCenterIndex].clusters.splice(clusterIndex, 1);
                setHcxProject({
                    ...hcxProject,
                    vcenters: updatedVCenters
                });
                if (activeCluster >= updatedVCenters[vCenterIndex].clusters.length) {
                    setActiveCluster(Math.max(0, updatedVCenters[vCenterIndex].clusters.length - 1));
                }
            }
        });
    };
    
    const renderClusterForm = (vCenterIndex: number, clusterIndex: number) => {
        const cluster = hcxProject.vcenters?.[vCenterIndex]?.clusters?.[clusterIndex] || {};
        
        return (
            <div className="grid p-fluid">
                <div className="col-12 md:col-6">
                    <div className="p-float-label mb-3">
                        <InputText
                            id={`name-${vCenterIndex}-${clusterIndex}`}
                            value={cluster.name || ''}
                            onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'name', e.target.value)}
                        />
                        <label>Cluster Name</label>
                    </div>

                    <div className="p-float-label mb-3">
                        <InputText
                            id={`storage-${vCenterIndex}-${clusterIndex}`}
                            value={cluster.storage || ''}
                            onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'storage', e.target.value)}
                        />
                        <label>Storage</label>
                    </div>

                    <div className="p-float-label mb-3">
                        <InputText
                            id={`pool-${vCenterIndex}-${clusterIndex}`}
                            value={cluster.pool || ''}
                            onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'pool', e.target.value)}
                        />
                        <label>Pool</label>
                    </div>

                  
                                    <div className="p-float-label mb-3">
                                        <InputText
                                            id={`mgmt-network-${vCenterIndex}-${clusterIndex}`}
                                            value={cluster.mgmt_network || ''}
                                            onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'mgmt_network', e.target.value)}
                                        />
                                        <label>Management Network</label>
                                    </div>

                                    <div className="p-float-label mb-3">
                                        <InputText
                                            id={`mgmt-netmask-${vCenterIndex}-${clusterIndex}`}
                                            value={cluster.mgmt_netmask || ''}
                                            onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'mgmt_netmask', e.target.value)}
                                        />
                                        <label>Management Netmask</label>
                                    </div>

                                    <div className="p-float-label mb-3">
                                        <InputText
                                            id={`mgmt-gateway-${vCenterIndex}-${clusterIndex}`}
                                            value={cluster.mgmt_gateway || ''}
                                            onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'mgmt_gateway', e.target.value)}
                                        />
                                        <label>Management Gateway</label>
                                    </div>

                    <div className="p-float-label mb-3">
                        <InputText
                            id={`ix-mgm-ip-${vCenterIndex}-${clusterIndex}`}
                            value={cluster.ix_mgm_ip || ''}
                            onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'ix_mgm_ip', e.target.value)}
                        />
                        <label>IX MGM IP</label>
                    </div>

                    <div className="p-float-label mb-3">
                        <InputText
                            id={`dns-servers-${vCenterIndex}-${clusterIndex}`}
                            value={(cluster.dns_servers || []).join(',')}
                            onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'dns_servers', 
                                e.target.value.split(',').map(s => s.trim()).filter(s => s)
                            )}
                            placeholder="comma-separated DNS servers"
                        />
                        <label>DNS Servers</label>
                    </div>

                    <div className="p-float-label mb-3">
                        <InputText
                            id={`ntp-servers-${vCenterIndex}-${clusterIndex}`}
                            value={(cluster.ntp_servers || []).join(',')}
                            onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'ntp_servers', 
                                e.target.value.split(',').map(s => s.trim()).filter(s => s)
                            )}
                            placeholder="comma-separated NTP servers"
                        />
                        <label>NTP Servers</label>
                    </div>

                    <div className="field-checkbox mb-3">
                        <Checkbox
                            inputId={`vmotion-same-${vCenterIndex}-${clusterIndex}`}
                            checked={cluster.vmotion_same_as_mgm || false}
                            onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'vmotion_same_as_mgm', e.checked)}
                        />
                        <label htmlFor={`vmotion-same-${vCenterIndex}-${clusterIndex}`} className="ml-2">vMotion same as MGMT</label>
                    </div>

                    {!cluster.vmotion_same_as_mgm && (
                        <>
                            <div className="p-float-label mb-3">
                                <InputText
                                    id={`vmotion-network-${vCenterIndex}-${clusterIndex}`}
                                    value={cluster.vmotion_network || ''}
                                    onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'vmotion_network', e.target.value)}
                                />
                                <label>vMotion Network</label>
                            </div>
                            <div className="p-float-label mb-3">
                                <InputText
                                    id={`vmotion-netmask-${vCenterIndex}-${clusterIndex}`}
                                    value={cluster.vmotion_netmask || ''}
                                    onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'vmotion_netmask', e.target.value)}
                                />
                                <label>vMotion Netmask</label>
                            </div>
                            <div className="p-float-label mb-3">
                                <InputText
                                    id={`vmotion-gateway-${vCenterIndex}-${clusterIndex}`}
                                    value={cluster.vmotion_gateway || ''}
                                    onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'vmotion_gateway', e.target.value)}
                                />
                                <label>vMotion Gateway</label>
                            </div>
                            <div className="p-float-label mb-3">
                                <InputText
                                    id={`vmotion-ip-${vCenterIndex}-${clusterIndex}`}
                                    value={cluster.vmotion_ip || ''}
                                    onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'vmotion_ip', e.target.value)}
                                />
                                <label>vMotion IP</label>
                            </div>
                        </>
                    )}

                    <div className="field-checkbox mb-3">
                        <Checkbox
                            inputId={`replication-same-${vCenterIndex}-${clusterIndex}`}
                            checked={cluster.replication_same_as_mgm || false}
                            onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'replication_same_as_mgm', e.checked)}
                        />
                        <label htmlFor={`replication-same-${vCenterIndex}-${clusterIndex}`} className="ml-2">Replication same as MGMT</label>
                    </div>

                    {!cluster.replication_same_as_mgm && (
                        <>
                            <div className="p-float-label mb-3">
                                <InputText
                                    id={`replication-network-${vCenterIndex}-${clusterIndex}`}
                                    value={cluster.replication_network || ''}
                                    onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'replication_network', e.target.value)}
                                />
                                <label>Replication Network</label>
                            </div>
                            <div className="p-float-label mb-3">
                                <InputText
                                    id={`replication-netmask-${vCenterIndex}-${clusterIndex}`}
                                    value={cluster.replication_netmask || ''}
                                    onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'replication_netmask', e.target.value)}
                                />
                                <label>Replication Netmask</label>
                            </div>
                            <div className="p-float-label mb-3">
                                <InputText
                                    id={`replication-gateway-${vCenterIndex}-${clusterIndex}`}
                                    value={cluster.replication_gateway || ''}
                                    onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'replication_gateway', e.target.value)}
                                />
                                <label>Replication Gateway</label>
                            </div>
                            <div className="p-float-label mb-3">
                                <InputText
                                    id={`replication-ip-${vCenterIndex}-${clusterIndex}`}
                                    value={cluster.replication_ip || ''}
                                    onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'replication_ip', e.target.value)}
                                />
                                <label>Replication IP</label>
                            </div>
                        </>
                    )}

                    <div className="field-checkbox mb-3">
                        <Checkbox
                            inputId={`uplink-same-${vCenterIndex}-${clusterIndex}`}
                            checked={cluster.uplink_same_as_mgm || false}
                            onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'uplink_same_as_mgm', e.checked)}
                        />
                        <label htmlFor={`uplink-same-${vCenterIndex}-${clusterIndex}`} className="ml-2">Uplink same as MGMT</label>
                    </div>

                    {!cluster.uplink_same_as_mgm && (
                        <>
                            <div className="p-float-label mb-3">
                                <InputText
                                    id={`uplink-network-${vCenterIndex}-${clusterIndex}`}
                                    value={cluster.uplink_network || ''}
                                    onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'uplink_network', e.target.value)}
                                />
                                <label>Uplink Network</label>
                            </div>
                            <div className="p-float-label mb-3">
                                <InputText
                                    id={`uplink-netmask-${vCenterIndex}-${clusterIndex}`}
                                    value={cluster.uplink_netmask || ''}
                                    onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'uplink_netmask', e.target.value)}
                                />
                                <label>Uplink Netmask</label>
                            </div>
                            <div className="p-float-label mb-3">
                                <InputText
                                    id={`uplink-gateway-${vCenterIndex}-${clusterIndex}`}
                                    value={cluster.uplink_gateway || ''}
                                    onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'uplink_gateway', e.target.value)}
                                />
                                <label>Uplink Gateway</label>
                            </div>
                            <div className="p-float-label mb-3">
                                <InputText
                                    id={`uplink-ip-${vCenterIndex}-${clusterIndex}`}
                                    value={cluster.uplink_ip || ''}
                                    onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'uplink_ip', e.target.value)}
                                />
                                <label>Uplink IP</label>
                            </div>
                        </>
                    )}
                </div>

                <div className="col-12 md:col-6">
                    <div className="field-checkbox mb-3">
                        <Checkbox
                            inputId={`ne-enabled-${vCenterIndex}-${clusterIndex}`}
                            checked={cluster.ne_enabled || false}
                            onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'ne_enabled', e.checked)}
                        />
                        <label htmlFor={`ne-enabled-${vCenterIndex}-${clusterIndex}`} className="ml-2">Enable Network Extension</label>
                    </div>

                    {cluster.ne_enabled && (
                        <>
                            <div className="field-checkbox mb-3">
                                <Checkbox
                                    inputId={`ne-ha-enabled-${vCenterIndex}-${clusterIndex}`}
                                    checked={cluster.ne_ha_enabled || false}
                                    onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'ne_ha_enabled', e.checked)}
                                />
                                <label htmlFor={`ne-ha-enabled-${vCenterIndex}-${clusterIndex}`} className="ml-2">Enable HA for NE</label>
                            </div>

                            <div className="p-float-label mb-3">
                                <InputNumber
                                    id={`ne-count-${vCenterIndex}-${clusterIndex}`}
                                    value={cluster.ne_count || 0}
                                    onValueChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'ne_count', e.value)}
                                    min={0}
                                />
                                <label>Number of NE</label>
                            </div>

                            {Array.from({ length: cluster.ne_count || 0 }).map((_, neIndex) => (
                                <div key={neIndex} className="grid p-fluid mb-3">
                                    <div className={cluster.ne_ha_enabled ? "col-6" : "col-12"}>
                                        <div className="p-float-label">
                                            <InputText
                                                id={`ne-ip-${vCenterIndex}-${clusterIndex}-${neIndex}`}
                                                value={cluster.ne_ips?.[neIndex] || ''}
                                                onChange={(e) => {
                                                    const newIps = [...(cluster.ne_ips || [])];
                                                    newIps[neIndex] = e.target.value;
                                                    handleClusterChange(vCenterIndex, clusterIndex, 'ne_ips', newIps);
                                                }}
                                            />
                                            <label>NE IP {neIndex + 1}</label>
                                        </div>
                                    </div>
                                    {cluster.ne_ha_enabled && (
                                        <div className="col-6">
                                            <div className="p-float-label">
                                                <InputText
                                                    id={`ne-ha-ip-${vCenterIndex}-${clusterIndex}-${neIndex}`}
                                                    value={cluster.ne_ha_ips?.[neIndex] || ''}
                                                    onChange={(e) => {
                                                        const newHaIps = [...(cluster.ne_ha_ips || [])];
                                                        newHaIps[neIndex] = e.target.value;
                                                        handleClusterChange(vCenterIndex, clusterIndex, 'ne_ha_ips', newHaIps);
                                                    }}
                                                />
                                                <label>NE HA IP {neIndex + 1}</label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </>
                    )}
                    
                    <div className="field-checkbox mb-3">
                        <Checkbox
                            inputId={`wo-enabled-${vCenterIndex}-${clusterIndex}`}
                            checked={cluster.wo_enabled || false}
                            onChange={(e) => handleClusterChange(vCenterIndex, clusterIndex, 'wo_enabled', e.checked)}
                        />
                        <label htmlFor={`wo-enabled-${vCenterIndex}-${clusterIndex}`} className="ml-2">Enable WAN Optimization</label>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Menu>
            <div className="flex flex-column gap-3 py-5 px-3">
                <ConfirmDialog />
                <TabView activeIndex={activeVCenter} onTabChange={(e) => setActiveVCenter(e.index)}>
                    {(hcxProject.vcenters || []).map((vcenter, vCenterIndex) => (
                        <TabPanel key={vCenterIndex} header={vcenter.name || `vCenter ${vCenterIndex + 1}`}>
                            <div className="mb-3">
                                <Button 
                                    label="Add Cluster" 
                                    icon="pi pi-plus" 
                                    onClick={() => addCluster(vCenterIndex)}
                                />
                            </div>
                            <TabView activeIndex={activeCluster} onTabChange={(e) => setActiveCluster(e.index)}>
                                {(vcenter.clusters || []).map((cluster, clusterIndex) => (
                                    <TabPanel key={clusterIndex} header={cluster.name || `Cluster ${clusterIndex + 1}`}>
                                        <Card>
                                            <div className="flex justify-content-end mb-3">
                                                <Button 
                                                    icon="pi pi-trash" 
                                                    severity="danger" 
                                                    onClick={() => deleteCluster(vCenterIndex, clusterIndex)}
                                                />
                                            </div>
                                            {renderClusterForm(vCenterIndex, clusterIndex)}
                                        </Card>
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
