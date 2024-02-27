"use client";
import { PurchaseButton } from "@/components/courses/purchase-button";
import { useGetProductsQuery } from "@/graphql/generated/graphql";
import { Skeleton } from "@repo/ui/components/ui/skeleton";

function CoursesComponent() {
  const { data, loading, error } = useGetProductsQuery();

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

  return (
    <div className="shadow overflow-hidden sm:rounded-md mt-8 ring-1 ring-slate-800 mb-8">
      <ul role="list" className="divide-y divide-slate-800">
        {data.products.map((product) => (
          <li key={product.id}>
            <div className="px-4 py-4 flex items-center sm:px-6">
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="truncate">
                  <div className="flex items-center space-x-3">
                    <p className="font-medium text-md text-white truncate">
                      {product.title}
                    </p>
                    <p className="ml-1 flex-shrink-0 font-normal text-gray-500 text-xs">
                      in <span className="italic">Programming</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-5 flex-shrink-0">
                <PurchaseButton productId={product.id} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesComponent;
