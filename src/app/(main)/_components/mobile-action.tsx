import { ThemeToggle } from "@/components/buttons/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";

const MobileActionComponent = ({navItems} : {navItems: {label: string, hasDropdown: boolean}[]}) => {
   return (
      <>
         {/* Mobile Menu */}
         <div className="md:hidden">
            <Sheet>
               <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                     <Menu className="h-5 w-5" />
                  </Button>
               </SheetTrigger>
               <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                     <div className="flex flex-col space-y-2">
                        <Button className="w-full justify-start">
                           Sign Up
                        </Button>
                        <Button
                           variant="outline"
                           className="w-full justify-start"
                        >
                           Log In
                        </Button>
                     </div>
                     <div className="border-t pt-4">
                        {navItems.map((item) => (
                           <Button
                              key={item.label}
                              variant="ghost"
                              className="w-full justify-start"
                           >
                              {item.label}
                              {item.hasDropdown && (
                                 <ChevronDown className="ml-auto h-4 w-4" />
                              )}
                           </Button>
                        ))}
                     </div>
                     <div className="border-t pt-4 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                           Theme
                        </span>
                        <ThemeToggle />
                     </div>
                  </div>
               </SheetContent>
            </Sheet>
         </div>
      </>
   );
};
export default MobileActionComponent;
