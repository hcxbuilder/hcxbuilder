import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Chips } from 'primereact/chips';
import { NetworkProfile } from '@/types';
import { InputNumber } from 'primereact/inputnumber';

interface NetworkProfileFormProps {
    profile: NetworkProfile | null;
    onChange: (profile: NetworkProfile) => void;
    title: string;
}

const NetworkProfileForm: React.FC<NetworkProfileFormProps> = ({ profile, onChange, title }) => {
    if (!profile) return null;

    return (
        <div className="col-12">
            <h3>{title}</h3>
            <div className="grid">
                <div className="col-12 md:col-6">
                    <div className="field">
                        <label className="font-bold">Network name</label>
                        <InputText
                            value={profile.network}
                            onChange={(e) => onChange({ ...profile, network: e.target.value })}
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="col-12 md:col-6">
                    <div className="field">
                        <label className="font-bold">Gateway</label>
                        <InputText
                            value={profile.gateway}
                            onChange={(e) => onChange({ ...profile, gateway: e.target.value })}
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="col-12 md:col-6">
                    <div className="field">
                        <label className="font-bold">Prefix</label>
                        <InputNumber
                            value={profile.prefix}
                            onValueChange={(e) => onChange({ ...profile, prefix: e.value?.toString() || '' })}
                            className="w-full"
                            min={0}
                            max={32}
                            placeholder="Enter network prefix (0-32)"
                        />
                    </div>
                </div>
                <div className="col-12 md:col-6">
                    <div className="field">
                        <label className="font-bold">IP Addresses</label>
                        <Chips
                            value={profile.ip}
                            onChange={(e) => onChange({ ...profile, ip: e.value })}
                            className="w-full"
                            placeholder="Enter IP and press Enter"
                            allowDuplicate={false}
                            separator=","
                        />
                    </div>
                </div>
                <div className="col-12 md:col-6">
                    <div className="field">
                        <div className="text-gray-500">
                            <p>Required IP addresses:</p>
                            <ul className="list-none p-0 m-0">
                                <li>• 1 IP for IX</li>
                                <li>• {profile.ne_count || 1} IP{(profile.ne_count || 1) > 1 ? 's' : ''} for NE</li>
                                <li>• Total: {(profile.ne_count || 1) + 1} required</li>
                                <li className={profile.ip.length >= ((profile.ne_count || 1) + 1) ? 'text-green-500' : 'text-red-500'}>
                                    • {profile.ip.length} IP{profile.ip.length !== 1 ? 's' : ''} provided
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6">
                    <div className="field">
                        <label className="font-bold">DNS Servers</label>
                        <Chips
                            value={profile.dns_servers}
                            onChange={(e) => {
                                const newValue = e.value.slice(0, 2);
                                onChange({ ...profile, dns_servers: newValue });
                            }}
                            className="w-full"
                            placeholder="Enter DNS server IP and press Enter (max 2)"
                            allowDuplicate={false}
                            separator=","
                            max={2}
                        />
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default NetworkProfileForm;