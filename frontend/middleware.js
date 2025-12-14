import { NextResponse } from "next/server";

export async function middleware(request) {

   const res = NextResponse.next()

   try {
      const token = request.cookies.get('token')
      if (!token) {
         // ไม่มี cookie → เด้งกลับหน้าแรก
         return NextResponse.redirect(new URL('/auth/signin', request.url));
      }
      let response = await fetch(`${process.env.STRAPI_BASE_URL}/api/users/me`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token.value}`
         }
      })

      if(!response.ok){
         throw new Error('Login fail')
      }

      const responseJSON = await response.json()
      res.headers.set('users', JSON.stringify({email: responseJSON.email}))

      return res
      
   }catch(err){
      console.log(err);
      return NextResponse.redirect(new URL('/auth/signin', request.url))
   }
}

export const config = {
   matcher: '/main-menu/:path*'
}