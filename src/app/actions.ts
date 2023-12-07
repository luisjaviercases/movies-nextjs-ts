'use server';

import { cookies } from 'next/headers';

export default async function createCookie(name: string, value: string, options: object) {
  cookies().set({
    name,
    value,
    ...options,
  });
}
