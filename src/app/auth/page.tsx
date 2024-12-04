"use client";

import { useSearchParams } from "next/navigation";
import SignInCard from "./SignIn";
import SignUpCard from "./SignUp/page";

const AuthPage = () => {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "sign-in";
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-customBlack">
      {mode === "sign-in" ? <SignInCard /> : <SignUpCard />}
    </div>
  );
};

export default AuthPage;
