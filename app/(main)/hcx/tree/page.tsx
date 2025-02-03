'use client';
import React, { useState, useContext, useEffect, useMemo } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { TreeNode } from 'primereact/treenode';
import { ProjectContext } from '@/app/project';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import html2canvas from 'html2canvas';

export default function ColoredDemo() {
    const { hcxProject } = useContext(ProjectContext);
    const [data, setData] = useState<TreeNode[]>([]);
    const [showNetworks, setShowNetworks] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);
    const [isExporting, setIsExporting] = useState(false);

    const nodeTemplate = (node: TreeNode) => {
        return (
            <div 
                className="flex flex-column cursor-pointer" 
                onClick={() => setSelectedNode(node)}
                onKeyPress={(e) => e.key === 'Enter' && setSelectedNode(node)}
                role="button"
                tabIndex={0}
                aria-label={`${node.data.type}: ${node.data.name}`}
            >
                <div className="flex flex-column align-items-center">
                    {node.data.images && (
                        <div className="flex gap-2 mb-2">
                            {node.data.images.map((img: string, index: number) => (
                                <img key={index} src={img} alt="" className="w-2rem h-2rem" />
                            ))}
                        </div>
                    )}
                    <span className="font-bold mb-2">{node.data.name}</span>
                    <span className="text-sm mb-1">{node.data.type}</span>
                    {node.data.details && (
                        <span className="text-sm">{node.data.details}</span>
                    )}
                </div>
            </div>
        );
    };

    useEffect(() => {
        if (!hcxProject) return;
        
        const buildTree = () => {
            const projectNode: TreeNode[] = [{
                expanded: true,
                type: 'project',
                className: 'bg-teal-300 text-white',
                style: { borderRadius: '12px' },
                data: {
                    name: hcxProject.name || 'Project',
                    type: 'Project',
                    details: `vCenters: ${hcxProject.vcenters?.length || 0}`,
                    images: ['/images/vcf.png']
                },
                children: hcxProject.vcenters?.map((vcenter) => ({
                    expanded: true,
                    type: 'vcenter',
                    className: 'bg-purple-500 text-white',
                    style: { borderRadius: '12px' },
                    data: {
                        name: vcenter.name,
                        type: 'vCenter',
                        details: `IP: ${vcenter.vcenter_ip}`,
                        images: ['/images/vcenter.png', '/images/hcx.png']
                    },
                    children: vcenter.serviceMeshes?.map((mesh) => ({
                        expanded: true,
                        type: 'mesh',
                        className: 'bg-indigo-400 text-white',
                        style: { borderRadius: '12px' },
                        data: {
                            name: mesh.name || 'Service Mesh',
                            type: 'Service Mesh',
                            details: `HCX-WO: ${mesh.wo_enabled ? 'Enabled' : 'Disabled'} | HCX-NE: ${mesh.ne_enabled ? 'Enabled' : 'Disabled'}`,
                            images: [
                                '/images/ix.png',
                                ...(mesh.wo_enabled ? ['/images/wo.png'] : []),
                                ...(mesh.distributed_switches?.length ? ['/images/ne.png'] : [])
                            ]
                        },
                        children: [
                            {
                                expanded: true,
                                type: 'services',
                                className: 'bg-orange-400 text-white',
                                style: { borderRadius: '12px' },
                                data: {
                                    name: 'Service Clusters',
                                    type: 'Clusters',
                                    details: mesh.clusters_services?.join(', ') || 'None',
                                    images: ['/images/cluster.png']
                                }
                            },
                            {
                                expanded: true,
                                type: 'deployments',
                                className: 'bg-orange-400 text-white',
                                style: { borderRadius: '12px' },
                                data: {
                                    name: 'Deployment Clusters',
                                    type: 'Clusters',
                                    details: mesh.clusters_deployments?.join(', ') || 'None',
                                    images: ['/images/cluster.png']
                                }
                            },
                            ...(mesh.distributed_switches?.map((ds) => ({
                                expanded: true,
                                type: 'switch',
                                className: 'bg-yellow-500 text-white',
                                style: { borderRadius: '12px' },
                                data: {
                                    name: ds.name,
                                    type: 'Distributed Switch',
                                    details: `NE Count: ${ds.ne_count} | HA Count: ${ds.ne_ha_count}`,
                                    images: ['/images/vds.png']
                                },
                                children: Array.from({ length: ds.ne_count }).map((_, neIndex) => ({
                                    expanded: true,
                                    type: 'ne',
                                    className: 'bg-blue-500 text-white',
                                    style: { borderRadius: '12px' },
                                    data: {
                                        name: `NE ${neIndex + 1}`,
                                        type: 'Network Extension',
                                        details: ds.ne_ha_count > neIndex ? 'HA Enabled' : 'Standalone',
                                        images: ['/images/ne.png']
                                    },
                                    children: showNetworks ? ds.extended_network?.filter(network => 
                                        network && network.ne_id === `ne${neIndex + 1}`
                                    ).map(network => ({
                                        expanded: true,
                                        type: 'network',
                                        className: 'bg-green-500 text-white',
                                        style: { borderRadius: '12px' },
                                        data: {
                                            name: network.name,
                                            type: 'Network',
                                            details: `${network.network}/${network.prefix} | VLAN: ${network.vlan_id || 'N/A'}`,
                                            images: ['/images/network.png']
                                        }
                                    })) || [] : []
                                }))
                            })) || [])
                        ]
                    })) || []
                }))
            }];

            setData(projectNode);
        };

        buildTree();
    }, [hcxProject, showNetworks]);

    const exportToImage = async () => {
        setIsExporting(true);
        try {
            const element = document.querySelector('.p-organizationchart');
            if (!element) {
                throw new Error('Chart element not found');
            }
    
            const canvas = await html2canvas(element, {
                scale: 2,
                backgroundColor: '#ffffff',
                logging: false,
                useCORS: true,
                allowTaint: true
            });
            
            const link = document.createElement('a');
            link.download = `${hcxProject?.name || 'hcx-project'}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (error) {
            console.error('Failed to export image:', error);
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="flex flex-column gap-3">
            <div className="card">
                <div className="flex align-items-center gap-2 mb-3">
                    <Checkbox 
                        inputId="show-networks" 
                        checked={showNetworks} 
                        onChange={e => setShowNetworks(e.checked)}
                    />
                    <label htmlFor="show-networks" className="ml-2">Show Networks</label>
                    <div className="ml-auto">
                        <Button 
                            label="Export PNG" 
                            icon="pi pi-image" 
                            onClick={exportToImage}
                            loading={isExporting}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    {data.length > 0 && (
                        <OrganizationChart 
                            value={data}
                            nodeTemplate={nodeTemplate}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}