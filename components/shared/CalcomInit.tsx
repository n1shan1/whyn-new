"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export function CalcomInit() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return null;
}
