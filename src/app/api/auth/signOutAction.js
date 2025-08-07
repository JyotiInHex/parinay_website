'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signOutAction() {
    const cookieStore = await cookies();

    cookieStore.set('auth_token', '', {
        maxAge: 0,
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'Lax',
    });

    cookieStore.set('toastMsg', '404');

    redirect('/signIn');
}
