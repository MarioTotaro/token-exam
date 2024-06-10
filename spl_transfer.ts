import { Keypair, Connection, PublicKey } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";
import wallet from "./test.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const mint = new PublicKey("Bu949CZYxLJ4TfwCEP4UK24Za492wuUBGJ7ZFT434s1o");
const fromAta = new PublicKey("6PvicuC9krmBymWqLST4gSNNCGhFreNNBEeBYkjHMyUU");

const to = Keypair.generate();
console.log("To: ", to.publicKey.toBase58());

(async () => {
  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    keypair,
    mint,
    to.publicKey
  );
  const toAta = tokenAccount.address;
  console.log("Associated Token Account: ", toAta.toBase58());
  const amount = 10e5;

  await transfer(connection, keypair, fromAta, toAta, keypair, amount);

  console.log("Transferred", amount, "from", fromAta.toBase58(), "to", toAta.toBase58());
})();
