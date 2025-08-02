import { useMemo } from 'react'
import { AddressZero } from '@ethersproject/constants'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import {
  getBep20Contract,
  getErc721Contract,
} from 'utils/contractHelpers'

import {
  getMulticallAddress
} from 'utils/addressHelpers'

// Imports below migrated from Exchange useContract.ts
import { Contract } from '@ethersproject/contracts'
import { ChainId, WETH } from '@pancakeswap/sdk'
import ENS_PUBLIC_RESOLVER_ABI from '../config/abi/ens-public-resolver.json'
import ENS_ABI from '../config/abi/ens-registrar.json'
import { ERC20_BYTES32_ABI } from '../config/abi/erc20'
import ERC20_ABI from '../config/abi/erc20.json'
import WETH_ABI from '../config/abi/weth.json'
import MULTICALL_ABI from '../config/abi/Multicall.json'
import { getContract } from '../utils'

/**
 * Helper hooks to get specific contracts (by ABI)
 */
export const useERC20 = (address: string, chainId: number) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBep20Contract(address, chainId, library.getSigner()), [address, library, chainId])
}

/**
 * @see https://docs.openzeppelin.com/contracts/3.x/api/token/erc721
 */
export const useERC721 = (address: string, chainId: number) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getErc721Contract(address, chainId, library.getSigner()), [address, library, chainId])
}

// returns null on errors
function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true, chainId = 56): Contract | null {
  const { library, account } = useActiveWeb3React(chainId)

  return useMemo(() => {
    if (!address || address === AddressZero || !ABI || !library) return null
    try {
      return getContract(address, ABI, library, chainId, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      return null
    }
  }, [address, ABI, library, chainId, withSignerIfPossible, account])
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export function useWETHContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? WETH[chainId].address : undefined, WETH_ABI, withSignerIfPossible)
}

export function useENSRegistrarContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  let address: string | undefined
  if (chainId) {
    // eslint-disable-next-line default-case
    switch (chainId) {
      case ChainId.MAINNET:
      case ChainId.TESTNET:
        address = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        break
    }
  }
  return useContract(address, ENS_ABI, withSignerIfPossible)
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean): Contract | null {
  return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function useMulticallContract(chainId: number): Contract | null {
  return useContract(getMulticallAddress(chainId), MULTICALL_ABI, false, chainId)
}
