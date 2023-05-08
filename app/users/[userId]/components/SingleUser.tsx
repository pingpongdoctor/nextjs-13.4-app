interface Props {
  userPromise: Promise<User | undefined>;
}

export default async function SingleUser({ userPromise }: Props) {
  const userObj = await userPromise;
  return (
    <>
      {userObj && (
        <div>
          <p>User id: {userObj.profile_id}</p>
          <p>age: {userObj.age}</p>
        </div>
      )}
    </>
  );
}
