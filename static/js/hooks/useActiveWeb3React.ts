import { useEffect, useState, useRef } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
// eslint-disable-next-line import/no-unresolved
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { useSelector } from 'react-redux'
import getProvider from 'utils/providers'
import { State } from 'state/types'

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
const useActiveWeb3React = (chainId?: number): Web3ReactContextInterface<Web3Provider> => {
  const { account, library, chainId: conChainId, ...web3React } = useWeb3React()
  const appChainId = useSelector((state: State) => state.network.data.chainId)
  const appProvider = getProvider(appChainId)

  const refEth = useRef(library)
  const [provider, setProvider] = useState(library || appProvider)

  useEffect(() => {
    if (library !== refEth.current) {
      setProvider(library || appProvider)
      refEth.current = library
    }
  }, [library, appProvider])

  return { library: provider, chainId: chainId || conChainId || appChainId, account, ...web3React }
}

export default useActiveWeb3React
