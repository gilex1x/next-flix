import { useSelector } from "react-redux";
export default function Home() {
  const error = useSelector((state:any)=>state.error)
  return (
    <main>
      <h1>Esto es un titulo {error}</h1>
    </main>
  );
}
