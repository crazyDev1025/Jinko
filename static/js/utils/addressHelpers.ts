import { ChainId } from '@pancakeswap/sdk'
import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'

export const getAddress = (address: Address, chainId: number): string => {
  if (!address) return ""
  return address[chainId] ? address[chainId] : address[ChainId.MAINNET]
}

export const getMulticallAddress = (chainId: number) => {
  return getAddress(addresses.multiCall, chainId)
}
