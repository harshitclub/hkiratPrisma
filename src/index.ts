import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
  });
  console.log(res);
}

// insertUser("harshitclub", "Harshit@123", "Harshit", "Kumar");

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
}

// updateUser("harshitclub", {
//   firstName: "Abhishek",
//   lastName: "Kumar",
// });

async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });
  console.log(user);
}

// getUser("harshitclub");

async function createTodo(userId: number, title: string, description: string) {
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      userId,
    },
  });
  console.log(todo);
}

// createTodo(1, "go to gym", "Harshit kumar going to gym");

async function getTodos(userId: number) {
  const todos = await prisma.todo.findMany({
    where: { userId: userId },
  });
  console.log(todos);
}

// getTodos(1);

async function getTodosAndUserDetails(userId: number) {
  const user = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
    select: {
      user: true,
      title: true,
      description: true,
    },
  });
  console.log(user);
}

getTodosAndUserDetails(1);
