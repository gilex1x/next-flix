import { useSelector } from "react-redux";
import MainTemplate from "@/app/components/templates";
export default function Home() {
  const error = useSelector((state: any) => state.error)
  return (
    <MainTemplate>
      <main>
        <h1>Esto es un titulo {error}</h1>
      </main>
    </MainTemplate>
  );
}
