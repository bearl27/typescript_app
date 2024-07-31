import Image from "next/image";
import AddMemo from "./components/AddMemo";
import MemoList from "./components/MemoList";
import { getAllMemos } from "@/api";

export default async function Home() {
const memos = await getAllMemos();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">memoApp</h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          {/* <AddMemo /> */}
          <MemoList memos={memos}/>
        </div>
      </div>
    </main>
  );
}
