'use server'

import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';

type SigninState = {
  success: boolean;
  message: string;
};

const signinAction = async (
  _prev: SigninState,
  formData: FormData
): Promise<SigninState> => {
  try {
    const cookieStore = await cookies();

    const input_data = {
      user_name: formData.get('user_name') as string,
      password: formData.get('password') as string | null,
    };

    if (!input_data.user_name || !input_data.password) {
      return {
        success: false,
        message: 'ชื่อผู้ใช้ หรือรหัสผ่านไม่ถูกต้อง',
      };
    }

    const response = await axios.post(
      `${process.env.STRAPI_BASE_URL}/api/auth/local`,
      {
        identifier: input_data.user_name,
        password: input_data.password,
      }
    );

    // axios success (2xx) เท่านั้นถึงจะมาถึงจุดนี้
    const jwt = (response?.data as any)?.jwt;

    if (!jwt) {
      // เคสแปลก ๆ ที่ login ผ่านแต่ไม่มี jwt
      const errMsg =
        (response?.data as any)?.error?.message ||
        'Login failed (no token returned)';
      return {
        success: false,
        message: errMsg,
      };
    }

    // เซ็ต cookie เก็บ token
    cookieStore.set('token', jwt, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    });

    return {
      success: true,
      message: 'Login success',
    };
  } catch (error) {
    // แปลง error เป็น AxiosError ก่อน เพื่อให้ TS ยอมให้ใช้ response ได้
    const err = error as AxiosError<any>;
    const errData = err.response?.data as any;

    const errMsg =
      errData?.error?.message || // รูปแบบ Strapi
      errData?.message || // เผื่อบาง config
      err.message || // axios message เช่น "Request failed with status code 400"
      'Something went wrong. Please try again later!';

    // log ไว้ debug ฝั่ง server (optional)
    console.error('Login error:', {
      status: err.response?.status,
      data: errData,
      message: errMsg,
    });

    // ❗ ตรงนี้ “return” เท่านั้น ห้าม throw
    return {
      success: false,
      message: errMsg,
    };
  }
};

export default signinAction;
