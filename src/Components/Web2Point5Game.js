import { useState } from "react";
import { ethers } from "ethers";
import Web2Game from "./Web2Game";

const Web2Point5Game = () => {
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
    { address ? <Web2Game welcomeMessage={`Hello ${address}`}/> : (
       <div className="game-container">
      <button className="button-28" onClick={() => handleWalletConnect()}>Connect Wallet</button>
      </div>
    )}
    </>
  )
};

export default Web2Point5Game;
