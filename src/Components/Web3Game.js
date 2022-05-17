import { useState } from "react";
import { ethers } from "ethers";
import SolidityGameEngine from "./SolidityGameEngine"

const Web3Game = () => {
  const [address, setAddress] = useState("")
  const handleWalletConnect = async () => {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAddress(address);
    } else {
      alert('No Wallet Detected')
    }
  }

  return(
    <>
    { address ? <SolidityGameEngine welcomeMessage={`Hello ${address}`} /> : (
       <div className="game-container">
      <button className="button-28" onClick={() => handleWalletConnect()}>Connect Wallet</button>
      </div>
    )}
    </>
  )
};

export default Web3Game;
