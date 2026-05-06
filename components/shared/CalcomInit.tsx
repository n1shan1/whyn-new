"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { BRAND } from "@/lib/constants";

export function CalcomInit() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: BRAND.calcomNamespace });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return null;
}
