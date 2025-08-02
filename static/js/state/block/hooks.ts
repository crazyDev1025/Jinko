import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { setBlock } from '.'
import { State } from '../types'

export const usePollBlockNumber = () => {
  const dispatch = useAppDispatch()
  const { library } = useActiveWeb3React()

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const blockNumber = await library.getBlockNumber()
        dispatch(setBlock(blockNumber))
      } catch {
        console.error('Could not fetch block number')
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [dispatch, library])
}

export const useBlock = () => {
  return useSelector((state: State) => state.block)
}

export const useInitialBlock = () => {
  return useSelector((state: State) => state.block.initialBlock)
}
