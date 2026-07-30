import { JOB_OPENINGS } from "@/data/careers";
import type { JobOpening } from "@/lib/types";

/** Data-access seam for open roles — mock today, ATS/HRIS integration later. */
export async function getOpenRoles(): Promise<JobOpening[]> {
  return JOB_OPENINGS;
}
