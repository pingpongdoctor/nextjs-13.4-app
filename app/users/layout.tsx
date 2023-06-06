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
  userModal: React.ReactNode;
}

export default function UserLayout({
  children,
  specialUser,
  userModal,
}: Props) {
  return (
    <>
      <div>
        <h1>User Header</h1>
      </div>
      {children}
      {userModal}
      <div>
        <h1>User Footer</h1>
      </div>
    </>
  );
}
