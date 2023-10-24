import Image from "next/image";
import Hello from "./components/Hello";
import { Inter } from "next/font/google";
import SSRPage from "./SSRPage";
import ClientSide from "./ClientSide";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>hi this is the index.js page.</div>
      <Hello />
      <SSRPage />
      <ClientSide />
    </main>
  );
}
