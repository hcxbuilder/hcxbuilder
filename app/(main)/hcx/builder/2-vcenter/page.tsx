'use client';

import React, { useState, useContext } from 'react';
import Menu from '../page';
import { ProjectContext } from '@/app/project';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { TabView, TabPanel } from 'primereact/tabview';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';

interface VCenterConfig {
    name: string;
    hcx_manager: string;
    vcenter_ip: string;
    hcx_ip: string;
    hcx_network: string;
    datastore: string;
    resource_pool: string;
    cluster: string;
    sso_url: string;
    version: string;
    network_mask: string;
    gateway: string;
}

interface ValidationErrors {
    [key: string]: string;
}

function VCenterConfiguration() {
    const { hcxProject, setHcxProject } = useContext(ProjectContext);
    const [activeIndex, setActiveIndex] = useState(0);
    const [errors, setErrors] = useState<{ [key: number]: ValidationErrors }>({});

    const validateField = (field: keyof VCenterConfig, value: string): string => {
        const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        
        switch (field) {
            case 'name':
            case 'hcx_manager':
            case 'cluster':
            case 'datastore':
            case 'resource_pool':
                return value.trim() ? '' : 'This field is required';
            case 'vcenter_ip':
            case 'sso_url':
                return /^https?:\/\/.+/.test(value) ? '' : 'Must be a valid URL starting with http:// or https://';
            case 'hcx_ip':
            case 'gateway':
                return ipRegex.test(value) ? '' : 'Must be a valid IP address (e.g., 192.168.1.1)';
            case 'network_mask':
                return ipRegex.test(value) ? '' : 'Must be a valid network mask (e.g., 255.255.255.0)';
            case 'version':
                return /^\d+\.\d+(\.\d+)?$/.test(value) ? '' : 'Must be a valid version number (e.g., 8.0 or 8.0.0)';
            default:
                return '';
        }
    };

    const handleVCenterChange = (index: number, field: keyof VCenterConfig, value: string) => {
        const updatedVCenters = [...(hcxProject.vcenters || [])];
        if (!updatedVCenters[index]) {
            updatedVCenters[index] = {} as VCenterConfig;
        }
        updatedVCenters[index] = {
            ...updatedVCenters[index],
            [field]: value
        };
        
        const error = validateField(field, value);
        setErrors(prev => ({
            ...prev,
            [index]: {
                ...prev[index],
                [field]: error
            }
        }));

        setHcxProject({
            ...hcxProject,
            vcenters: updatedVCenters
        });
    };

    const renderInput = (index: number, field: keyof VCenterConfig, label: string) => (
        <div className="p-float-label mb-5">
            <InputText
                id={`${field}-${index}`}
                value={hcxProject.vcenters?.[index]?.[field] || ''}
                onChange={(e) => handleVCenterChange(index, field, e.target.value)}
                className={errors[index]?.[field] ? 'p-invalid' : ''}
                aria-describedby={`${field}-${index}-help`}
            />
            <label htmlFor={`${field}-${index}`}>{label}</label>
            {errors[index]?.[field] && (
                <small id={`${field}-${index}-help`} className="p-error block">
                    {errors[index][field]}
                </small>
            )}
        </div>
    );

    const renderVCenterForm = (index: number) => {
        return (
            <div className="grid p-fluid">
                <div className="col-12 md:col-6">
                    <h3 className="text-xl mb-4">HCX Manager VM Configuration</h3>
                    
                    <div className="mb-4">
                        <h4 className="text-lg mb-3">General Settings</h4>
                        {renderInput(index, 'hcx_manager', 'HCX Manager Name')}
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg mb-3">Network Configuration</h4>
                        {renderInput(index, 'hcx_ip', 'HCX IP')}
                        {renderInput(index, 'network_mask', 'Network Mask')}
                        {renderInput(index, 'gateway', 'Gateway')}
                        {renderInput(index, 'hcx_network', 'HCX Network')}
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg mb-3">Resource Configuration</h4>
                        {renderInput(index, 'cluster', 'Cluster')}
                        {renderInput(index, 'datastore', 'Datastore')}
                        {renderInput(index, 'resource_pool', 'Resource Pool')}
                    </div>
                </div>

                <div className="col-12 md:col-6">
                    <h3 className="text-xl mb-4">vCenter Configuration</h3>
                    {renderInput(index, 'name', 'Name')}
                    {renderInput(index, 'vcenter_ip', 'vCenter URL')}
                    {renderInput(index, 'sso_url', 'SSO URL')}
                    {renderInput(index, 'version', 'Version')}
                </div>
            </div>
        );
    };

    const addVCenter = () => {
        const updatedVCenters = [...(hcxProject.vcenters || [])];
        updatedVCenters.push({} as VCenterConfig);
        setHcxProject({
            ...hcxProject,
            vcenters: updatedVCenters
        });
    };

    const deleteVCenter = (index: number) => {
        confirmDialog({
            message: 'Are you sure you want to delete this vCenter?',
            header: 'Delete vCenter',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                const updatedVCenters = [...(hcxProject.vcenters || [])];
                updatedVCenters.splice(index, 1);
                setHcxProject({
                    ...hcxProject,
                    vcenters: updatedVCenters
                });
                if (activeIndex >= updatedVCenters.length) {
                    setActiveIndex(Math.max(0, updatedVCenters.length - 1));
                }
            }
        });
    };

    return (
        <Menu>
            <div className="flex flex-column gap-3 py-5 px-3">
                <ConfirmDialog />
                <div className="flex justify-content-end mb-3">
                    <Button 
                        label="Add vCenter" 
                        icon="pi pi-plus" 
                        onClick={addVCenter}
                    />
                </div>
                
                <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                    {(hcxProject.vcenters || []).map((vcenter, index) => (
                        <TabPanel key={index} header={vcenter.name || `vCenter ${index + 1}`}>
                            <Card>
                                <div className="flex justify-content-end mb-3">
                                    <Button 
                                        icon="pi pi-trash" 
                                        severity="danger" 
                                        onClick={() => deleteVCenter(index)}
                                    />
                                </div>
                                {renderVCenterForm(index)}
                            </Card>
                        </TabPanel>
                    ))}
                </TabView>
            </div>
        </Menu>
    );
}

export default VCenterConfiguration;