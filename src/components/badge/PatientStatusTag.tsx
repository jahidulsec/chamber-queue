import { titleCase } from "@/lib/formatter";
import { Badge } from "../ui/badge";

function PatientStatusTag({status}: {status: string}) {
  return (
    <Badge
      className={` ${
        status === "in-session"
          ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
          : status === "done"
          ? "text-teal-900 bg-teal-100 hover:bg-teal-200"
          : status === "absent"
          ? "bg-red-100 text-red-800 hover:bg-red-200"
          : "bg-violet-100 text-violet-700 hover:bg-violet-200"
      }`}
    >
      {titleCase(status)}
    </Badge>
  );
}

export default PatientStatusTag;
