// Network chain ids
export enum CHAIN_ID {
  BSC = 56,
  BSC_TESTNET = 97,
  MAINNET = 1,
  GOERLI = 5,
  POLYGON = 137,
  POLYGON_TESTNET = 80001
}

// Network labels
export const NETWORK_LABEL = {
  [CHAIN_ID.BSC]: 'BSC',
  [CHAIN_ID.BSC_TESTNET]: 'BSC Testnet',
  [CHAIN_ID.MAINNET]: 'Ethereum',
  [CHAIN_ID.GOERLI]: 'Goerli',
  [CHAIN_ID.POLYGON]: 'Polygon Mainnet',
  [CHAIN_ID.POLYGON_TESTNET]: 'Polygon Matic Mumbai'
}

// Network RPC nodes
export const NETWORK_RPC = {
  [CHAIN_ID.BSC]: [
    'https://bsc-dataseed.binance.org/',
    'https://bsc-dataseed1.ninicoin.io',
    'https://bsc-dataseed1.defibit.io',
  ],
  [CHAIN_ID.BSC_TESTNET]: ['https://data-seed-prebsc-2-s3.binance.org:8545/'],
  [CHAIN_ID.MAINNET]: [`https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`],
  [CHAIN_ID.GOERLI]: [`https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`],
  [CHAIN_ID.POLYGON]: ["https://polygon-rpc.com/"],
  [CHAIN_ID.POLYGON_TESTNET]: ["https://rpc-mumbai.maticvigil.com/"]
}

// Network block explorers
export const BLOCK_EXPLORER = {
  [CHAIN_ID.BSC]: 'https://bscscan.com',
  [CHAIN_ID.BSC_TESTNET]: 'https://testnet.bscscan.com/',
  [CHAIN_ID.MAINNET]: 'https://etherscan.io/',
  [CHAIN_ID.GOERLI]: 'https://goerli.etherscan.io/',
  [CHAIN_ID.POLYGON]: 'https://polygonscan.com/',
  [CHAIN_ID.POLYGON_TESTNET]: 'https://mumbai.polygonscan.com/'
}

// For switch network configuration
export const CHAIN_PARAMS = {
  [CHAIN_ID.BSC]: {
    chainId: '0x38',
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'bnb',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: NETWORK_RPC[CHAIN_ID.BSC],
    blockExplorerUrls: [BLOCK_EXPLORER[CHAIN_ID.BSC]],
  },
  [CHAIN_ID.BSC_TESTNET]: {
    chainId: '0x61',
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
      name: 'bnb',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: NETWORK_RPC[CHAIN_ID.BSC_TESTNET],
    blockExplorerUrls: [BLOCK_EXPLORER[CHAIN_ID.BSC_TESTNET]],
  },
  [CHAIN_ID.MAINNET]: {
    chainId: '0x1',
    chainName: 'Ethereum Mainnet',
    nativeCurrency: {
      name: 'eth',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: NETWORK_RPC[CHAIN_ID.MAINNET],
    blockExplorerUrls: [BLOCK_EXPLORER[CHAIN_ID.MAINNET]],
  },
  [CHAIN_ID.GOERLI]: {
    chainId: '0x5',
    chainName: 'Goerli Test Network',
    nativeCurrency: {
      name: 'eth',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: NETWORK_RPC[CHAIN_ID.GOERLI],
    blockExplorerUrls: [BLOCK_EXPLORER[CHAIN_ID.GOERLI]],
  },
  [CHAIN_ID.POLYGON]: {
    chainId: '0x89',
    chainName: 'Polygon',
    nativeCurrency: {
      name: 'Polygon',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: NETWORK_RPC[CHAIN_ID.POLYGON],
    blockExplorerUrls: [BLOCK_EXPLORER[CHAIN_ID.POLYGON]],
  },
  [CHAIN_ID.POLYGON_TESTNET]: {
    chainId: '0x13881',
    chainName: 'Polygon Matic Mumbai',
    nativeCurrency: {
      name: 'Polygon',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: NETWORK_RPC[CHAIN_ID.POLYGON_TESTNET],
    blockExplorerUrls: [BLOCK_EXPLORER[CHAIN_ID.POLYGON_TESTNET]],
  },
}

interface BaseChainInfo {
  readonly label: string
  readonly logoUrl: string
  readonly explorer: string
}

export type ChainInfoMap = { readonly [chainId: number]: BaseChainInfo }

export const CHAIN_INFO: ChainInfoMap = {
  [CHAIN_ID.BSC]: {
    label: NETWORK_LABEL[CHAIN_ID.BSC],
    logoUrl: '/images/bnb-logo.svg',
    explorer: BLOCK_EXPLORER[CHAIN_ID.BSC],
  },
  [CHAIN_ID.BSC_TESTNET]: {
    label: NETWORK_LABEL[CHAIN_ID.BSC_TESTNET],
    logoUrl: '/images/bnb-logo.svg',
    explorer: BLOCK_EXPLORER[CHAIN_ID.BSC_TESTNET],
  },
  [CHAIN_ID.MAINNET]: {
    label: NETWORK_LABEL[CHAIN_ID.MAINNET],
    logoUrl: '/images/ethereum-logo.png',
    explorer: BLOCK_EXPLORER[CHAIN_ID.MAINNET],
  },
  [CHAIN_ID.GOERLI]: {
    label: NETWORK_LABEL[CHAIN_ID.GOERLI],
    logoUrl: '/images/ethereum-logo.png',
    explorer: BLOCK_EXPLORER[CHAIN_ID.GOERLI],
  },
  [CHAIN_ID.POLYGON]: {
    label: NETWORK_LABEL[CHAIN_ID.POLYGON],
    logoUrl: '/images/polygon-logo.png',
    explorer: BLOCK_EXPLORER[CHAIN_ID.POLYGON],
  },
  [CHAIN_ID.POLYGON_TESTNET]: {
    label: NETWORK_LABEL[CHAIN_ID.POLYGON_TESTNET],
    logoUrl: '/images/polygon-logo.png',
    explorer: BLOCK_EXPLORER[CHAIN_ID.POLYGON_TESTNET],
  },
}

export const SUPPORTED_CHAIN = [
  // CHAIN_ID.POLYGON,
  CHAIN_ID.POLYGON_TESTNET,
]