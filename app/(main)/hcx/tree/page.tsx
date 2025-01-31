'use client';
import React, { useState, useContext, useEffect, useMemo } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { TreeNode } from 'primereact/treenode';
import { ProjectContext } from '@/app/project';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// Add state for network visibility
export default function ColoredDemo() {
    const { hcxProject } = useContext(ProjectContext);
    const [data, setData] = useState<TreeNode[]>([]);
    const [showNetworks, setShowNetworks] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);
    const [isExporting, setIsExporting] = useState(false);

    useEffect(() => {
        if (!hcxProject) return;
        
        console.log('Full Project:', hcxProject);
        
        // Initialize vcenters if it doesn't exist
        if (!hcxProject.vcenters) {
            hcxProject.vcenters = [];
        }
        
        const buildTree = () => {
            const projectNode: TreeNode[] = [{
                expanded: true,
                type: 'project',
                className: 'bg-indigo-500 text-white',
                style: { borderRadius: '12px' },
                data: {
                    name: hcxProject.name || 'Project',
                    type: 'Project',
                    details: `vCenters: ${hcxProject.vcenters.length}`
                },
                children: hcxProject.vcenters.map((vcenter, index) => {
                    return {
                        expanded: true,
                        type: 'vcenter',
                        className: 'bg-purple-500 text-white',
                        style: { borderRadius: '12px' },
                        data: {
                            name: vcenter.name || `vCenter ${index + 1}`,
                            type: 'vCenter',
                            details: `${vcenter.vcenter_ip || 'No IP'}`,
                            images: ['/images/vcenter.png', '/images/hcx.png']
                        },
                        children: Array.isArray(vcenter.clusters) ? vcenter.clusters.map((cluster, clusterIndex) => {
                            return {
                                expanded: true,
                                type: 'cluster',
                                className: 'bg-teal-500 text-white',
                                style: { borderRadius: '12px' },
                                data: {
                                    name: cluster.name || `Cluster ${clusterIndex + 1}`,
                                    type: 'Cluster',
                                    details: `NE: ${cluster.ne_count || 0} ${cluster.wo_enabled ? '| WO Enabled' : ''}`,
                                    images: [
                                        '/images/ix.png',
                                        ...(cluster.wo_enabled ? ['/images/wo.png'] : []),
                                        ...(cluster.ne_count > 0 ? ['/images/ne.png'] : [])
                                    ]
                                },
                                children: cluster.ne_count ? Array.from({ length: cluster.ne_count }).map((_, neIndex) => {
                                    const neIp = cluster.ne_ips?.[neIndex];
                                    const neHaIp = cluster.ne_ha_enabled ? cluster.ne_ha_ips?.[neIndex] : null;
                                    return {
                                        expanded: true,
                                        type: 'ne',
                                        className: 'bg-blue-500 text-white',
                                        style: { borderRadius: '12px' },
                                        data: {
                                            name: `NE ${neIndex + 1}`,
                                            type: 'Network Extension',
                                            details: cluster.ne_ha_enabled 
                                                ? `Primary: ${neIp || 'No IP'} | HA: ${neHaIp || 'No IP'}`
                                                : neIp || 'No IP',
                                            images: ['/images/ne.png']
                                        },
                                        children: Array.isArray(cluster.networks) 
                                            ? cluster.networks
                                                .filter(network => network.ne_id === neIp)
                                                .map((network, networkIndex) => ({
                                                    expanded: true,
                                                    type: 'network',
                                                    className: 'bg-green-500 text-white',
                                                    style: { borderRadius: '12px' },
                                                    data: {
                                                        name: network.name || `Network ${networkIndex + 1}`,
                                                        type: 'Network',
                                                        details: `CIDR: ${network.cidr || 'N/A'}, VLAN: ${network.vlan || 'N/A'}`,
                                                        images: ['/images/network.png']
                                                    }
                                                }))
                                            : []
                                    };
                                }) : []
                            };
                        }) : []
                    };
                })
            }];
        
            console.log('Tree Data:', JSON.stringify(projectNode, null, 2));
            setData(projectNode);
        };

        buildTree();
    }, [hcxProject]);

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

    const exportToImage = async () => {
        setIsExporting(true);
        try {
            const element = document.querySelector('.p-organizationchart');
            if (!element) {
                throw new Error('Chart element not found');
            }
    
            const canvas = await html2canvas(element, {
                scale: 2,
                backgroundColor: '#ffffff'
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

    const exportToPDF = async () => {
        try {
            const chartElement = document.querySelector('.p-organizationchart');
            if (!chartElement) {
                throw new Error('Chart element not found');
            }
    
            // Ensure detailed information is shown
            setShowDetails(true);

            // Change to portrait orientation for all pages
            const pdf = new jsPDF('p', 'px', 'a4');
            const portraitWidth = pdf.internal.pageSize.getWidth();
            const portraitHeight = pdf.internal.pageSize.getHeight();
            
            // Store original network state
            const originalNetworkState = showNetworks;
            
            // First page: Chart without networks (portrait)
            setShowNetworks(false);
            await new Promise(resolve => setTimeout(resolve, 500));
            const chartCanvas1 = await html2canvas(chartElement, {
                scale: 2,
                backgroundColor: '#ffffff'
            });
            const scaleFactor1 = Math.min(portraitWidth / chartCanvas1.width, portraitHeight / chartCanvas1.height);
            const chartWidth1 = chartCanvas1.width * scaleFactor1;
            const chartHeight1 = chartCanvas1.height * scaleFactor1;
            const chartX1 = (portraitWidth - chartWidth1) / 2;
            const chartY1 = (portraitHeight - chartHeight1) / 2;
            pdf.addImage(chartCanvas1.toDataURL('image/png'), 'PNG', chartX1, chartY1, chartWidth1, chartHeight1);
            
            // Add second page in portrait
            pdf.addPage();
            
            // Second page: Chart with networks
            setShowNetworks(true);
            await new Promise(resolve => setTimeout(resolve, 500));
            const chartCanvas2 = await html2canvas(chartElement, {
                scale: 2,
                backgroundColor: '#ffffff'
            });
            const scaleFactor2 = Math.min(portraitWidth / chartCanvas2.width, portraitHeight / chartCanvas2.height);
            const chartWidth2 = chartCanvas2.width * scaleFactor2;
            const chartHeight2 = chartCanvas2.height * scaleFactor2;
            const chartX2 = (portraitWidth - chartWidth2) / 2;
            const chartY2 = (portraitHeight - chartHeight2) / 2;
            pdf.addImage(chartCanvas2.toDataURL('image/png'), 'PNG', chartX2, chartY2, chartWidth2, chartHeight2);
            
            // Add detailed information as text
            if (showDetails && hcxProject?.vcenters) {
                pdf.addPage();
                let y = 30;
                const lineHeight = 20;
                const margin = 20;
                
                hcxProject.vcenters.forEach((vcenter, vIndex) => {
                    if (y > portraitHeight - 60) {
                        pdf.addPage();
                        y = 30;
                    }
                    
                    pdf.setFontSize(16);
                    pdf.text(`vCenter: ${vcenter.name}`, margin, y);
                    y += lineHeight;
                    
                    pdf.setFontSize(12);
                    pdf.text(`IP: ${vcenter.vcenter_ip}`, margin + 10, y);
                    y += lineHeight;
                    pdf.text(`Username: ${vcenter.username}`, margin + 10, y);
                    y += lineHeight * 1.5;
                    
                    vcenter.clusters?.forEach((cluster, cIndex) => {
                        if (y > portraitHeight - 60) {
                            pdf.addPage();
                            y = 30;
                        }
                        
                        pdf.setFontSize(14);
                        pdf.text(`Cluster: ${cluster.name}`, margin + 10, y);
                        y += lineHeight;
                        
                        pdf.setFontSize(12);
                        pdf.text(`Network Extensions: ${cluster.ne_count}`, margin + 20, y);
                        y += lineHeight;
                        pdf.text(`WO Enabled: ${cluster.wo_enabled ? 'Yes' : 'No'}`, margin + 20, y);
                        y += lineHeight;
                        
                        if (cluster.ne_count > 0) {
                            Array.from({ length: cluster.ne_count }).forEach((_, neIndex) => {
                                if (y > portraitHeight - 60) {
                                    pdf.addPage();
                                    y = 30;
                                }
                                
                                pdf.text(`NE ${neIndex + 1}:`, margin + 20, y);
                                y += lineHeight;
                                pdf.text(`IP: ${cluster.ne_ips?.[neIndex]}`, margin + 30, y);
                                y += lineHeight;
                                
                                if (cluster.ne_ha_enabled) {
                                    pdf.text(`HA IP: ${cluster.ne_ha_ips?.[neIndex]}`, margin + 30, y);
                                    y += lineHeight;
                                }
                                
                                cluster.networks?.filter(n => n.ne_id === cluster.ne_ips?.[neIndex])
                                    .forEach((network, nIndex) => {
                                        if (y > portraitHeight - 60) {
                                            pdf.addPage();
                                            y = 30;
                                        }
                                        
                                        pdf.text(`Network: ${network.name}`, margin + 30, y);
                                        y += lineHeight;
                                        pdf.text(`CIDR: ${network.cidr}`, margin + 40, y);
                                        y += lineHeight;
                                        pdf.text(`VLAN: ${network.vlan}`, margin + 40, y);
                                        y += lineHeight;
                                    });
                                
                                y += lineHeight / 2;
                            });
                        }
                        y += lineHeight;
                    });
                    y += lineHeight;
                });
            }
            
            // Restore original network state
            setShowNetworks(originalNetworkState);
            
            pdf.save(`${hcxProject?.name || 'hcx-project'}-full.pdf`);
        } catch (error) {
            console.error('Failed to export PDF:', error);
            setShowNetworks(showNetworks);
        }
    };

    const renderDetailedInfo = () => {
        if (!hcxProject || !hcxProject.vcenters) return null;

        return (
            <div className="mt-4 p-4 surface-card border-round">
                {hcxProject.vcenters.map((vcenter, vIndex) => (
                    <div key={vIndex} className="mb-4">
                        <h3>vCenter: {vcenter.name}</h3>
                        
                        {/* vCenter Information Table */}
                        <div className="mb-3">
                            <h4>vCenter Information</h4>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>vCenter IP</th>
                                        <th>SSO URL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{vcenter.vcenter_ip}</td>
                                        <td>{vcenter.sso_url || 'N/A'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* HCX Information Table */}
                        <div className="mb-3">
                            <h4>HCX Information</h4>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>HCX Manager</th>
                                        <th>HCX IP</th>
                                        <th>HCX Network</th>
                                        <th>Datastore</th>
                                        <th>Resource Pool</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{vcenter.hcx_manager || 'N/A'}</td>
                                        <td>{vcenter.hcx_ip || 'N/A'}</td>
                                        <td>{vcenter.hcx_network || 'N/A'}</td>
                                        <td>{vcenter.datastore || 'N/A'}</td>
                                        <td>{vcenter.resource_pool || 'N/A'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Rest of the clusters information */}
                        {vcenter.clusters?.map((cluster, cIndex) => (
                            <div key={cIndex} className="ml-3 mb-3">
                                <h4>Cluster: {cluster.name}</h4>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Network Extensions</th>
                                            <th>WO Enabled</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{cluster.ne_count}</td>
                                            <td>{cluster.wo_enabled ? 'Yes' : 'No'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    };

    const memoizedData = useMemo(() => {
        if (!data.length) return [];
        return data.map(node => ({
            ...node,
            children: node.children?.map(vcenter => ({
                ...vcenter,
                children: vcenter.children?.map(cluster => ({
                    ...cluster,
                    children: cluster.children?.map(ne => ({
                        ...ne,
                        children: showNetworks ? ne.children : []
                    }))
                }))
            }))
        }));
    }, [data, showNetworks]);

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
                    <Checkbox 
                        inputId="show-details" 
                        checked={showDetails} 
                        onChange={e => setShowDetails(e.checked)}
                    />
                    <label htmlFor="show-details" className="ml-2">Show Detailed Information</label>
                    <div className="ml-auto flex gap-2">
                        <Button 
                            label="Export PNG" 
                            icon="pi pi-image" 
                            onClick={exportToImage}
                            loading={isExporting}
                        />
                        <Button 
                            label="Export Full PDF" 
                            icon="pi pi-file-pdf" 
                            onClick={exportToPDF} 
                            severity="secondary"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    {data.length > 0 && (
                        <OrganizationChart 
                            value={memoizedData}
                            nodeTemplate={nodeTemplate}
                        />
                    )}
                </div>
            </div>

            {showDetails && (
                <div id="detailed-info" className="card">
                    <div className="grid">
                        {hcxProject?.vcenters?.map((vcenter, vIndex) => (
                            <div key={vIndex} className="col-12">
                                <div className="card">
                                    <h3>vCenter: {vcenter.name}</h3>
                                    <div className="surface-100 p-3 mb-3">
                                        <p><strong>IP:</strong> {vcenter.vcenter_ip}</p>
                                        <p><strong>Username:</strong> {vcenter.username}</p>
                                    </div>
                                    
                                    {vcenter.clusters?.map((cluster, cIndex) => (
                                        <div key={cIndex} className="ml-3 mb-3">
                                            <h4>Cluster: {cluster.name}</h4>
                                            <div className="surface-50 p-3">
                                                <p><strong>Network Extensions:</strong> {cluster.ne_count}</p>
                                                <p><strong>WO Enabled:</strong> {cluster.wo_enabled ? 'Yes' : 'No'}</p>
                                                
                                                {cluster.ne_count > 0 && (
                                                    <div className="mt-2">
                                                        <h5>Network Extensions</h5>
                                                        {Array.from({ length: cluster.ne_count }).map((_, neIndex) => (
                                                            <div key={neIndex} className="surface-0 p-2 mb-2">
                                                                <p><strong>NE {neIndex + 1}:</strong></p>
                                                                <p>IP: {cluster.ne_ips?.[neIndex]}</p>
                                                                {cluster.ne_ha_enabled && (
                                                                    <p>HA IP: {cluster.ne_ha_ips?.[neIndex]}</p>
                                                                )}
                                                                
                                                                {cluster.networks?.filter(n => n.ne_id === cluster.ne_ips?.[neIndex]).map((network, nIndex) => (
                                                                    <div key={nIndex} className="ml-3">
                                                                        <p><strong>Network:</strong> {network.name}</p>
                                                                        <p>CIDR: {network.cidr}</p>
                                                                        <p>VLAN: {network.vlan}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {showDetails && renderDetailedInfo()}
        </div>
    );
}
        