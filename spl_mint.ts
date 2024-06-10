import { Keypair, Connection, PublicKey } from "@solana/web3.js";
import { mintTo, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import wallet from "./test.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const mint = new PublicKey("Bu949CZYxLJ4TfwCEP4UK24Za492wuUBGJ7ZFT434s1o");

(async () => {
  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    keypair,
    mint,
    keypair.publicKey
  );

  const ata = tokenAccount.address;
  console.log("Associated Token Account: ", ata.toBase58());
  const amount = 10e8;

  await mintTo(connection, keypair, mint, ata, keypair.publicKey, amount);

  // Associated Toekn Account: 6PvicuC9krmBymWqLST4gSNNCGhFreNNBEeBYkjHMyUU
})();
