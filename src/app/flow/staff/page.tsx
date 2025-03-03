"use server"
import prisma from "../../lib/db";

export default async function Posts() {
  const staff = await prisma.staff.findMany();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8">
        All Staff
      </h1>
      <ul className="max-w-2xl space-y-4">
        {staff.map((employee) => (
          <li key={employee.id} className="mb-2">
            {employee.firstName}
          </li>
        ))}
      </ul>
    </div>
  );
}