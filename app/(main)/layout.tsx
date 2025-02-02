import { Metadata } from 'next';
import AppLayout from '../../layout/layout';
import { ProjectProvider } from '@/app/project';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'HCX Builder',
    description: 'HCX Builder.',
    robots: { index: false, follow: false },
    viewport: { initialScale: 1, width: 'device-width' },
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({
    children,
}: AppLayoutProps) {
    return (
        <AppLayout>
            <ProjectProvider>
                {children}
            </ProjectProvider>
        </AppLayout>
    );
}
