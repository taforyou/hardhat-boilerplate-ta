import * as dotenv from 'dotenv'

import { HardhatUserConfig } from 'hardhat/config'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import 'hardhat-gas-reporter'
import 'solidity-coverage'

dotenv.config()

const config: HardhatUserConfig = {
	solidity: '0.8.14',
	networks: {
		rei: {
			url: 'https://rei-rpc.moonrhythm.io',
			chainId: 55555,
		},
		reitestnet: {
			url: 'https://rei-testnet-rpc.moonrhythm.io',
			chainId: 55556
		}
	},
	gasReporter: {
		enabled: process.env.REPORT_GAS !== undefined,
		currency: 'USD'
	},
	etherscan: {
		apiKey: 'reipoint',
		customChains: [
			{
				network: 'rei',
				chainId: 55555,
				urls: {
					apiURL: 'https://reiscan.com/api',
					browserURL: 'https://reiscan.com/'
				}
			},
			{
				network: 'reitestnet',
				chainId: 55556,
				urls: {
					apiURL: 'https://testnet.reiscan.com/api',
					browserURL: 'https://testnet.reiscan.com/'
				}
			}
		]
	}
}

export default config
