"use client";

import { useSearchParams } from "next/navigation";

import { signIn } from "next-auth/react";

import ColorButton from "@/components/ui/ColorButton";

export default function SiginInPage() {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "";

  return (
    <ColorButton
      text="Sign in with Goole"
      onClick={() => signIn("google", { callbackUrl })}
    />
  );
}
