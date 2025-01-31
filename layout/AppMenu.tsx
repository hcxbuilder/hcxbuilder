/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            
            label: 'HCX Builder',
            items: [
                { label: 'Wizard', icon: 'pi pi-fw pi-id-card', to: '/hcx/builder' },
            
                { label: 'Schema', icon: 'pi pi-fw pi-mobile', to: '/hcx/tree' },
                { label: 'Import', icon: 'pi pi-fw pi-table', to: '/hcx/import' },
                { label: 'Export', icon: 'pi pi-fw pi-list', to: '/hcx/export' },

            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}


            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
