"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Skeleton } from "@repo/ui/components/ui/skeleton";
import { LogIn, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const { user } = useUser();
  return (
    <div className="bg-slate-950/90 p-2 border-b border-b-slate-900 sticky top-0 z-50 backdrop-blur-md">
      <nav className="flex flex-1 items-center justify-between w-full md:w-auto py-2 px-8 sm:px-8">
        <Link href="/">
          <Image
            className="h-8 w-auto sm:h-8"
            height={200}
            width={200}
            src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg"
            alt=""
          />
        </Link>

        <div className="space-x-6 sm:flex md:ml-10 items-center">
          {user ? (
            <Link
              key="signout"
              href="/api/auth/logout"
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors bg-slate-950 rounded-md px-3 py-2 hover:bg-slate-800 ring-1 ring-slate-800"
            >
              <LogOut className="w-auto h-4" />
              Sign out
            </Link>
          ) : (
            <Link
              key="signin"
              href="/api/auth/login"
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors bg-slate-950 rounded-md px-3 py-1 hover:bg-slate-800 ring-slate-800"
            >
              <LogIn className="w-auto h-4" />
              Sign in
            </Link>
          )}
          {user?.picture ? (
            <Image
              className="hidden sm:block w-auto h-10 rounded-full"
              src={user?.picture || ""}
              height={200}
              width={200}
              alt=""
            />
          ) : (
            user && (
              <Skeleton className="hidden sm:block w-10 h-10 rounded-full" />
            )
          )}
        </div>
      </nav>
    </div>
  );
}
