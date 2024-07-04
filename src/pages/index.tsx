import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainTemplate from "@/app/components/templates";
import { fetchDataRequest } from "@/app/redux/actions";
export default function Home() {
  const dispatcher = useDispatch();
  // const getInitialData = ()=>{

  // }
  useEffect(() => {
    dispatcher(fetchDataRequest())
  }, []);
  return (
    <MainTemplate>
      <main>
        <h1>Next-Flix</h1>
      </main>
    </MainTemplate>
  );
}
