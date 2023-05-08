interface Props {
  teachersPromise: Promise<Teacher[]>;
}

export default async function TeachersOfUser({ teachersPromise }: Props) {
  const teachers = await teachersPromise;

  return (
    <>
      {teachers &&
        teachers.length > 0 &&
        teachers.map((teacher) => (
          <div key={teacher.id}>
            <p>Teacher name: {teacher.name}</p>
            <p>Teacher like: {teacher.like}</p>
          </div>
        ))}
    </>
  );
}
