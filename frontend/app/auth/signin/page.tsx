'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { LogIn, Link } from "lucide-react"
import { useActionState, useEffect, useState } from "react"
import { Separator } from "@/components/ui/separator"
import signinAction from "./action-signin"
import Form from 'next/form'
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const Page = () => {

   const router = useRouter()

   const [termState, setTermState] = useState(false)
   const [actionState, formAction] = useActionState(signinAction, {success: false, message: ''})

   useEffect(()=>{
      if(actionState.message){
         if(actionState.success){
            toast.success(actionState.message)
            router.push('/')
         }else{
            toast.error(actionState.message)
         }
      }
   }, [actionState, router])

   return (
      <Card className="border-0 mx-auto shadow-2xl
         lg:w-4xl
      ">
         <CardContent className="flex flex-row justify-between gap-2">

            {/* LOGO */}
            <div>
               <Image src={'/image/Logo.png'} alt="Logo" width={450} height={450}></Image>
            </div>

            {/* Form */}
            <Form action={formAction} className="flex flex-col justify-center items-center">

               {/* header */}
               <div className="space-y-2">
                  <div className="text-primary font-extrabold text-2xl text-center">เข้าสู่ระบบ</div>
                  <div className="text-muted-foreground text-center text-sm">กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ</div>
               </div>
               
               {/* form */}
               <div className="mt-8 flex flex-col gap-y-4 justify-center items-center">
                  {/* input */}
                  <div className="flex flex-col gap-y-4 w-full">
                     <Input name="user_name" placeholder="อีเมล" className="h-12 hover:border-primary"></Input>
                     <Input name="password" type="password" placeholder="รหัสผ่าน" className="h-12 hover:border-primary"></Input>
                  </div>
                  {/* term */}
                  <div className="flex gap-3">
                     <Checkbox id="term" checked={termState} onCheckedChange={(e)=>setTermState(e === true)} className="hover:cursor-pointer"></Checkbox>
                     <Label htmlFor="term" className="hover:cursor-pointer">
                        ข้าพเจ้าได้อ่าน เข้าใจรายละเอียด และยอมรับข้อตกลงการใช้บริการ
                     </Label>
                  </div>
                  {/* btn */}
                  <Button className="text-center hover:cursor-pointer mt-4 w-80 h-10"
                     disabled={!termState}
                  >
                     <LogIn />
                     <div>เข้าสู่ระบบ</div>
                  </Button>

                  <div className="flex justify-center items-center gap-2">
                     <Separator></Separator>
                     <div className="text-muted-foreground">หรือ</div>
                     <Separator></Separator>
                  </div>

                  <Button className="text-center hover:cursor-pointer w-80 h-10"
                     disabled={!termState}
                  >
                     <Link />
                     <div>Single Sign-on</div>
                  </Button>
               </div>

            </Form>

         </CardContent>
      </Card>
   )
}

export default Page
