export const validateIP = (value: string): boolean => {
    const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(value);
};

export const validateURL = (value: string): boolean => {
    return /^https?:\/\/.+/.test(value);
};

export const isVCenterNameUnique = (vcenters: VCenter[], name: string, currentId?: string): boolean => {
    return !vcenters.some(vc => vc.vcenter_name === name);
};

export const isServiceMeshNameUnique = (serviceMeshes: ServiceMeshConfig[], name: string, currentId?: string): boolean => {
    return !serviceMeshes.some(mesh => mesh.name === name && mesh.id !== currentId);
};