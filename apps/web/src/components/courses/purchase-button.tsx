import { useCreatePurchaseMutation } from "@/graphql/generated/graphql";
import { Button } from "@repo/ui/components/ui/button";
import { Spinner } from "@repo/ui/components/ui/spinner";
import { toast } from "sonner";

interface PurchaseButtonProps {
  productId: string;
}
export function PurchaseButton({ productId }: PurchaseButtonProps) {
  const [createPurchase, { loading: createPurchasMutationLoading }] =
    useCreatePurchaseMutation({
      variables: {
        productId: "",
      },
    });

  async function handlePurchaseProduct(productId: string) {
    try {
      await createPurchase({
        variables: {
          productId,
        },
      });
      toast.success("Enrollment successful! 🎉");
    } catch (error) {
      toast.error("You are already enrolled in this course.");
    }
  }

  return (
    <Button
      onClick={() => handlePurchaseProduct(productId)}
      className="ring-1 ring-cyan-700 bg-slate-950 w-24"
    >
      {createPurchasMutationLoading ? <Spinner /> : "Enroll"}
    </Button>
  );
}
