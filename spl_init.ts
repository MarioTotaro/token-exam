import { Keypair, Connection } from "@solana/web3.js";
import { createMint } from "@solana/spl-token";
import wallet from "./test.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// Token address: Bu949CZYxLJ4TfwCEP4UK24Za492wuUBGJ7ZFT434s1o
(async () => {
    try {
        const mint = await createMint(
            connection,
            keypair,
            keypair.publicKey,
            null,
            6
        );
        console.log(`Mint created: ${mint.toBase58()}`);
    } catch (error) {
        console.error("Error during mint creation:", error);
    }
})();
