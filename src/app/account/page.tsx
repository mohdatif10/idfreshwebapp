import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Account | iD Fresh",
};

export default function AccountPage() {
  return (
    <ComingSoon
      emoji="👤"
      label="Account"
      title="Sign-in and accounts are coming soon"
      description="Save favourite recipes, track orders, and manage your details once the iD Fresh account backend is live."
    />
  );
}
