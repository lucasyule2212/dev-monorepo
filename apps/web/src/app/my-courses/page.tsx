import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Metadata } from "next";
import EnrollsComponent from "./enrolls-component";

export const metadata: Metadata = {
  title: "My Courses - Workflow",
};

export default withPageAuthRequired(async function Courses() {
  return (
    <main>
      <div className="relative overflow-hidden ">
        <main className="py-20 max-w-7xl mx-auto ">
          <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
              Study
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              My Courses
            </p>
          </div>
          <EnrollsComponent />
        </main>
      </div>
    </main>
  );
});
