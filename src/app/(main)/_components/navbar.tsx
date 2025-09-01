import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { DesktopActionComponent, MobileActionComponent } from "./";

const navItems = [
   {
      label: "Buy Crypto",
      hasDropdown: true,
      items: ["P2P Trading", "Instant Buy"],
   },
   {
      label: "Ecosystem",
      hasDropdown: true,
      items: ["DeFi", "NFT", "Gaming", "Web3"],
   },
   {
      label: "Institutions",
      hasDropdown: true,
      items: ["Corporate", "Professional", "API"],
   },
   {
      label: "Payments",
      hasDropdown: true,
      items: ["Send Money", "Pay Bills", "Mobile Load"],
   },
   {
      label: "Learn",
      hasDropdown: true,
      items: ["Academy", "Research", "News"],
   },
];

const Navbar = () => {
   return (
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
         <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
               {/* Logo */}
               <div className="flex items-center space-x-8">
                  <a href="/" className="flex items-center space-x-2">
                     <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">P</span>
                     </div>
                     <span className="font-bold text-xl">wallet.ph</span>
                  </a>

                  {/* Desktop Navigation */}
                  <div className="hidden lg:flex items-center space-x-1">
                     {navItems.map((item) => (
                        <div key={item.label}>
                           {item.hasDropdown ? (
                              <DropdownMenu>
                                 <DropdownMenuTrigger asChild>
                                    <Button
                                       variant="ghost"
                                       className="h-9 px-3"
                                    >
                                       {item.label}
                                       <ChevronDown className="ml-1 h-4 w-4" />
                                    </Button>
                                 </DropdownMenuTrigger>
                                 <DropdownMenuContent
                                    align="start"
                                    className="w-48"
                                 >
                                    {item.items?.map((subItem) => (
                                       <DropdownMenuItem key={subItem}>
                                          {subItem}
                                       </DropdownMenuItem>
                                    ))}
                                 </DropdownMenuContent>
                              </DropdownMenu>
                           ) : (
                              <Button variant="ghost" className="h-9 px-3">
                                 {item.label}
                              </Button>
                           )}
                        </div>
                     ))}
                  </div>
               </div>

               {/* Right side actions */}
               <div className="flex items-center space-x-4">
                  <DesktopActionComponent />
                  <MobileActionComponent navItems={navItems} />
               </div>
            </div>
         </div>
      </nav>
   );
};
export default Navbar;
