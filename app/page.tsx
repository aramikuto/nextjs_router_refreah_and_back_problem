import { redirect } from "next/navigation";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  redirect("/content");
  return null;
}
