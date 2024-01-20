import express from "express";
import { PrismaClient } from '@prisma/client'
import cors from "cors"

const prisma = new PrismaClient()
const app = express();
const port = 5000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use(express.json());
app.use(cors());

async function main() {
  // ... you will write your Prisma Client queries here
}

app.get("/", (req, res) => {
  const name = req.query.name || "Guest";
  res.json({ message: `Hello, ${name}!` });
});

app.get("/api/users/", async (req, res) => {
  try {
    const getAllUsers = await prisma.user.findMany();
    res.json(getAllUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})
app.get("/api/img/", async (req, res) => {
  try {
    const getAllImages = await prisma.image.findMany();
    res.json(getAllImages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.post("/api/body/", async (req, res) => {

  const { name, email, password, confirmPassword } = req.body
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "Please enter all required information!" })
  }

  try {
    const createdRow = await prisma.user.create({ data: { name: name, email: email, password: password, confirmPassword } });
    res.json(createdRow)
  } catch (error) {
    res.status(400).send({ message: error })
  }


});

app.listen(port, () => {
  console.log(`Server work on: http://localhost:${port}/ `);
});
