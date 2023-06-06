import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "User Page",
  },
  alternates: {
    canonical: "/users",
    languages: {
      "en-CA": "en-CA/users",
    },
  },
};

interface Props {
  children: React.ReactNode;
  specialUser: React.ReactNode;
}

export default function UserLayout({ children, specialUser }: Props) {
  return (
    <>
      <div>
        <h1>User Header</h1>
      </div>
      {children}
      <div>
        <h1>User Footer</h1>
      </div>
    </>
  );
}
