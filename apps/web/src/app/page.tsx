// import { withApollo } from '@/lib/withApolloClient';
import { getSession } from "@auth0/nextjs-auth0";
import {
  Banknote as CashIcon,
  MessageSquare as ChatIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  ClockIcon,
  FileText as DocumentTextIcon,
  BadgeInfo as SupportIcon,
} from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const advantages = [
  {
    name: "Suport 1-1",
    description:
      "Receive personalized support from our team of experts to help you with any questions or problems you may have.",
    icon: SupportIcon,
  },
  {
    name: "Conclusion certificate",
    description:
      "Receive a certificate of completion at the end of each course to prove your knowledge and skills to your future employers.",
    icon: DocumentTextIcon,
  },
  {
    name: "Students community",
    description:
      "Join our community of students to share your knowledge, ask questions and make friends with people from all over the world.",
    icon: ChatIcon,
  },
  {
    name: "Practical challenges",
    description:
      "Put your knowledge into practice by solving real-world challenges and problems to improve your skills and knowledge.",
    icon: CheckCircleIcon,
  },
  {
    name: "Market recommendations",
    description:
      "Receive recommendations from our team of experts on the best courses to take to improve your skills and knowledge in the market.",
    icon: CashIcon,
  },
  {
    name: "Lifetime access",
    description:
      "Get lifetime access to all the courses you purchase and all the updates and new content we add to them over time.",
    icon: ClockIcon,
  },
];

export async function handleAuth(req: NextRequest, res: NextResponse) {
  const session = await getSession(req, res);

  if (session) {
    redirect("/home");
  }
}

async function Home(req: NextRequest, res: NextResponse) {
  // await handleAuth(req, res);

  return (
    <>
      <div className="bg-slate-950">
        <div className="relative overflow-hidden">
          <main>
            <div className="pt-10 bg-slate-950 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div className="lg:py-24">
                      <a
                        href="#"
                        className="inline-flex items-center text-white bg-slate-950 ring-1 ring-slate-800 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                      >
                        <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                          We're hiring!
                        </span>
                        <span className="ml-4 text-sm">
                          Check the open positions
                        </span>
                        <ChevronRightIcon
                          className="ml-2 w-5 h-5 text-gray-500"
                          aria-hidden="true"
                        />
                      </a>
                      <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                        <span className="block">#1 Open-source</span>
                        <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                          courses <span className="text-white">platform</span>
                        </span>
                      </h1>
                      <p className="text-base text-slate-600 sm:text-xl lg:text-lg xl:text-xl">
                        We offer the best courses for you to learn the latest
                        technologies and keep your skills up to date.
                      </p>
                    </div>
                  </div>
                  <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                      <Image
                        width={1000}
                        height={1000}
                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src="/app-launch.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative py-16 sm:py-24 lg:py-32">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
                  We have all you need
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Our advantages
                </p>
                <div className="mt-12">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {advantages.map((advantage) => (
                      <div key={advantage.name} className="pt-6">
                        <div className="flow-root ring-1 ring-slate-900 rounded-lg px-6 pb-8 min-h-64">
                          <div className="-mt-6">
                            <div>
                              <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-slate-900 to-slate-950 rounded-md shadow-lg">
                                <advantage.icon
                                  className="h-6 w-6 text-white"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            <h3 className="mt-8 text-lg font-medium text-white tracking-tight">
                              {advantage.name}
                            </h3>
                            <p className="mt-5 text-base text-gray-500">
                              {advantage.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
