import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Chips } from 'primereact/chips';
import { NetworkProfile } from '@/types';

interface NetworkProfileFormProps {
    profile: NetworkProfile | null;
    onChange: (profile: NetworkProfile) => void;
}

const NetworkProfileForm: React.FC<NetworkProfileFormProps> = ({ profile, onChange }) => {
    // Initialize with empty values if profile is null
    const currentProfile = profile || {
        network: '',
        ip: '',
        prefix: '',
        gateway: '',
        dns_servers: []
    };

    const handleChange = (field: keyof NetworkProfile, value: any) => {
        onChange({
            ...currentProfile,
            [field]: value
        });
    };

    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <div className="field">
                    <div className="flex flex-column gap-2">
                        <label className="font-bold">Network</label>
                        <InputText
                            value={currentProfile.network}
                            onChange={(e) => handleChange('network', e.target.value)}
                            placeholder="Enter network name"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-6">
                <div className="field">
                    <div className="flex flex-column gap-2">
                        <label className="font-bold">IP Address</label>
                        <InputText
                            value={currentProfile.ip}
                            onChange={(e) => handleChange('ip', e.target.value)}
                            placeholder="Enter IP address"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-6">
                <div className="field">
                    <div className="flex flex-column gap-2">
                        <label className="font-bold">Prefix Length</label>
                        <InputText
                            value={currentProfile.prefix}
                            onChange={(e) => handleChange('prefix', e.target.value)}
                            placeholder="Enter prefix length"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-6">
                <div className="field">
                    <div className="flex flex-column gap-2">
                        <label className="font-bold">Gateway</label>
                        <InputText
                            value={currentProfile.gateway}
                            onChange={(e) => handleChange('gateway', e.target.value)}
                            placeholder="Enter gateway"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="field">
                    <div className="flex flex-column gap-2">
                        <label className="font-bold">DNS Servers</label>
                        <Chips
                            value={currentProfile.dns_servers}
                            onChange={(e) => handleChange('dns_servers', e.value)}
                            placeholder="Add DNS server"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NetworkProfileForm;