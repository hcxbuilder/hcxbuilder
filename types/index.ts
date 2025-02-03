export interface HCXProject {
    name: string;
    vcenters: VCenter[];
}

export interface VCenter {
    vcenter_name: string;

    vcenter_sso_url: string;
    vcenter_version: string;
    vcenter_url: string;
    vcenter_clusters: string[];
    hcx_manager_name: string;
    hcx_cluster: string;
    hcx_datastore: string;
    hcx_resource_pool: string;
    hcx_ip: string;
    hcx_network: string;
    hcx_network_prefix: string;
    hcx_gateway: string;
    hcx_dns_servers: string[];
    hcx_ntp_servers: string[];
    serviceMeshes: ServiceMeshConfig[];
}

export interface NetworkProfile {
    network: string;
    ip: string[];
    prefix: string;
    gateway: string;
    dns_servers: string[];
}

export const NetworkTypes = {
    DEDICATED: 'dedicated',
    MANAGEMENT: 'management',
    VMOTION: 'vmotion'
} as const;

export type NetworkType = (typeof NetworkTypes)[keyof typeof NetworkTypes];

export const NetworkProfiles = {
    MANAGEMENT: 'management',
    VMOTION: 'vmotion',
    REPLICATION: 'replication',
    UPLINK: 'uplink'
} as const;

export type NetworkProfileType = (typeof NetworkProfiles)[keyof typeof NetworkProfiles];

export interface ServiceMeshConfig {
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
    distributed_switches: DistributedSwitchConfig[];
    wo_enabled: boolean;
}

export interface DistributedSwitchConfig {
    name: string;
    ne_count: number;
    ne_ha_count: number;
    extended_network: ExtendedNetworkConfig[][];
}

export interface ExtendedNetworkConfig {
    name: string;
    network: string;
    prefix: string;
    gateway: string;
    vlan_id: string;
    ne_id: string;
}