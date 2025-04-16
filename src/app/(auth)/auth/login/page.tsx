"use client";

import { Suspense } from "react";
import LoginTabs from "@/features/auth-common/ui/login/LoginTabs";

export default function LoginPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <LoginTabs />
    </Suspense>
  );
}
