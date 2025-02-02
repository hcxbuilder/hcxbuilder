'use client';

import React from 'react';
import HCXBuilderWizard from './page';

export default function HCXBuilderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <HCXBuilderWizard>{children}</HCXBuilderWizard>;
}