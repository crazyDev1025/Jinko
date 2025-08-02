import React, { useMemo, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import useActiveWeb3React from './hooks/useActiveWeb3React'
import { BLOCKED_ADDRESSES } from './config/constants'
import ApplicationUpdater from './state/application/updater'
import MulticallUpdater from './state/multicall/updater'
import TransactionUpdater from './state/transactions/updater'
import App from './App'
import Providers from './Providers'
import GoTop from './components/Shared/GoTop'

import './css/animate.min.css'
import './css/bootstrap.min.css'
import './css/boxicons.min.css'
import './css/fontawesome.min.css'
import './css/meanmenu.min.css'
import './css/style.css'
import './css/responsive.css'

function Updaters() {
  return (
    <>
      <ApplicationUpdater />
      <TransactionUpdater />
      <MulticallUpdater />
    </>
  )
}

function Blocklist({ children }: { children: ReactNode }) {
  const { account } = useActiveWeb3React()
  const blocked: boolean = useMemo(() => Boolean(account && BLOCKED_ADDRESSES.indexOf(account) !== -1), [account])
  if (blocked) {
    return <div>Blocked address</div>
  }
  return <>{children}</>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Providers>
      <Blocklist>
        <Updaters />
        <App />
        <GoTop />
      </Blocklist>
    </Providers>
  </React.StrictMode>
)
