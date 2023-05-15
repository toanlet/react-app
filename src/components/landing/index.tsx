import React, { useEffect, useState } from 'react';
import Slider from 'src/common/slider';

interface LandingProps {}

export const LandingPage: React.FC<LandingProps> = () => {
  const handleCurrentTime = () => {
    const current = Date.now();
    console.log('current', current);
  };

  useEffect(() => {
    window.addEventListener('mouseleave', handleCurrentTime);
  }, []);
  return (
    <div className="landing">
      <div className="header-landing">
        <Slider />
      </div>
      <div className="content-landing"></div>
      <div className="footer-landing"></div>
    </div>
  );
};
