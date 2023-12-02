import React, { useState, useContext } from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Meta from "../../components/Meta";
import { Metamask_comp_login } from "../../components/metamask/Metamask";

const Login = () => {
  
  const [itemActive, setItemActive] = useState(1);
  const tabItem = [
    {
      id: 1,
      text: "XDC",
    }
  ];

  return (
    <div>
      <Meta title="Login || Xhibiter | NFT Marketplace Next.js Template" />
      {/* <!-- Login --> */}
      <section className="relative h-screen">
        <div className="lg:flex lg:h-full">
          {/* <!-- Left --> */}
          <div className="relative text-center lg:w-1/2">
            <img
              src="/images/login.jpg"
              alt="login"
              className="absolute h-full w-full object-cover"
            />
            {/* <!-- Logo --> */}
            <Link href="/">
              <a className="relative inline-block py-36">
              <div className="hidden dark:block">
                 <p className="font-sans text-white text-5xl font-bold">CryptoGrow</p>
              </div>

              </a>
            </Link>
          </div>

          {/* <!-- Right --> */}
          <div className="relative flex items-center justify-center p-[10%] lg:w-1/2">
            <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
              <img
                src="/images/gradient_light.jpg"
                alt="gradient"
                className="h-full w-full"
              />
            </picture>

            <div className="w-full max-w-[25.625rem] text-center">
              <h1 className="text-jacarta-700 font-display mb-6 text-4xl dark:text-white">
                Sign in
              </h1>
              <p className="dark:text-jacarta-300 mb-10 text-lg leading-normal">
              Explore, Unlock, Reap: CryptoGrow awaits your growth in decentralized agriculture.             
              </p>

              {/* <!-- Tabs Nav --> */}
              <Tabs className="tabs ">
                <TabList className="no-scrollbar nav nav-tabs scrollbar-custom dark:border-jacarta-600 border-jacarta-100 mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b pb-px md:justify-center">
                  {tabItem.map(({ id, text, icon }) => {
                    return (
                      <Tab
                        className="nav-item"
                        key={id}
                        onClick={() => setItemActive(id)}
                      >
                        <button
                          className={
                            itemActive === id
                              ? "nav-link active hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white"
                              : "nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white"
                          }
                        >
                      

                          <span className="font-display text-base font-medium">
                            {text}
                          </span>
                        </button>
                      </Tab>
                    );
                  })}
                </TabList>

                {/* <!-- XDC --> */}
                <TabPanel>
                <button className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 mb-4 flex w-full items-center justify-center rounded-full border-2 bg-white py-4 px-8 text-center font-semibold transition-all hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent"       
                >
                      <img
                        src="/images/xdc.png"
                        className="mr-2.5 inline-block h-6 w-6"
                        alt=""
                      />
                      <span>XDC PAY</span>
                    </button>
                </TabPanel>
                {/* <!-- XDC end --> */}

       
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end login --> */}
    </div>
  );
};

export default Login;
