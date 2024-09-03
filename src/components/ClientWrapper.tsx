"use client";

import { ParallaxProvider } from "react-scroll-parallax";

export const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};
