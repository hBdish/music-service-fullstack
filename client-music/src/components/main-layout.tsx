import React, {FC, ReactNode} from "react";
import Navbar from "@/components/navbar";

interface MainLayoutType {
  children: ReactNode
}

const MainLayout: FC<MainLayoutType> = ({children}) => {
  return (
    <>
      <Navbar/>
        {children}
    </>
  )
}

export default MainLayout