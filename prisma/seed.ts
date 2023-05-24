// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: 'thor@gmail.io' },
    update: {},
    create: {
      email: 'thor@gmail.io',
      name: 'thor',
    },
  });
  const user2 = await prisma.user.upsert({
    where: { email: 'flash@gmail.io' },
    update: {},
    create: {
      email: 'flash@gmail.io',
      name: 'flash',
    },
  });

  console.log({ user1, user2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
