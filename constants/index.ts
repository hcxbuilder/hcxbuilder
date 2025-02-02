export const DEFAULT_VALUES = {
    VCENTER: {
        vcenter_name: '',
        vcenter_sso_url: '',
        vcenter_version: '',
        vcenter_url: '',
        vcenter_clusters: [],
        hcx_manager_name: '',
        hcx_cluster: '',
        hcx_datastore: '',
        hcx_resource_pool: '',
        hcx_ip: '',
        hcx_network: '',
        hcx_network_prefix: '',
        hcx_gateway: '',
        hcx_dns_servers: [],
        hcx_ntp_servers: [],
        serviceMeshes: []
    },
    SERVICE_MESH: {
        name: '',
        vcenter_name: '',
        clusters_services: [],
        clusters_deployments: [],
        storage: [],
        pool: [],
        management: {
            network: '',
            ip: [],
            prefix: '',
            gateway: '',
            dns_servers: []
        },
        vmotion_type: 'management',
        replication_type: 'management',
        uplink_type: 'management',
        vMotion: null,
        replication: null,
        uplink: null,
        ha_enabled: false,
        distributed_switches: [],
        wo_enabled: false
    }
};

export const VALIDATION_PATTERNS = {
    IP_ADDRESS: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    URL: /^https?:\/\/.+/,
    VERSION: /^\d+\.\d+(\.\d+)?$/,
    NETWORK_PREFIX: /^([1-9]|[1-2][0-9]|3[0-2])$/
};