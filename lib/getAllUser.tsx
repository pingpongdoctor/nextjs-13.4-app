//FUNCTION TO GET ALL USER WITH FETCH
export default async function getAllUser() {
  const res = await fetch("http://localhost:8000/user-infor/allusers");

  //USE THROW NEW ERROR TO HAULT THE CODE EXECUTION
  if (!res.ok) throw new Error("error get all users");

  //IF RES IS OK, RETURN THE RES.JSON()
  const users: User[] = await res.json();
  return users;
}
