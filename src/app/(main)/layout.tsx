import { ReactNode } from "react";
import {Navbar} from "./_components";

const AppLayout = ({ children }: { children: ReactNode }) => {
   return (
     <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
         {children}
      </main>
     </div> 
   );
};
export default AppLayout;
