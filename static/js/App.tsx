import React, { lazy } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useEagerConnect from 'hooks/useEagerConnect'
import { useUpdateNetwork } from 'state/network/hooks'
import { usePollBlockNumber } from 'state/block/hooks'
import { DatePickerPortal } from 'components/DatePicker'
import Menu from './components/Menu'
import Footer from './components/Footer'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import { ToastListener } from './contexts/ToastsContext'
import PageLoader from './components/Loader/PageLoader'
import history from './routerHistory'

// Route-based code splitting
const NotFound = lazy(() => import('./views/NotFound'))
const Home = lazy(() => import('./views/Home'))
const ComingSoon = lazy(() => import('./views/ComingSoon'))
const CertificateDetails = lazy(() => import('./views/CertificateDetails'))
const Profile = lazy(() => import('./views/Profile'))
const Search = lazy(() => import('./views/Search'))
const Onboarding = lazy(() => import('./views/Onboarding'))
const VerifyCertificate = lazy(() => import('./views/VerifyCertificate'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const RemoveTrailingSlash = ({ ...rest }) => {
  const location = useLocation()

  // If the last character of the url is '/'
  if (location.pathname.match('/.*/$')) {
    return <Navigate replace {...rest} to={{
      pathname: location.pathname.replace(/\/+$/, ""),
      search: location.search
    }} />
  }

  return null
}

const App: React.FC = () => {
  usePollBlockNumber()
  useEagerConnect()
  useUpdateNetwork()

  gsap.registerPlugin(ScrollTrigger)

  return (
    <Router>
      <div className="master-container">
        <Menu />
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <RemoveTrailingSlash />
          <Routes>
            {/* <Route path='/:url*(/+)' element={<Navigate to={pathName.slice(0, -1)} replace />} /> */}
            <Route path="/home" element={<Home />}  />
            {/* <Route path="home" element={<ComingSoon />} /> */}
            {/* <Route path="/home-v2" element={<HomeV2 />}  /> */}

            {/* Redirect route */}
            <Route path='/' element={<Navigate replace to='/home' />} />

            {/* 404 */}
            <Route element={<NotFound />} />
          </Routes>
        </SuspenseWithChunkError>
        <ToastListener />
        <DatePickerPortal />
      </div>
      {/* <Footer /> */}
    </Router>
  )
}

export default React.memo(App)
