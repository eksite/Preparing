import React, { Component } from "react";
import Header, {
  Logo,
  Tray,
  SmartProfile,
  SmartServices,
} from "@jetbrains/ring-ui/components/header/header";
import Auth from "@jetbrains/ring-ui/components/auth/auth";
import Footer from "@jetbrains/ring-ui/components/footer/footer";
import hubLogo from "@jetbrains/logos/hub/hub.svg";
import LoaderScreen from "@jetbrains/ring-ui/components/loader-screen/loader-screen";

import "./app.css";

export default class AppRoot extends Component {
  componentDidMount() {
    // You can uncomment this after registering your client as a Hub service
    // https://www.jetbrains.com/help/hub/2017.3/OAuth-2.0-Authorization.html#d79479e312
    // this.auth.init();
  }

  auth = new Auth({
    // clientId: <your client id here>
    serverUri: "https://hub.jetbrains.com", // replace with your Hub server
  });

  render() {
    return (
      <div>
        <Header>
          <a href="/">
            <Logo glyph={hubLogo} size={Logo.Size10} />
          </a>
          <Tray>
            <SmartServices auth={this.auth} />
            <SmartProfile auth={this.auth} />
          </Tray>
        </Header>
        <div className="app-content">"SMTH interesting 1321312"</div>
        <div>
          <LoaderScreen message={"den den den"} style={{ color: "red" }} />
        </div>
        <Footer />
      </div>
    );
  }
}
