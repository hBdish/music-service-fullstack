import React, {FC, ReactNode} from "react";
import Navbar from "@/components/navbar/navbar";

interface MainLayoutType {
  children: ReactNode
}


const MainLayout: FC<MainLayoutType> = ({children}) => {
  return (
    <div className={'app'}>
      <Navbar/>
      {children}
    </div>
  )
}

export default MainLayout