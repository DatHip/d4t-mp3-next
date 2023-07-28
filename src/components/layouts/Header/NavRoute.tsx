/* eslint-disable @typescript-eslint/no-misused-promises */
import IconBack from "@/asset/icons/IconBack";
import { useRouter } from "next/router";
export default function NavRoute() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-2">
      <button onClick={() => router.back()} className="zm-btn">
        <IconBack></IconBack>
      </button>
      <button className="zm-btn">
        <i className="icon ic-forward"></i>
      </button>
    </div>
  );
}
