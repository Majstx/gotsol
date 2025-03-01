require("dotenv").config();

const qr = require("qrcode");
const path = require("path");
const { Keypair } = require("@solana/web3.js");

const url = new URL(process.env.GOT_SOL_APP_URL);
url.pathname = "/tx";
url.searchParams.set("amount", "0.15");
url.searchParams.set("label", "label");
url.searchParams.set(
  "recipient",
  "AbUV7m5KCcfYWM1sC9TMVZyPnXSBFTHS8QnKLwdJFj3x"
);
url.searchParams.set(
  "spl-token",
  "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
);
url.searchParams.set("reference", Keypair.generate().publicKey);
url.searchParams.set("memo", new Date().toString());

const content = "solana:" + encodeURIComponent(url.toString());
const filePath = path.join(__dirname, "qrcode.png");

console.log(url.toString());
console.log(content);

qr.toFile(filePath, content);
