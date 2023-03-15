import { useQuery } from "@apollo/client";
import { THOUGHTS } from "./graphql/queries";

export default function App() {
  const { loading, error, data } = useQuery(THOUGHTS);

  return <h1>Hello World</h1>;
}
