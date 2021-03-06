import wallyLogo from "./assets/wally-logo.png";
import { SUPPORTED_CHAINS, DEFAULT_CHAIN_ID, ETH_STANDARD_PATH } from "../constants";
import { IAppConfig } from "../helpers/types";
import { getRpcEngine } from "../engines";

const appConfig: IAppConfig = {
  name: "WalletConnect",
  logo: wallyLogo,
  chainId: DEFAULT_CHAIN_ID,
  derivationPath: ETH_STANDARD_PATH,
  numberOfAccounts: 0,
  colors: {
    defaultColor: "12, 12, 13",
    backgroundColor: "40, 44, 52",
    backgroundColorV2: "#0C0C0C",
  },
  chains: SUPPORTED_CHAINS,
  styleOpts: {
    showPasteUri: true,
    showVersion: true,
  },
  rpcEngine: getRpcEngine(),
  events: {
    init: (state, setState) => Promise.resolve(),
    update: (state, setState) => Promise.resolve(),
  },
};

export function getAppConfig(): IAppConfig {
  return appConfig;
}
