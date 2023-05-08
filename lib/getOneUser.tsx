export default async function getOneUser(userId: number) {
  const res = await fetch(
    `http://localhost:8000/user-infor/singleuser/${userId}`
  );

  if (!res.ok) {
    return undefined;
  }

  const user: User = await res.json();

  return user;
}
