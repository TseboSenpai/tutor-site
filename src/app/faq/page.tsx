import type { Metadata } from "next";
import FaqList from "./faq-list";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about grades, subjects, session formats and how tutors are selected.",
};

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-[760px] px-8 pt-16 pb-24">
      <h1 className="mb-9 font-serif text-[38px] font-bold">
        Frequently Asked Questions
      </h1>
      <FaqList />
    </main>
  );
}
