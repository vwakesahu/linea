import { toast } from "sonner";

export const lineaChain = {
  id: 59141,
  network: "Linea Sepolia Testnet",
  name: "Linea",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia.linea.build"],
    },
    public: {
      http: ["https://rpc.sepolia.linea.build"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://sepolia.lineascan.build/",
    },
  },
};
