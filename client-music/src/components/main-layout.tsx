import React, {FC, ReactNode} from "react";
import Navbar from "@/components/navbar/navbar";
import Head from "next/head";

interface MainLayoutType {
  children: ReactNode
  title?: string
}

const MainLayout: FC<MainLayoutType> = ({children, title}) => {
  return (
    <div className={'app'}>
      <Head>
        <title>{title || 'Музыкальная площадка'}</title>
      </Head>
      <Navbar/>
      {children}
    </div>
  )
}

export default MainLayout