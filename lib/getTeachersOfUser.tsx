export default async function getTeachersOfUser(userId: number) {
  //APPLY ISR TO MAKE THE FUNCTION RUN EACH 60 SECONDS (SSR) AND DURING 60 SECONDS, FETCHED DATA IS STORED TO BE REUSED (SSG)
  //ISR IS APPLIED TO BOOST THE WEBSITE PERFORMANCE AND WE USE IT MOSTLY IN THE FUNCTIONS THAT FETCH REGULARLY CHANGED DATA LIKE POSTS OR COMMENTS DATA
  //REVALIDATE CAN BE APPLIED FOR PAGE, LAYOUT AND FETCHING REQUEST AND THE WHOLE ROUTE WILL BE REVALIDATED
  //IF REVALIDATE ARE SET IN MULTIPLE PLACES, THE SMALLEST VALUE WILL BE APPLIED
  const res = await fetch(
    `http://localhost:8000/user-infor/${userId}/teachers`,
    //USING TAG TO IMPLEMENT ON-DEMAND PER-REQUEST REVALIDATION
    { next: { tags: ["teachers"], revalidate: 86400 } }
  );

  if (!res.ok) {
    throw new Error("get teachers error");
  }

  const data = await res.json();
  return data;
}
