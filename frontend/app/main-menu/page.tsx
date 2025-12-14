import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { UserRoundPlus, Bed, UsersRound, Ambulance, Cross, ClipboardMinus  } from "lucide-react"

const MainMenuPage = async () => {

   return (
      <div className="flex flex-col gap-4">
         {/* ผู้ป่วย */}
         <Card>
            <CardContent>
               {/* title */}
               <div className="flex gap-4 items-center">
                  {/* icon */}
                  <div className="bg-primary/20 h-16 w-16 rounded-2xl text-primary flex justify-center items-center">
                     <UsersRound size={36} />
                  </div>
                  {/* name & description */}
                  <div>
                     <div className="text-lg font-bold text-primary">ผู้ป่วย</div>
                     <div className="text-muted-foreground">เกี่ยวกับข้อมูลผู้ป่วย</div>
                  </div>
               </div>
               
               <Separator className="my-4"></Separator>

               {/* menu */}
               <div className="flex flex-row gap-4">
                  {/* ลงทะเบียนผู็ป่วย */}
                  <div className="h-40 w-60 shadow-lg rounded-xl flex flex-col justify-center items-center gap-2
                     hover:cursor-pointer hover:shadow-xl hover:shadow-primary/15  
                  ">
                     <UserRoundPlus size={60} className="text-primary"/>
                     <div>ลงทะเบียนผู้ป่วย</div>
                  </div>
                  {/* เตียงทั้งหมด */}
                  <div className="h-40 w-60 shadow-lg rounded-xl flex flex-col justify-center items-center gap-2
                     hover:cursor-pointer hover:shadow-xl hover:shadow-primary/15  
                  ">
                     <Bed size={60} className="text-primary"/>
                     <div>เตียงทั้งหมด</div>
                  </div>
                  {/* ผู้ป่วยทั้งหมด */}
                  <div className="h-40 w-60 shadow-lg rounded-xl flex flex-col justify-center items-center gap-2
                     hover:cursor-pointer hover:shadow-xl hover:shadow-primary/15  
                  ">
                     <UsersRound size={60} className="text-primary"/>
                     <div>ผู้ป่วยทั้งหมด</div>
                  </div>
                  {/* รับย้าย/ส่งต่อ */}
                  <div className="h-40 w-60 shadow-lg rounded-xl flex flex-col justify-center items-center gap-2
                     hover:cursor-pointer hover:shadow-xl hover:shadow-primary/15  
                  ">
                     <Ambulance size={60} className="text-primary"/>
                     <div>รับย้าย/ส่งต่อ</div>
                  </div>
               </div>
            </CardContent>
         </Card>

         {/* รักษา */}
         <Card>
            <CardContent>
               {/* title */}
               <div className="flex gap-4 items-center">
                  {/* icon */}
                  <div className="bg-blue-500/20 h-16 w-16 rounded-2xl text-blue-500 flex justify-center items-center">
                     <Cross size={36} />
                  </div>
                  {/* name & description */}
                  <div>
                     <div className="text-lg font-bold text-blue-500">รักษา</div>
                     <div className="text-muted-foreground">เกี่ยวกับข้อมูลการรักษา</div>
                  </div>
               </div>
               
               <Separator className="my-4"></Separator>

               {/* menu */}
               <div className="flex flex-row gap-4">
                  {/* ใบสั่งแพทย์ */}
                  <div className="h-40 w-60 shadow-lg rounded-xl flex flex-col justify-center items-center gap-2
                     hover:cursor-pointer hover:shadow-xl hover:shadow-blue-500/15  
                  ">
                     <ClipboardMinus size={60} className="text-blue-500"/>
                     <div>ใบสั่งแพทย์</div>
                  </div>
               </div>
            </CardContent>
         </Card>

         {/* ประวัติ */}
         <Card>
            <CardContent>
               {/* title */}
               <div className="flex gap-4 items-center">
                  {/* icon */}
                  <div className="bg-purple-600/20 h-16 w-16 rounded-2xl text-purple-600 flex justify-center items-center">
                     <UsersRound size={36} />
                  </div>
                  {/* name & description */}
                  <div>
                     <div className="text-lg font-bold text-purple-600">ผู้ป่วย</div>
                     <div className="text-muted-foreground">เกี่ยวกับข้อมูลผู้ป่วย</div>
                  </div>
               </div>
               
               <Separator className="my-4"></Separator>

               {/* menu */}
               <div className="flex flex-row gap-4">
                  {/* ลงทะเบียนผู็ป่วย */}
                  <div className="h-40 w-60 shadow-lg rounded-xl flex flex-col justify-center items-center gap-2
                     hover:cursor-pointer hover:shadow-xl hover:shadow-purple-600/15  
                  ">
                     <UserRoundPlus size={60} className="text-purple-600"/>
                     <div>ลงทะเบียนผู้ป่วย</div>
                  </div>
                  {/* เตียงทั้งหมด */}
                  <div className="h-40 w-60 shadow-lg rounded-xl flex flex-col justify-center items-center gap-2
                     hover:cursor-pointer hover:shadow-xl hover:shadow-purple-600/15  
                  ">
                     <Bed size={60} className="text-purple-600"/>
                     <div>เตียงทั้งหมด</div>
                  </div>
                  {/* ผู้ป่วยทั้งหมด */}
                  <div className="h-40 w-60 shadow-lg rounded-xl flex flex-col justify-center items-center gap-2
                     hover:cursor-pointer hover:shadow-xl hover:shadow-purple-600/15  
                  ">
                     <UsersRound size={60} className="text-purple-600"/>
                     <div>ผู้ป่วยทั้งหมด</div>
                  </div>
                  {/* รับย้าย/ส่งต่อ */}
                  <div className="h-40 w-60 shadow-lg rounded-xl flex flex-col justify-center items-center gap-2
                     hover:cursor-pointer hover:shadow-xl hover:shadow-purple-600/15
                  ">
                     <Ambulance size={60} className="text-purple-600"/>
                     <div>รับย้าย/ส่งต่อ</div>
                  </div>
               </div>
            </CardContent>
         </Card>

      </div>
      
   )
}

export default MainMenuPage
