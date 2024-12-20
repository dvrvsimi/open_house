import './global.css';
import { UiLayout } from '@/components/ui/ui-layout';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/solana/solana-provider';
import { ReactQueryProvider } from './react-query-provider';
import { Head } from 'next/document';
// import SimpleMultiStepForm from '@/components/multiStepForm/multi-step-form-feature';

export const metadata = {
  title: 'open-house',
  description: 'Generated by create-solana-dapp',
};

const links: { label: string; path: string }[] = [
  { label: 'Home', path: '/'},
  { label: 'For Sale', path: '/under_construction'},
  { label: 'For Rent', path: '/listing'},
  { label: 'Shortlet', path: '/under_construction'},
  // { label: 'Account', path: '/account' },
  // { label: 'Clusters', path: '/clusters' },
  // { label: 'Counter Program', path: '/counter' }, //to check how counter works
  // { label: 'Upload Property', path: '/listing/upload'}

];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ReactQueryProvider>
          <ClusterProvider>
            <SolanaProvider>
              <UiLayout links={links}>{children}</UiLayout>
            </SolanaProvider>
          </ClusterProvider>
        </ReactQueryProvider>
      </body>
    </html>

  );
}
