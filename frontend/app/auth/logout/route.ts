import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();

  // ลบ token (HttpOnly)
  cookieStore.delete('token');

  // เด้งไปหน้า signin
  return NextResponse.redirect(new URL('/auth/signin', request.url));
}
