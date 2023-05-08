import styles from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UserPage",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
