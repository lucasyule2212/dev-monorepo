"use client";
import { useGetProductsQuery } from "@/graphql/generated/graphql";
import { withApollo } from "@/lib/withApolloClient";
import { Skeleton } from "@repo/ui/components/ui/skeleton";
import { toast } from "sonner";

function CoursesComponent() {
  const { data, loading, error } = useGetProductsQuery();
  // const [createPurchase] = useCreatePurchaseMutation()

  async function handlePurchaseProduct(productId: string) {
    // await createPurchase({
    //   variables: {
    //     productId,
    //   }
    // })

    toast.success("Inscrição realizada com sucesso!");
  }

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
    <div className="shadow overflow-hidden sm:rounded-md mt-8 ring-1 ring-slate-800">
      <ul role="list" className="divide-y divide-slate-800">
        {data.products.map((product) => (
          <li key={product.id}>
            <div className="px-4 py-4 flex items-center sm:px-6">
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="truncate">
                  <div className="flex text-sm">
                    <p className="font-medium text-indigo-600 truncate">
                      {product.title}
                    </p>
                    <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                      em Programação
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-5 flex-shrink-0">
                <button
                  onClick={() => handlePurchaseProduct(product.id)}
                  className="px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700"
                >
                  Realizar inscrição
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withApollo(CoursesComponent);
