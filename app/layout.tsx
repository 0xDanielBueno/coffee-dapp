import { SpeedInsights } from "@vercel/speed-insights/next";
import React, { JSX } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }): JSX.Element => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Coffee DApp</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
