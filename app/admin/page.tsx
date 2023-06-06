import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Admin Page" },
  robots: {
    index: false,
    nocache: true,
  },
};

export default function page() {
  return <div>Admin Page</div>;
}
