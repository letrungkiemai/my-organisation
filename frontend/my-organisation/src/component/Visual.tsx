import useFetch from "../controller/useFetch";

export default function Visual() {
  const { data, loading, error } = useFetch('http://localhost:6789/api/organisation/tree')

  return <div>{data}</div>;
}
