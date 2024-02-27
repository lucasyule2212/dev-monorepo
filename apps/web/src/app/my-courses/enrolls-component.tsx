"use client";
import { useMeQuery } from "@/graphql/generated/graphql";
import { Button } from "@repo/ui/components/ui/button";
import { Skeleton } from "@repo/ui/components/ui/skeleton";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const applicants = [
  {
    name: "Emily Selman",
    email: "emily.selman@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Emma Dorsey",
    email: "emma.dorsey@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default function EnrollsComponent() {
  const { data, loading, error } = useMeQuery();

  if (loading || !data) {
    return (
      <div className="shadow overflow-hidden sm:rounded-md mt-8 ring-1 ring-slate-800">
        <ul role="list" className="divide-y divide-slate-800">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="truncate">
                    <div className="flex flex-col gap-2 text-sm">
                      <Skeleton className="h-4 w-56" />
                      <Skeleton className="h-4 w-44" />
                    </div>
                  </div>
                </div>
                <div className="ml-5 flex-shrink-0">
                  <Skeleton className="h-8 w-24" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data.me.enrollment.length === 0) {
    return (
      <div className="shadow flex justify-center items-center overflow-hidden sm:rounded-md mt-8 ring-1 ring-slate-800 p-4">
        <h1 className="text-slate-500 text-xl font-bold">
          You are not enrolled in any courses
        </h1>
      </div>
    );
  }

  return (
    <div className="shadow overflow-hidden sm:rounded-md mt-8 ring-1 ring-slate-800">
      <ul role="list" className="divide-y divide-slate-800">
        {data?.me.enrollment.map((enrollment) => (
          <li key={enrollment.id}>
            <div className="px-4 py-4 flex items-center sm:px-6">
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="truncate">
                  <div className="flex items-center space-x-3">
                    <p className="font-medium text-md text-white truncate">
                      {enrollment.course.title}
                    </p>
                    <p className="ml-1 flex-shrink-0 font-normal text-gray-500 text-xs">
                      in <span className="italic">Programming</span>
                    </p>
                  </div>
                  <div className="mt-2 flex">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <p>
                        Classes begin at{" "}
                        <time dateTime={enrollment.createdAt}>
                          {dateFormatter.format(new Date(enrollment.createdAt))}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                  <div className="flex overflow-hidden -space-x-1">
                    {applicants.map((applicant) => (
                      <Image
                        key={applicant.email}
                        className="inline-block h-6 w-6 rounded-full"
                        src={applicant.imageUrl}
                        alt={applicant.name}
                        width={200}
                        height={200}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="ml-5 flex-shrink-0">
                <Link href={`/app/courses/${enrollment.course.slug}`}>
                  <Button className="ring-1 ring-cyan-700 bg-slate-950 w-24 rounded-md">
                    {" "}
                    Watch
                  </Button>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
