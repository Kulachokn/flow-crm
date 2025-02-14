import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.staff.createMany({
    data: [
        {
            "firstName": "Ethan",
            "lastName": "Harris",
            "gender": "Male",
            "phoneNumber": "+1-555-123-4567",
            "email": "ethan.harris@example.com",
            "role": "Team Lead",
            "position": "Software Engineer"
          },
          {
            "firstName": "Isabella",
            "lastName": "Clark",
            "gender": "Female",
            "phoneNumber": "+1-555-234-5678",
            "email": "isabella.clark@example.com",
            "role": "Manager",
            "position": "Project Manager"
          },
          {
            "firstName": "Aiden",
            "lastName": "Lewis",
            "gender": "Male",
            "phoneNumber": "+1-555-345-6789",
            "email": "aiden.lewis@example.com",
            "role": "Analyst",
            "position": "Data Analyst"
          },
          {
            "firstName": "Charlotte",
            "lastName": "Lee",
            "gender": "Female",
            "phoneNumber": "+1-555-456-7890",
            "email": "charlotte.lee@example.com",
            "role": "Marketer",
            "position": "Marketing Specialist"
          },
          {
            "firstName": "Oliver",
            "lastName": "Walker",
            "gender": "Male",
            "phoneNumber": "+1-555-567-8901",
            "email": "oliver.walker@example.com",
            "role": "Product Manager",
            "position": "Product Owner"
          },
          {
            "firstName": "Amelia",
            "lastName": "Hall",
            "gender": "Female",
            "phoneNumber": "+1-555-678-9012",
            "email": "amelia.hall@example.com",
            "role": "Developer",
            "position": "Software Engineer"
          },
          {
            "firstName": "Mason",
            "lastName": "Allen",
            "gender": "Male",
            "phoneNumber": "+1-555-789-0123",
            "email": "mason.allen@example.com",
            "role": "Tester",
            "position": "Quality Assurance"
          },
          {
            "firstName": "Sophia",
            "lastName": "Young",
            "gender": "Female",
            "phoneNumber": "+1-555-890-1234",
            "email": "sophia.young@example.com",
            "role": "Analyst",
            "position": "Business Analyst"
          },
          {
            "firstName": "James",
            "lastName": "King",
            "gender": "Male",
            "phoneNumber": "+1-555-901-2345",
            "email": "james.king@example.com",
            "role": "Lead Designer",
            "position": "UI/UX Designer"
          },
          {
            "firstName": "Harper",
            "lastName": "Wright",
            "gender": "Female",
            "phoneNumber": "+1-555-012-3456",
            "email": "harper.wright@example.com",
            "role": "Engineer",
            "position": "Data Scientist"
          },
          {
            "firstName": "Lucas",
            "lastName": "Scott",
            "gender": "Male",
            "phoneNumber": "+1-555-123-4568",
            "email": "lucas.scott@example.com",
            "role": "Admin",
            "position": "System Administrator"
          },
          {
            "firstName": "Mia",
            "lastName": "Green",
            "gender": "Female",
            "phoneNumber": "+1-555-234-5679",
            "email": "mia.green@example.com",
            "role": "Developer",
            "position": "Software Engineer"
          },
          {
            "firstName": "Benjamin",
            "lastName": "Adams",
            "gender": "Male",
            "phoneNumber": "+1-555-345-6780",
            "email": "benjamin.adams@example.com",
            "role": "DevOps Specialist",
            "position": "DevOps Engineer"
          },
          {
            "firstName": "Ava",
            "lastName": "Nelson",
            "gender": "Female",
            "phoneNumber": "+1-555-456-7891",
            "email": "ava.nelson@example.com",
            "role": "Marketing Lead",
            "position": "Marketing Specialist"
          },
          {
            "firstName": "Daniel",
            "lastName": "Carter",
            "gender": "Male",
            "phoneNumber": "+1-555-567-8902",
            "email": "daniel.carter@example.com",
            "role": "Manager",
            "position": "Project Manager"
          },
          {
            "firstName": "Chloe",
            "lastName": "Mitchell",
            "gender": "Female",
            "phoneNumber": "+1-555-678-9013",
            "email": "chloe.mitchell@example.com",
            "role": "Analyst",
            "position": "Data Analyst"
          },
          {
            "firstName": "Evelyn",
            "lastName": "Perez",
            "gender": "Female",
            "phoneNumber": "+1-555-789-0124",
            "email": "evelyn.perez@example.com",
            "role": "Tester",
            "position": "Quality Assurance"
          },
          {
            "firstName": "Henry",
            "lastName": "Roberts",
            "gender": "Male",
            "phoneNumber": "+1-555-890-1235",
            "email": "henry.roberts@example.com",
            "role": "Senior Developer",
            "position": "Software Engineer"
          },
          {
            "firstName": "Sofia",
            "lastName": "Ramirez",
            "gender": "Female",
            "phoneNumber": "+1-555-901-2346",
            "email": "sofia.ramirez@example.com",
            "role": "Product Manager",
            "position": "Product Owner"
          },
          {
            "firstName": "Sebastian",
            "lastName": "Turner",
            "gender": "Male",
            "phoneNumber": "+1-555-012-3457",
            "email": "sebastian.turner@example.com",
            "role": "Analyst",
            "position": "Business Analyst"
          },
          {
            "firstName": "Avery",
            "lastName": "Phillips",
            "gender": "Female",
            "phoneNumber": "+1-555-123-4569",
            "email": "avery.phillips@example.com",
            "role": "Engineer",
            "position": "Data Scientist"
          },
          {
            "firstName": "Carter",
            "lastName": "Campbell",
            "gender": "Male",
            "phoneNumber": "+1-555-234-5670",
            "email": "carter.campbell@example.com",
            "role": "Admin",
            "position": "System Administrator"
          },
          {
            "firstName": "Ella",
            "lastName": "Parker",
            "gender": "Female",
            "phoneNumber": "+1-555-345-6781",
            "email": "ella.parker@example.com",
            "role": "Designer",
            "position": "UI/UX Designer"
          },
          {
            "firstName": "Dylan",
            "lastName": "Edwards",
            "gender": "Male",
            "phoneNumber": "+1-555-456-7892",
            "email": "dylan.edwards@example.com",
            "role": "DevOps Specialist",
            "position": "DevOps Engineer"
          },
          {
            "firstName": "Grace",
            "lastName": "Foster",
            "gender": "Female",
            "phoneNumber": "+1-555-567-8903",
            "email": "grace.foster@example.com",
            "role": "Marketing Lead",
            "position": "Marketing Specialist"
          },
          {
            "firstName": "Jack",
            "lastName": "Collins",
            "gender": "Male",
            "phoneNumber": "+1-555-678-9014",
            "email": "jack.collins@example.com",
            "role": "Analyst",
            "position": "Data Analyst"
          },
          {
            "firstName": "Zoe",
            "lastName": "Rivera",
            "gender": "Female",
            "phoneNumber": "+1-555-789-0125",
            "email": "zoe.rivera@example.com",
            "role": "Project Lead",
            "position": "Project Manager"
          },
          {
            "firstName": "Liam",
            "lastName": "Hayes",
            "gender": "Male",
            "phoneNumber": "+1-555-890-1236",
            "email": "liam.hayes@example.com",
            "role": "Senior Developer",
            "position": "Software Engineer"
          },
          {
            "firstName": "Madison",
            "lastName": "Cooper",
            "gender": "Female",
            "phoneNumber": "+1-555-901-2347",
            "email": "madison.cooper@example.com",
            "role": "Tester",
            "position": "Quality Assurance"
          },
          {
            "firstName": "Ryan",
            "lastName": "Morgan",
            "gender": "Male",
            "phoneNumber": "+1-555-012-3458",
            "email": "ryan.morgan@example.com",
            "role": "Analyst",
            "position": "Business Analyst"
          },
          {
            "firstName": "Victoria",
            "lastName": "Murphy",
            "gender": "Female",
            "phoneNumber": "+1-555-123-4570",
            "email": "victoria.murphy@example.com",
            "role": "Lead Data Scientist",
            "position": "Data Scientist"
          }
        
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
