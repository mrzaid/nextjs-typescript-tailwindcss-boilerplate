import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import Services from "./Services";
import FindUs from "./FindUs";
import WeFresh from "./WeFresh";
import { Freshmart } from "./Freshmart";

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <main className="">{children}</main>
      <HeroBanner />
      <Services />
      <Freshmart />
      <FindUs />
      <WeFresh />
      {/* <AddedComponent/> */}
      {/* <AddedComponent/> */}

      {/* <AddedComponent/> */}
      {/* <AddedComponent/> */}
      {/* <AddedComponent/> */}
      {/* <AddedComponent/> */}

      {/* <AddedComponent/> */}
    </div>
  );
}

export default Layout;
