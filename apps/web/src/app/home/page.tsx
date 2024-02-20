import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import QueryComponent from "./query-component";

export default withPageAuthRequired(async function Home() {
  return (
    <main>
      Homepage
      <QueryComponent />
    </main>
  );
});
