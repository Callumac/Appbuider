import Mega from 'mega.js';
import { NextResponse } from 'next/server';
import { encryptData } from '@/lib/auth';

const mega = Mega({
  email: process.env.MEGA_EMAIL,
  password: process.env.MEGA_PASSWORD
});

export async function POST(req: Request) {
  const { data, filename } = await req.json();
  try {
    const encrypted = encryptData(JSON.stringify(data));
    const file = await mega.upload(filename, Buffer.from(encrypted));
    return NextResponse.json({ success: true, url: mega.getDownloadLink(file) });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Upload failed' }, { status: 500 });
  }
}
