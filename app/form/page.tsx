import { Metadata } from "next";
import FormComponent from "./components/FormComponent";

export const metadata: Metadata = {
  title: "Form Page",
};

export default function FormPage() {
  return (
    <main>
      <h1>Form to add new Teacher</h1>
      <FormComponent />
    </main>
  );
}
