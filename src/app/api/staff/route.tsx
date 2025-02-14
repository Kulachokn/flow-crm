import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse } from 'next/server';

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     const staff = await prisma.staff.findMany();
//     res.json(staff);
//     console.log(res.json(staff));
//   }
// }

export async function GET() {
  try {
    const staff = await prisma.staff.findMany();
    // console.log(staff);
    return NextResponse.json({ staff }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
