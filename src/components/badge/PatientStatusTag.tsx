import { titleCase } from "@/lib/formatter";
import { Badge } from "../ui/badge";

function PatientStatusTag({status}: {status: string}) {
  return (
    <Badge
      className={` ${
        status === "waiting"
          ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
          : status === "done"
          ? "text-teal-700 bg-teal-100 hover:bg-teal-200"
          : status === "absent"
          ? "bg-red-100 text-red-700 hover:bg-red-200"
          : status === 'in-session' ? 'text-sky-600 bg-sky-100 hover:bg-sky-200' : 
          status === 'present' ? 'text-lime-600 bg-lime-100 hover:bg-lime-200' : 
           "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {titleCase(status)}
    </Badge>
  );
}

export default PatientStatusTag;
