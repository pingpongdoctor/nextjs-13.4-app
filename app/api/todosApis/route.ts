import { NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
export async function GET() {
  try {
    const res = await fetch("http://localhost:8000/todos", {
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    console.log(e);
  }
}

// export async function POST(req: Request) {
//   try {
//     const data = readFileSync("./db.json", "utf-8");
//     const todos = JSON.parse(data);
//     //GET BODY
//     const { name } = await req.json();
//     if (name) {
//       const lastTodo = todos[todos.length - 1];
//       const newId = lastTodo.id + 1;
//       const newObj = { id: newId, name };
//       todos.push(newObj);
//       writeFileSync("./db.json", JSON.stringify(todos));
//       return NextResponse.json({ message: "New todos is added" });
//     } else {
//       //STRINGIFY DATA
//       return NextResponse.json({ message: "Name is required" });
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }
