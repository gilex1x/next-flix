import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDataRequest } from "@/app/redux/actions";
import MainTemplate from "@/app/components/templates";
import ResultGrid from "@/app/components/molecules/ResultGrid";
export default function Home() {
  const dispatcher = useDispatch();
  useEffect(() => {
    let initialParams = {
      page: 1
    }
    dispatcher(fetchDataRequest(initialParams))
  }, []);
  return (
    <MainTemplate>
      <main>
        <h1>Next-Flix</h1>
        <ResultGrid />
      </main>
    </MainTemplate>
  );
}
