"use client";
import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Dashboard = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (loading)
    return (
      <div className="flex min-h-screen flex-col items-center justify-center text-4xl p-24">
        <p>Loading...</p>
      </div>
    );

  if (!session) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center text-4xl p-24">
        <p>In order to access this page, please log in or register</p>
        <Link
          href="/login"
          className="mt-4 px-4 py-2 text-white bg-black rounded"
        >
          Log in
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center  text-4xl p-24">
      <div className="bg-black rounded-xl text-white p-8">
        You have now access to the dashboard page!
      </div>
    </div>
  );
};

export default Dashboard;
