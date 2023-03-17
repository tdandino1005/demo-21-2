// importing the useQuery hook from Apollo Client
import { useQuery } from "@apollo/client";
// importing the THOUGHTS query from the graphql folder
import { THOUGHTS } from "../graphql/type-defs";

// exporting the Thoughts function
export default function App() {
  // using the useQuery hook to execute the THOUGHTS query
  const { loading, error, data } = useQuery(THOUGHTS);
  // if the data is loading, show a loading message
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  //  reurning data from the query in a list
  return data.thoughts.map(({ id, thoughtText, thoughtAuthor }) => (
    <ul key={id}>
      <li>{thoughtText}</li>
      <li>{thoughtAuthor}</li>
    </ul>
  ));
}
