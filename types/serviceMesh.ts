import { NetworkProfile, NetworkType, NetworkTypes, NetworkProfiles, DistributedSwitchConfig } from './index';

export interface ServiceMeshState {
    showDialog: boolean;
    editingMesh: ServiceMeshConfig | null;
    activeIndex: number;
    errors: { [key: string]: string };
    deleteConfirmVisible: boolean;
    meshToDelete: ServiceMeshConfig | null;
}

export interface ServiceMeshConfig {
    id: string;
    name: string;
    vcenter_name: string;
    clusters_services: string[];
    clusters_deployments: string[];
    storage: string[];
    pool: string[];
    [NetworkProfiles.MANAGEMENT]: NetworkProfile;
    vmotion_type: NetworkType;
    replication_type: NetworkType;
    uplink_type: Exclude<NetworkType, typeof NetworkTypes.VMOTION>;
    [NetworkProfiles.VMOTION]: NetworkProfile | null;
    [NetworkProfiles.REPLICATION]: NetworkProfile | null;
    [NetworkProfiles.UPLINK]: NetworkProfile | null;
    ha_enabled: boolean;
    distributed_switches: DistributedSwitchConfig[];
    wo_enabled: boolean;
}

export interface ServiceMeshFormProps {
    serviceMeshes: ServiceMeshConfig[];
    onServiceMeshChange: (serviceMeshes: ServiceMeshConfig[]) => void;
}

export interface ServiceMeshTabProps {
    mesh: ServiceMeshConfig;
    onMeshChange: (field: keyof ServiceMeshConfig, value: any) => void;
}