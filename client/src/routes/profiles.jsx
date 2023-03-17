// import { useQuery } from "@apollo/client";
import { useQuery } from "@apollo/client";
// import { PROFILES } from "../graphql/queries";
import { PROFILES } from "../graphql/type-defs";

// routing for profiles
export default function Profiles() {
  const { loading, error, data } = useQuery(PROFILES);
// show loading message while data is being fetched
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  //  reurning data from the query in a list
  return data.profiles.map(({ id, name, skills }) => (
    <ul key={id}>
      <li>{name}</li>
      <li>{skills[0]}</li>
    </ul>
  ));
}
