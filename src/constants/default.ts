export const ETH_STANDARD_PATH = "m/44'/60'/0'/0";
export const ENTROPY_KEY = "ENTROPY";
export const MNEMONIC_KEY = "MNEMONIC";

export const DEFAULT_ACTIVE_INDEX = 0;
export const MAINNET_CHAIN_ID = 1;
export const ROPSTEN_CHAIN_ID = 3;
export const RINKEBY_CHAIN_ID = 4;
export const GOERLI_CHAIN_ID = 5;
export const DEFAULT_CHAIN_ID = process.env.REACT_APP_ENV === 'prod' ? MAINNET_CHAIN_ID : ROPSTEN_CHAIN_ID;

export const API_URL = process.env.REACT_APP_API_URL || "https://wally-nft-demo.herokuapp.com"
