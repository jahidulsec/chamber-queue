import { titleCase } from "@/lib/formatter";
import { Badge } from "../ui/badge";

function PatientStatusTag({status}: {status: string}) {
  return (
    <Badge
      className={` ${
        status === "in-session"
          ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
          : status === "done"
          ? "text-teal-700 bg-teal-100 hover:bg-teal-200"
          : status === "absent"
          ? "bg-red-100 text-red-700 hover:bg-red-200"
          : "bg-blue-100 text-blue-700 hover:bg-blue-200"
      }`}
    >
      {titleCase(status)}
    </Badge>
  );
}

export default PatientStatusTag;
