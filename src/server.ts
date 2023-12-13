import 'dotenv/config';
import express, { Request, Response } from 'express';
import { getProxyAddress } from './utils';
import { ethers } from 'ethers';
import { SIGNATURE_PROXY_ABI, SIGNATURE_PROXY_FACTORY_ABI, SIGNATURE_PROXY_FACTORY_ADDRESS } from './constants';

// TypeScript interfaces
interface Transaction {
  from: string;
  to: string;
  data: string;
  value: string;
  v: number;
  r: string;
  s: string;
}

interface RequestBody {
  txs: Transaction[];
}

// Create Express app
const app = express();
app.use(express.json());

// POST endpoint
app.post('/tx-signature', async (req: Request, res: Response) => {
  const provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.public.blastapi.io');
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);

  const txs: RequestBody = req.body;

  // Validate and process the request
  if (!txs || !Array.isArray(txs)) {
    return res.status(400).json({ error: 'Invalid request format' });
  }

  const txHashes: string[] = [];

  for (const tx of txs) {
    // compute the proxy address from the 'from' address
    const proxyAddress = getProxyAddress(tx.from);
    console.log(`Processing tx`, { ...tx, proxy: proxyAddress });

    // if the proxy is deployed
    const proxy = new ethers.Contract(proxyAddress, SIGNATURE_PROXY_ABI, provider);
    const isDeployed = await provider.getCode(proxy.address) !== '0x';
    
    let exec;

    if (isDeployed) {
      console.log(`Proxy is deployed, executing tx`);
      const proxy = new ethers.Contract(proxyAddress, SIGNATURE_PROXY_ABI, signer);
      exec = await proxy.exec(tx.to, tx.data, tx.value, tx.v, tx.r, tx.s);
    } else {
      console.log(`Proxy is not deployed, deploying it and executing tx`);
      const factory = new ethers.Contract(SIGNATURE_PROXY_FACTORY_ADDRESS, SIGNATURE_PROXY_FACTORY_ABI, signer);
      exec = await factory.deployAndExec(tx.from, tx.to, tx.data, tx.value, tx.v, tx.r, tx.s);
    }

    txHashes.push((await exec.wait()).transactionHash);
  }

  res.json(txHashes);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
