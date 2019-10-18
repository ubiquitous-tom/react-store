import React from 'react';

import { Header } from '../header/Header';
import { Hero } from './hero/Hero';
import { Gift } from './gift/Gift';
import { Content } from './content/About';
import { Callout } from './callout/Content';
import { Footer } from '../footer/Footer';

export const Home: React.FC = () => {
  const cloudFrontCounry = 'US';
  return (
    <div className="home">
      <Header />
      <div className="page-wrap" id="contentSection">
        <Hero />
        <Callout />
        <Content />
        <Gift />
        {/*
        <div class="clearfix">
          <div class="description-bg" style="float: right"></div>
          <div class="asset-bg hidden-xs" style="float: left"></div>
        </div>
        */}
      </div>
      <Footer />
    </div>
  );
};
