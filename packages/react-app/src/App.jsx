import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { ethers } from "ethers";
import "./App.css";
import { Button } from "antd";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useUserAddress } from "eth-hooks";
import { Header, ThemeSwitch, Address } from "./components";
import Signator from "./Signator";
import SignatorViewer from "./SignatorViewer";
import { INFURA_ID, NETWORKS } from "./constants";
/*
    Welcome to Signatorio !
*/

/// 📡 What chain are your contracts deployed to?
const targetNetwork = NETWORKS['mainnet']; // <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)

// 😬 Sorry for all the console logging
const DEBUG = true


// 🛰 providers
if(DEBUG) console.log("📡 Connecting to Mainnet Ethereum");
const scaffoldEthProvider = new ethers.providers.StaticJsonRpcProvider("https://rpc.scaffoldeth.io:48544")
const mainnetInfura = new ethers.providers.StaticJsonRpcProvider("https://mainnet.infura.io/v3/" + INFURA_ID)


// 🔭 block explorer URL
const blockExplorer = targetNetwork.blockExplorer;


function App(props) {

  const mainnetProvider = (scaffoldEthProvider && scaffoldEthProvider._network) ? scaffoldEthProvider : mainnetInfura

  const [injectedProvider, setInjectedProvider] = useState();
  // Use your injected provider from 🦊 Metamask or if you don't have it then instantly generate a 🔥 burner wallet.
  const address = useUserAddress(injectedProvider);

  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect();
    setInjectedProvider(new ethers.providers.Web3Provider(provider));

    provider.on("chainChanged", (chainId) => {
            console.log(`chain changed to ${chainId}! updating providers`)
            setInjectedProvider(new ethers.providers.Web3Provider(provider));
        });

        provider.on("accountsChanged", (accounts: string[]) => {
            console.log(`account changed!`)
            setInjectedProvider(new ethers.providers.Web3Provider(provider));
        });

        // Subscribe to session disconnection
        provider.on("disconnect", (code, reason) => {
          console.log(code, reason);
          logoutOfWeb3Modal()
        });
  }, [setInjectedProvider]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  const [route, setRoute] = useState();
  useEffect(() => {
    setRoute(window.location.pathname)
  }, [setRoute]);

  const modalButtons = [];
  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      modalButtons.push(
        <Button
          key="logoutbutton"
          style={{ verticalAlign: "top", marginLeft: 8, marginTop: 4 }}
          shape="round"
          size="large"
          onClick={logoutOfWeb3Modal}
        >
          logout
        </Button>,
      );
    } else {
      modalButtons.push(
        <Button
          key="loginbutton"
          style={{ verticalAlign: "top", marginLeft: 8, marginTop: 4 }}
          shape="round"
          size="large"
          /*type={minimized ? "default" : "primary"}     too many people just defaulting to MM and having a bad time*/
          onClick={loadWeb3Modal}
        >
          connect
        </Button>,
      );
    }
  }

  return (
    <div className="App">

      {/* ✏️ Edit the header and change the title to your project name */}
      <Header extra={[address && <Address address={address} ensProvider={mainnetProvider} blockExplorer={blockExplorer} />,...modalButtons]} />
      <BrowserRouter>

        <Switch>
          <Route exact path="/">
            <Signator mainnetProvider={mainnetProvider} injectedProvider={injectedProvider} address={address}/>
          </Route>
          <Route path="/view">
            <SignatorViewer mainnetProvider={mainnetProvider} injectedProvider={injectedProvider} address={address}/>
          </Route>
        </Switch>
      </BrowserRouter>

      <ThemeSwitch />

    </div>
  );
}


/*
  Web3 modal helps us "connect" external wallets:
*/
const web3Modal = new Web3Modal({
  // network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: INFURA_ID,
      },
    },
  },
});

const logoutOfWeb3Modal = async () => {
  await web3Modal.clearCachedProvider();
  window.localStorage.removeItem('walletconnect');
  setTimeout(() => {
    window.location.reload();
  }, 1);
};

export default App;
