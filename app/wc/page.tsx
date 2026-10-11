'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

function WcConnect() {
  const searchParams = useSearchParams();
  const uri = searchParams.get('uri');
  const appLink = uri
    ? `yourwallet://walletconnect?uri=${encodeURIComponent(uri)}`
    : 'yourwallet://';

  useEffect(() => {
    if (uri) {
      window.location.replace(appLink);
    }
  }, [uri, appLink]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <img
        src="/yourwallet-logo.png"
        alt="Your Wallet"
        className="h-20 w-20 rounded-3xl"
      />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Your Wallet</h1>
        <p className="text-gray-600 dark:text-gray-300">
          {uri
            ? 'Uygulamaya bağlanılıyor… Açılmadıysa aşağıdaki butona dokunun.'
            : 'Cüzdan uygulamasını açın.'}
        </p>
      </div>

      <div className="flex flex-col items-center gap-5">
        <a
          href={appLink}
          className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          Uygulamayı Aç
        </a>

        <div className="flex items-center gap-5">
          <a
            href="https://apps.apple.com/gb/app/your-wallet-crypto-wallet/id6743835484"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/appstore.png" alt="App Store" className="h-14 w-auto" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.yourwallet.wallet"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/google-play.webp" alt="Google Play" className="h-14 w-auto" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function WcPage() {
  return (
    <Suspense fallback={null}>
      <WcConnect />
    </Suspense>
  );
}
