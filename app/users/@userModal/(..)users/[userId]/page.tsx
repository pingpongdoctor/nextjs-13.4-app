import getAllUser from "@/lib/getAllUser";
import getOneUser from "@/lib/getOneUser";
import getTeachersOfUser from "@/lib/getTeachersOfUser";
import { Suspense } from "react";
import TeachersOfUser from "../../../[userId]/components/TeachersOfUser";
import SingleUser from "../../../[userId]/components/SingleUser";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import BackHomeBtn from "../../../[userId]/components/BackHomeBtn";
import Modal from "./components/Modal";

//REVALIDATE THE PAGE EACH 10-SECOND INTERVAL
//NEED TO NAVIGATE BACK TO THE PAGE TWO TIMES BEFORE THE DATA IS UPDATED

interface Props {
  params: {
    userId: number;
  };
}

//WE CAN DEFINE THE METADATA IN THE PAGE
//USE GENERATEMETADATA FUNCTION TO CREATE DYNAMIC METADATA
export async function generateMetadata({
  params: { userId },
}: Props): Promise<Metadata> {
  const singleUser: Promise<User | undefined> = getOneUser(userId); //NEXTJS WILL DEDUPLICATE THIS CALLED FUNCTION
  const user = await singleUser;

  //IF THE USERID IS NOT CORRECT, MEANING THAT THE USER OBJECT IS UNDEFINED, WE CHANGE THE TITLE OF METADATA
  if (!user) {
    return {
      title: "No user found",
    };
  }

  return { title: `This is the page of user ${user.profile_id}` };
}

//CREATE STATIC PARAMS TO CONVERT SSR PAGE TO SSG PAGE
//WHEN NEXTJS KNOW POSSIBLE PARAMS LIKE IDS, IT CAN PRERENDER PAGES AND CATCH THEM IN SERVERS FOR REUSING
export async function generateStaticParams() {
  //RETURN OBJECTS OF USERIDS
  const usersData: Promise<User[]> = getAllUser();
  const users = await usersData;

  return users.map((user) =>
    //REMEBER THAT THE PARAMS ARE ALWAYS STRING
    ({
      userId: user.profile_id.toString(),
    })
  );
}

export default async function UserPage({ params: { userId } }: Props) {
  const singleUser: Promise<User | undefined> = getOneUser(userId);
  const teachers: Promise<Teacher[]> = getTeachersOfUser(userId);
  //USE PROMISE ALL TO AVOID WATER FALL WHEN FETCHING DATA
  // const [userObj, teacherArr] = await Promise.all([singleUser, teachers]);

  //IF THE USERID IS NOT CORRECT, MEANING THAT THE USER OBJECT IS UNDEFINED, WE RUN THE NOTFOUND FUNCTION
  const userObj = await singleUser;
  if (!userObj) {
    return notFound();
  }

  return (
    <div>
      <Modal>
        <h1>This title is sent first to the client</h1>
        {/* USE SUSPENSE TO IMPLEMENT STREAMING */}
        {/* SEND THE USER INFORMATION CHUNK TO THE CLIENT FIRST WHILE WAITING FOR THE TEACHERS FULLY LOADED AND FOR THE TEACHER COMPONENT TO BE SENT TO THE CLIENT */}

        <h1>
          The chunks below are sent to client for React hydration after their
          data is fully loaded
        </h1>
        <Suspense fallback={<h2>Loading User...</h2>}>
          {/* @ts-expect-error Async Server Component */}
          <SingleUser userPromise={singleUser} />
        </Suspense>

        <Suspense fallback={<h2>Loading Teachers...</h2>}>
          {/* @ts-expect-error Async Server Component */}
          <TeachersOfUser teachersPromise={teachers} />
        </Suspense>

        {/* TRY TO BULD SMALL CLIENT COMPONENTS SO THAT WE CAN USE SERVER COMPONENTS MOSTLY */}
        {/* CLIENT COMPONENTS ALLOW ADDING WEBSITE INTERACTIVITY LIKE HOOK AND EVENT */}
      </Modal>
    </div>
  );
}
