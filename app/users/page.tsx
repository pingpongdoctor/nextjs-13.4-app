import styles from "./page.module.scss";
import getAllUser from "@/lib/getAllUser";
import Link from "next/link";

export default async function UsersPage() {
  //RUN THE FUNCTION GETALLUSER TO GET USERDATA FROM A PROMISE
  const userData: Promise<User[]> = getAllUser();

  //WAIT FOR THE PROMISE
  const users = await userData;

  return (
    <main className={styles.main}>
      <h1>Users</h1>
      <ul className={styles.user__list}>
        {users?.length > 0 &&
          users.map((user) => (
            <Link key={user.id} href={`/users/${user.id}`}>
              <li className={styles.user__item}>
                <p>UserId:{user.profile_id}</p>
                <p>UserAge:{user.age}</p>
              </li>
            </Link>
          ))}
      </ul>
    </main>
  );
}
