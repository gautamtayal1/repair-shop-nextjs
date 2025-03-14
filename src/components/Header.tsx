import { HomeIcon, File, UsersRound } from "lucide-react";
import Link from "next/link";
import { NavButton } from "./NavButton";
import { ModeToggle } from "./ModeToogle";


export default function Header() {
  return (
    <header className="animate-in bg-background px-4 py-2 h-12 sticky z-20">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
        <NavButton href= "/home" label="Home" icon={HomeIcon}/>  
        <Link href="/home" className="flex justify-center gap-2 ml-0" title="Home">
        <h1 className="font-bold">
          Computer Repair Shop
        </h1>
        </Link>
        </div>
          <div className="flex items-center">
          <NavButton href= "/tickets" label="Tickets" icon={File}/> <NavButton href= "/customers" label="Customers" icon={UsersRound}/> 
          <ModeToggle />
          </div> 
      </div> 
    </header>
    
  );
}