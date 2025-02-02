'use client';

import React, { useState, useContext, useEffect } from 'react';
import { ProjectContext } from '@/app/project';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { TabView, TabPanel } from 'primereact/tabview';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { DEFAULT_VALUES, VALIDATION_PATTERNS } from '@/constants';
import { Chips } from 'primereact/chips';
import { Dialog } from 'primereact/dialog';
import { Checkbox } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputNumber } from 'primereact/inputnumber';

export default function VCenterConfiguration() {
    const { hcxProject, setHcxProject } = useContext(ProjectContext);
    const [errors, setErrors] = useState<{ [key: number]: { [key: string]: string } }>({});
    const [showInfoDialog, setShowInfoDialog] = useState(true);
    const [dontShowAgain, setDontShowAgain] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [editingVCenter, setEditingVCenter] = useState<number | null>(null);

    const validateField = (index: number, field: string, value: string) => {
        const newErrors = { ...errors };
        if (!newErrors[index]) {
            newErrors[index] = {};
        }

        switch (field) {
            case 'vcenter_url':
            case 'vcenter_sso_url':
                if (!VALIDATION_PATTERNS.URL.test(value)) {
                    newErrors[index][field] = 'Invalid URL format';
                } else {
                    delete newErrors[index][field];
                }
                break;
            case 'vcenter_version':
                if (!VALIDATION_PATTERNS.VERSION.test(value)) {
                    newErrors[index][field] = 'Invalid version format (e.g., 8.0 or 8.0.0)';
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

    const handleVCenterChange = (index: number, field: string, value: any) => {
        const updatedVCenters = [...(hcxProject.vcenters || [])];
        if (!updatedVCenters[index]) {
            updatedVCenters[index] = { ...DEFAULT_VALUES.VCENTER };
        }
        updatedVCenters[index] = {
            ...updatedVCenters[index],
            [field]: value
        };
        setHcxProject({ ...hcxProject, vcenters: updatedVCenters });
        
        if (typeof value === 'string') {
            validateField(index, field, value);
        }
    };

    const checkBodyTemplate = (value: string) => {
        return value ? <i className="pi pi-check text-green-500"/> : <i className="pi pi-times text-red-500"/>;
    };

    const addVCenter = () => {
        const newVCenter = { ...DEFAULT_VALUES.VCENTER };
        const updatedVCenters = [...(hcxProject.vcenters || []), newVCenter];
        setHcxProject({ ...hcxProject, vcenters: updatedVCenters });
        handleEdit(updatedVCenters.length - 1);
    };

    const handleEdit = (index: number) => {
        setEditingVCenter(index);
        setShowEditDialog(true);
    };

    useEffect(() => {
        const isHidden = localStorage.getItem('vcenter-info-hidden') === 'true';
        setShowInfoDialog(!isHidden);
    }, []);

 

    const handleInfoDialogHide = () => {
        // if (dontShowAgain) {
        //     localStorage.setItem('vcenter-info-hidden', 'true');
        // }
        setShowInfoDialog(false);
    };

 
    interface VCenter {
        vcenter_name: string;
        vcenter_url: string;
        vcenter_sso_url: string;
        vcenter_version: string;
        vcenter_clusters: string[];
    }
    
        const actionBodyTemplate = (rowData: VCenter, rowInfo: { rowIndex: number }) => {
            return (
                <div className="flex gap-2">
                    <Button 
                        icon="pi pi-pencil" 
                        rounded 
                        text 
                        severity="info"
                        onClick={() => handleEdit(rowInfo.rowIndex)}
                    />
                    <Button 
                        icon="pi pi-trash" 
                        rounded 
                        text 
                        severity="danger"
                        onClick={() => removeVCenter(rowInfo.rowIndex)}
                    />
                </div>
            );
        };
    
        const removeVCenter = (index: number) => {
            confirmDialog({
                message: 'Are you sure you want to remove this vCenter configuration?',
                header: 'Confirm Removal',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    const updatedVCenters = hcxProject.vcenters?.filter((_, i) => i !== index);
                    setHcxProject({ ...hcxProject, vcenters: updatedVCenters });
                }
            });
        };
    
        const handleDialogHide = () => {
            if (editingVCenter !== null) {
                const currentVCenter = hcxProject.vcenters?.[editingVCenter];
                if (!currentVCenter?.vcenter_name) {
                    const updatedVCenters = hcxProject.vcenters?.filter((_, i) => i !== editingVCenter);
                    setHcxProject({ ...hcxProject, vcenters: updatedVCenters });
                }
            }
            setShowEditDialog(false);
            setEditingVCenter(null);
        };
    
        // Add footer to both dialogs
         
        
            const editDialogFooter = (
                <div className="flex justify-content-end gap-2">
                    <Button label="Cancel" icon="pi pi-times" onClick={handleDialogHide} />
                    <Button label="Save" icon="pi pi-check" onClick={handleDialogHide} severity="success" />
                </div>
            );
        
            return (
                <div>
                 
                    <ConfirmDialog />
                    <div className="flex justify-content-between align-items-center mb-3">
                        <div className="flex align-items-center gap-2">
                            <h2 className="text-2xl font-bold m-0">vCenter Configuration</h2>
                            <Button 
                                icon="pi pi-question-circle"
                                onClick={() => setShowInfoDialog(true)}
                                text
                                rounded
                                tooltip="Show configuration help"
                            />
                        </div>
                        <Button icon="pi pi-plus" label="Add vCenter" onClick={addVCenter} severity="success" rounded />
                    </div>
    
                    <DataTable 
                        value={hcxProject.vcenters} 
                        tableStyle={{ minWidth: '50rem' }}
                        paginator 
                        rows={5}
                        rowsPerPageOptions={[5]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
                        currentPageReportTemplate="{first} to {last} of {totalRecords}"
                    >
                        <Column field="vcenter_name" header="Name" />
                        <Column 
                            field="vcenter_url" 
                            header="URL Status" 
                            body={(rowData) => checkBodyTemplate(rowData.vcenter_url)}
                        />
                        <Column 
                            field="vcenter_sso_url" 
                            header="SSO Status"
                            body={(rowData) => checkBodyTemplate(rowData.vcenter_sso_url)}
                        />
                        <Column field="vcenter_version" header="vSphere Version" />
                        <Column 
                            field="vcenter_clusters" 
                            header="Configured Clusters"
                            body={(rowData) => rowData.vcenter_clusters?.length || 0}
                        />
                        <Column body={actionBodyTemplate} header="Actions" exportable={false} style={{ minWidth: '12rem' }}/>
                    </DataTable>
                    
                    <Dialog 
                        header="Edit vCenter Configuration" 
                        visible={showEditDialog} 
                        style={{ width: '50vw' }}
                        onHide={handleDialogHide}
                        modal
                        closable
                        dismissableMask
                        footer={editDialogFooter}
                    >
                        {editingVCenter !== null && hcxProject.vcenters?.[editingVCenter] && (
                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <div className="field">
                                        <div className="flex flex-column gap-2">
                                            <label htmlFor="vcenter_name" className="font-bold">vCenter Name</label>
                                            <InputText
                                                id="vcenter_name"
                                                value={hcxProject.vcenters[editingVCenter]?.vcenter_name || ''}
                                                onChange={(e) => handleVCenterChange(editingVCenter, 'vcenter_name', e.target.value)}
                                                className={errors[editingVCenter]?.vcenter_name ? 'p-invalid w-full' : 'w-full'}
                                            />
                                            {errors[editingVCenter]?.vcenter_name && (
                                                <small className="p-error">{errors[editingVCenter].vcenter_name}</small>
                                            )}
                                        </div>
                                    </div>
                                </div>
        
                                <div className="col-12 md:col-6">
                                    <div className="field">
                                        <div className="flex flex-column gap-2">
                                            <label htmlFor="vcenter_url" className="font-bold">vCenter URL</label>
                                            <InputText
                                                id="vcenter_url"
                                                value={hcxProject.vcenters[editingVCenter]?.vcenter_url || ''}
                                                onChange={(e) => handleVCenterChange(editingVCenter, 'vcenter_url', e.target.value)}
                                                className={errors[editingVCenter]?.vcenter_url ? 'p-invalid w-full' : 'w-full'}
                                                placeholder="https://vcenter.example.com"
                                            />
                                            {errors[editingVCenter]?.vcenter_url && (
                                                <small className="p-error">{errors[editingVCenter].vcenter_url}</small>
                                            )}
                                        </div>
                                    </div>
                                </div>
        
                                <div className="col-12 md:col-6">
                                    <div className="field">
                                        <div className="flex flex-column gap-2">
                                            <label htmlFor="vcenter_sso_url" className="font-bold">SSO URL</label>
                                            <InputText
                                                id="vcenter_sso_url"
                                                value={hcxProject.vcenters[editingVCenter]?.vcenter_sso_url || ''}
                                                onChange={(e) => handleVCenterChange(editingVCenter, 'vcenter_sso_url', e.target.value)}
                                                className={errors[editingVCenter]?.vcenter_sso_url ? 'p-invalid w-full' : 'w-full'}
                                                placeholder="https://sso.example.com"
                                            />
                                            {errors[editingVCenter]?.vcenter_sso_url && (
                                                <small className="p-error">{errors[editingVCenter].vcenter_sso_url}</small>
                                            )}
                                        </div>
                                    </div>
                                </div>
        
                                <div className="col-12 md:col-6">
                                    <div className="field">
                                        <div className="flex flex-column gap-2">
                                            <label htmlFor="vcenter_version" className="font-bold">Version</label>
                                            <InputText
                                                id="vcenter_version"
                                                value={hcxProject.vcenters[editingVCenter]?.vcenter_version || ''}
                                                onChange={(e) => handleVCenterChange(editingVCenter, 'vcenter_version', e.target.value)}
                                                className={errors[editingVCenter]?.vcenter_version ? 'p-invalid w-full' : 'w-full'}
                                                placeholder="8.0.0"
                                            />
                                            {errors[editingVCenter]?.vcenter_version && (
                                                <small className="p-error">{errors[editingVCenter].vcenter_version}</small>
                                            )}
                                        </div>
                                    </div>
                                </div>
        
                                <div className="col-12">
                                    <div className="field">
                                        <div className="flex flex-column gap-2 p-fluid">
                                            <label htmlFor="vcenter_clusters" className="font-bold">Clusters</label>
                                            <Chips
                                                id="vcenter_clusters"
                                                value={hcxProject.vcenters[editingVCenter]?.vcenter_clusters || []}
                                                onChange={(e) => handleVCenterChange(editingVCenter, 'vcenter_clusters', e.value)}
                                                className="w-full"
                                                placeholder="Type and press Enter to add clusters"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Dialog>
                </div>
            );
} // Only one closing brace for the component
