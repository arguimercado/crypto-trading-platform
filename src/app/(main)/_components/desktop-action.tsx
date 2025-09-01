import { ThemeToggle } from "@/components/buttons/theme-toggle";
import { Button } from "@/components/ui/button";

const DesktopActionComponent = () => {
   return (
      <>
         {/* Desktop Actions */}
         <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="h-9">
               Log In
            </Button>
            <Button size="sm" className="h-9">
               Sign Up
            </Button>
            <ThemeToggle />
         </div>
      </>
   );
};
export default DesktopActionComponent;
