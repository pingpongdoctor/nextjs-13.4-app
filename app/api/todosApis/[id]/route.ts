import { NextResponse } from "next/server";

interface Props {
  params: {
    id: string;
  };
}

export async function DELETE(req: Request, { params }: Props) {
  try {
    const id = params.id;
    if (id) {
      await fetch(`http://localhost:8000/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return NextResponse.json({ message: "todo is deleted" });
    } else {
      return NextResponse.json({ message: "id is required" });
    }
  } catch (e) {
    console.log(e);
  }
}
