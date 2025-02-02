'use client';

import React, { useState, useContext } from 'react';
import { ProjectContext } from '@/app/project';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { DEFAULT_VALUES, VALIDATION_PATTERNS } from '@/constants';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Chips } from 'primereact/chips';

export default function HCXManagerConfiguration() {
    const { hcxProject, setHcxProject } = useContext(ProjectContext);
    const [activeIndex, setActiveIndex] = useState(0);
    const [errors, setErrors] = useState<{ [key: number]: { [key: string]: string } }>({});
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [editingVCenter, setEditingVCenter] = useState<number | null>(null);

    // Update validation field names
    const validateField = (index: number, field: string, value: string) => {
        const newErrors = { ...errors };
        if (!newErrors[index]) {
            newErrors[index] = {};
        }

        const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
        const prefixPattern = /^([0-9]|[1-2][0-9]|3[0-2])$/;

        switch (field) {
            case 'hcx_ip':
            case 'hcx_gateway':
                if (!ipPattern.test(value)) {
                    newErrors[index][field] = 'Invalid IP address format';
                } else {
                    const parts = value.split('.').map(Number);
                    const isValidIP = parts.every(part => part >= 0 && part <= 255);
                    if (!isValidIP) {
                        newErrors[index][field] = 'IP values must be between 0 and 255';
                    } else {
                        delete newErrors[index][field];
                    }
                }
                break;
            case 'hcx_network_prefix':
                if (!prefixPattern.test(value)) {
                    newErrors[index][field] = 'Network prefix must be between 0 and 32';
                } else {
                    delete newErrors[index][field];
                }
                break;
            default:
                if (!value.trim()) {
                    newErrors[index][field] = 'This field is required';
                } else {
                    delete newErrors[index][field];
                }
        }

        setErrors(newErrors);
    };

    // Update handler to directly modify vCenter properties
    const handleHCXManagerChange = (index: number, field: string, value: any) => {
        const updatedVCenters = [...(hcxProject.vcenters || [])];
        updatedVCenters[index] = {
            ...updatedVCenters[index],
            [field]: value
        };
        setHcxProject({ ...hcxProject, vcenters: updatedVCenters });
        
        if (typeof value === 'string') {
            validateField(index, field, value);
        }
    };

    // Add max servers validation
    const handleServerChange = (index: number, field: string, value: any[]) => {
        if (value.length <= 2) {
            handleHCXManagerChange(index, field, value);
        }
    };

    const handleEdit = (index: number) => {
        setEditingVCenter(index);
        setShowEditDialog(true);
    };

    const handleDialogHide = () => {
        setShowEditDialog(false);
        setEditingVCenter(null);
    };

    const checkBodyTemplate = (value: string) => {
        return value ? <i className="pi pi-check text-green-500"/> : <i className="pi pi-times text-red-500"/>;
    };

    const actionBodyTemplate = (rowData: any, rowInfo: { rowIndex: number }) => {
        return (
            <div className="flex gap-2">
                <Button 
                    icon="pi pi-pencil" 
                    rounded 
                    text 
                    severity="info"
                    onClick={() => handleEdit(rowInfo.rowIndex)}
                />
            </div>
        );
    };

    const networkInfoTemplate = (rowData: any) => {
        const hasAllNetworkInfo = rowData.hcx_network && 
                                rowData.hcx_ip && 
                                rowData.hcx_network_prefix && 
                                rowData.hcx_gateway;
        
        return (
            <div className="flex flex-column">
                <div className="flex align-items-center gap-2">
                    <span className="font-semibold">{rowData.hcx_network || ''}</span>
                    {hasAllNetworkInfo ? 
                        <i className="pi pi-check text-green-500"/> : 
                        <i className="pi pi-times text-red-500"/>}
                </div>
                {hasAllNetworkInfo && (
                    <small className="text-gray-600">
                        {rowData.hcx_ip}/{rowData.hcx_network_prefix}
                    </small>
                )}
            </div>
        );
    };

    const editDialogFooter = (
        <div className="flex justify-content-end gap-2">
            <Button label="Cancel" icon="pi pi-times" onClick={handleDialogHide} />
            <Button label="Save" icon="pi pi-check" onClick={handleDialogHide} severity="success" />
        </div>
    );

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">HCX Manager Configuration</h2>
            
           
            <DataTable 
                value={hcxProject.vcenters} 
                tableStyle={{ minWidth: '50rem' }}
                paginator 
                rows={5}
                
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
            >
                <Column field="vcenter_name" header="vCenter" />
                <Column 
                    field="hcx_manager_name" 
                    header="HCX Manager Name"
                    body={(rowData) => (
                        <div className="flex align-items-center gap-2">
                            <span>{rowData.hcx_manager_name || ''}</span>
                            {rowData.hcx_manager_name ? 
                                <i className="pi pi-check text-green-500"/> : 
                                <i className="pi pi-times text-red-500"/>}
                        </div>
                    )}
                />
                <Column 
                    field="hcx_cluster" 
                    header="Cluster"
                    body={(rowData) => (
                        <div className="flex align-items-center gap-2">
                            <span>{rowData.hcx_cluster || ''}</span>
                            {rowData.hcx_cluster ? 
                                <i className="pi pi-check text-green-500"/> : 
                                <i className="pi pi-times text-red-500"/>}
                        </div>)

                    }
                />
                <Column 
                    field="hcx_network" 
                    header="Network Configuration"
                    body={networkInfoTemplate}
                />
                <Column 
                    field="hcx_dns_servers" 
                    header="DNS"
                    body={(rowData) => checkBodyTemplate(rowData.hcx_dns_servers?.length > 0)}
                />
                <Column 
                    field="hcx_ntp_servers" 
                    header="NTP"
                    body={(rowData) => checkBodyTemplate(rowData.hcx_ntp_servers?.length > 0)}
                />
                <Column body={actionBodyTemplate} header="Actions" exportable={false} style={{ minWidth: '8rem' }}/>
            </DataTable>

            <Dialog 
                header="Edit HCX Manager Configuration" 
                visible={showEditDialog} 
                style={{ width: '80vw' }}
                onHide={handleDialogHide}
                modal
                closable
                dismissableMask
                footer={editDialogFooter}
            >
                {editingVCenter !== null && hcxProject.vcenters?.[editingVCenter] && (
                    <div className="grid">
                           <div className="col-12 md:col-12">
                            <div className="field">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor={`hcx_manager_name_${editingVCenter}`} className="font-bold">HCX Manager Name</label>
                                    <InputText
                                        id={`hcx_manager_name_${editingVCenter}`}
                                        value={hcxProject.vcenters[editingVCenter].hcx_manager_name || ''}
                                        onChange={(e) => handleHCXManagerChange(editingVCenter, 'hcx_manager_name', e.target.value)}
                                        className="w-full"
                                        placeholder="Enter HCX Manager Name"
                                        aria-describedby={`hcx_manager_name_help_${editingVCenter}`}
                                    />
                                    <small id={`hcx_manager_name_help_${editingVCenter}`} className="text-gray-600">
                                        Enter a unique name for the HCX Manager appliance
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6">
                            <div className="field">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor={`hcx_cluster_${editingVCenter}`} className="font-bold">Deployment Cluster</label>
                                    <Dropdown
                                        id={`hcx_cluster_${editingVCenter}`}
                                        value={hcxProject.vcenters[editingVCenter].hcx_cluster}
                                        options={hcxProject.vcenters[editingVCenter].vcenter_clusters}
                                        onChange={(e) => handleHCXManagerChange(editingVCenter, 'hcx_cluster', e.value)}
                                        className="w-full"
                                        placeholder="Select a cluster"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="field">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor={`hcx_datastore_${editingVCenter}`} className="font-bold">Datastore</label>
                                    <InputText
                                        id={`hcx_datastore_${editingVCenter}`}
                                        value={hcxProject.vcenters[editingVCenter].hcx_datastore || ''}
                                        onChange={(e) => handleHCXManagerChange(editingVCenter, 'hcx_datastore', e.target.value)}
                                        className="w-full"
                                        placeholder="Enter datastore name"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="field">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor={`hcx_network_${editingVCenter}`} className="font-bold">Network Name</label>
                                    <InputText
                                        id={`hcx_network_${editingVCenter}`}
                                        value={hcxProject.vcenters[editingVCenter].hcx_network || ''}
                                        onChange={(e) => handleHCXManagerChange(editingVCenter, 'hcx_network', e.target.value)}
                                        className="w-full"
                                        placeholder="VM Network"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="field">
                               
                                <div className="flex flex-column gap-2">
                                    <label htmlFor={`hcx_ip_${editingVCenter}`} className="font-bold">IP Address</label>
                                    <InputText
                                        id={`hcx_ip_${editingVCenter}`}
                                        value={hcxProject.vcenters[editingVCenter].hcx_ip || ''}
                                        onChange={(e) => handleHCXManagerChange(editingVCenter, 'hcx_ip', e.target.value)}
                                        className={errors[editingVCenter]?.ip ? 'p-invalid w-full' : 'w-full'}
                                        placeholder="192.168.1.100"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="field">
                            <div className="flex flex-column gap-2">
                                    <label htmlFor={`hcx_network_prefix_${editingVCenter}`} className="font-bold">Network Prefix</label>
                                    <InputText
                                        id={`hcx_network_prefix_${editingVCenter}`}
                                        value={hcxProject.vcenters[editingVCenter].hcx_network_prefix || ''}
                                        onChange={(e) => handleHCXManagerChange(editingVCenter, 'hcx_network_prefix', e.target.value)}
                                        className={errors[editingVCenter]?.hcx_network_prefix ? 'p-invalid w-full' : 'w-full'}
                                        placeholder="24"
                                    />
                                    {errors[editingVCenter]?.hcx_network_prefix && (
                                        <small className="p-error">{errors[editingVCenter].hcx_network_prefix}</small>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="field">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor={`hcx_gateway_${editingVCenter}`} className="font-bold">Gateway</label>
                                    <InputText
                                        id={`hcx_gateway_${editingVCenter}`}
                                        value={hcxProject.vcenters[editingVCenter].hcx_gateway || ''}
                                        onChange={(e) => handleHCXManagerChange(editingVCenter, 'hcx_gateway', e.target.value)}
                                        className={errors[editingVCenter]?.gateway ? 'p-invalid w-full' : 'w-full'}
                                        placeholder="192.168.1.1"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Remove the misplaced function definition */}
                        <div className="col-12 md:col-6">
                            <div className="field">
                                <div className="flex flex-column gap-2 p-fluid">
                                    <label htmlFor={`hcx_dns_servers_${editingVCenter}`} className="font-bold">DNS Servers (Max 2)</label>
                                    <Chips
                                        id={`hcx_dns_servers_${editingVCenter}`}
                                        value={hcxProject.vcenters[editingVCenter].hcx_dns_servers || []}
                                        onChange={(e) => handleServerChange(editingVCenter, 'hcx_dns_servers', e.value)}
                                        className={errors[editingVCenter]?.hcx_dns_servers ? 'p-invalid w-full' : 'w-full'}
                                        placeholder="Enter DNS server and press Enter (Max 2)"
                                        separator=","
                                        max={2}
                                        aria-describedby={`hcx_dns_servers_help_${editingVCenter}`}
                                    />
                                    <small id={`hcx_dns_servers_help_${editingVCenter}`} className="text-gray-600">
                                        Enter up to 2 DNS server IP addresses (e.g., 8.8.8.8)
                                    </small>
                                    {errors[editingVCenter]?.hcx_dns_servers && (
                                        <small className="p-error">{errors[editingVCenter].hcx_dns_servers}</small>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-6">
                            <div className="field">
                                <div className="flex flex-column gap-2 p-fluid">
                                    <label htmlFor={`hcx_ntp_servers_${editingVCenter}`} className="font-bold">NTP Servers (Max 2)</label>
                                    <Chips
                                        id={`hcx_ntp_servers_${editingVCenter}`}
                                        value={hcxProject.vcenters[editingVCenter].hcx_ntp_servers || []}
                                        onChange={(e) => handleServerChange(editingVCenter, 'hcx_ntp_servers', e.value)}
                                        className={errors[editingVCenter]?.hcx_ntp_servers ? 'p-invalid w-full' : 'w-full'}
                                        placeholder="Enter NTP server and press Enter (Max 2)"
                                        separator=","
                                        max={2}
                                        aria-describedby={`hcx_ntp_servers_help_${editingVCenter}`}
                                    />
                                    <small id={`hcx_ntp_servers_help_${editingVCenter}`} className="text-gray-600">
                                        Enter up to 2 NTP server addresses (e.g., pool.ntp.org)
                                    </small>
                                    {errors[editingVCenter]?.hcx_ntp_servers && (
                                        <small className="p-error">{errors[editingVCenter].hcx_ntp_servers}</small>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Dialog>
        </div>
    );
}