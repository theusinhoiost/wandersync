import { findAllPublicPostsCached } from '@/lib/post/queries/public';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const posts = await findAllPublicPostsCached();
    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
