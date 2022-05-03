import {
  Connection,
  Keypair,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";

export class TransactionFactory {
  constructor(private readonly connection: Connection) {}

  async make(
    feePayer: Keypair,
    instructions: TransactionInstruction[]
  ): Promise<Transaction> {
    const { blockhash } = await this.connection.getLatestBlockhash("finalized");

    const tx = new Transaction({
      feePayer: feePayer.publicKey,
      recentBlockhash: blockhash,
    });
    instructions.forEach((ix) => tx.add(ix));
    tx.partialSign(feePayer);

    return tx;
  }
}
