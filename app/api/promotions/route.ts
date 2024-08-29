import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';
export async function GET() {
  const promotions = await prisma.specialOffers.findMany();
  return NextResponse.json(promotions);
}
