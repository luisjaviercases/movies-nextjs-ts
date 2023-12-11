'use server';

import { cookies } from 'next/headers';

export async function createCookie(name: string, value: string, options: object) {
  cookies().set({
    name,
    value,
    ...options,
  });
}

export async function removeCookie(name: string) {
  cookies().delete(name);
}
