import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

import wallet from "./test.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com", "finalized");

(async () => {
  try {
    const airdropSignature = await connection.requestAirdrop(
      keypair.publicKey,
      1 * LAMPORTS_PER_SOL
    );
    // Transaction: https://explorer.solana.com/tx/2uZKPLKBL327uPFaZKzJj74vGcM5uDSxfLRZoByKbA7hWLNK5ThVfPXdcbiWHqeg6hWTB74b54BLBiMAy8xjH8u9?cluster=devnet
  } catch (error) {
    console.error(error);
  }
})();

