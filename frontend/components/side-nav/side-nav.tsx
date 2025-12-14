'use client'

import Image from "next/image"
import { Button } from "../ui/button"
import { House, Bed, UsersRound, ArrowUpDown, ClipboardMinus, ContactRound, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const SideNav = () => {

const router = useRouter();

   const handleLogoutClick = () => {
      toast.success("ออกจากระบบสำเร็จ");
      router.push("/auth/logout");   // ไปให้ server เคลียร์ cookie
   };
   

   return (
      <div className='fixed left-0 h-svh top-0 w-60 z-50 bg-background shadow 
         flex flex-col pb-4
      '>
         {/* logo */}
         <div className="h-20 w-60 flex justify-center items-center">
            <Image alt="miniLogo" src={'/image/mini_logo.png'} width={120} height={40} className="h-12 w-50"></Image>
         </div>

         {/* menu */}
         <div className="w-full p-4 flex flex-col gap-2">
            <Button className="bg-background text-muted-foreground text-xl h-12 w-full rounded-xl justify-start
               hover:cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:text-primary 
            ">
               <House size={36}/>
               หน้าหลัก
            </Button>
            <Button className="bg-background text-muted-foreground text-xl h-12 w-full rounded-xl justify-start
               hover:cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:text-primary
            ">
               <House size={36}/>
               แดชบอร์ด
            </Button>
            <Button className="bg-background text-muted-foreground text-xl h-12 w-full rounded-xl justify-start
               hover:cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:text-primary
            ">
               <Bed size={36}/>
               เตียงทั้งหมด
            </Button>
            <Button className="bg-background text-muted-foreground text-xl h-12 w-full rounded-xl justify-start
               hover:cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:text-primary
            ">
               <UsersRound size={36} />
               ผู้ป่วยทั้งหมด
            </Button>
            <Button className="bg-background text-muted-foreground text-xl h-12 w-full rounded-xl justify-start
               hover:cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:text-primary
            ">
               <ArrowUpDown size={36} />
               รับย้าย/ส่งต่อ
            </Button>
            <Button className="bg-background text-muted-foreground text-xl h-12 w-full rounded-xl justify-start
               hover:cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:text-primary
            ">
               <ClipboardMinus size={36} />
               ใบสั่งแพทย์
            </Button>
            <Button className="bg-background text-muted-foreground text-xl h-12 w-full rounded-xl justify-start
               hover:cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:text-primary
            ">
               <ContactRound size={36} />
               บุคลากร
            </Button>
         </div>

         {/* Footer */}
         <div className="w-full p-4 flex flex-col gap-2 mt-auto">
            <Button className="text-xl h-12 w-full rounded-xl
               hover:cursor-pointer hover:shadow-lg
            " variant={'destructive'} onClick={()=>{handleLogoutClick()}}>
               <LogOut size={36} />
               ออกจากระบบ
            </Button>
         </div>
      </div>
   )
}

export default SideNav
