import { Metadata } from "next";
import RegisterInterest from "@/features/home/components/RegisterInterest";

export const metadata: Metadata = {
  title: "Register Your Interest | Mountain View",
  description:
    "Join the Mountain View community. Register your interest today to learn more about our luxury residences and resorts across Egypt.",
};

export default function CalendlyPage() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <RegisterInterest />
    </main>
  );
}
