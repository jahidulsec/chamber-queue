import { format } from "date-fns";

export function titleCase(title: string) {
    const data = title.split('-')
    const newValue = []
    for (const i of data) {
      newValue.push(i.charAt(0).toUpperCase() + i.slice(1))
    }
    return newValue.join(" ")
  }
  

  export const formatDateTime = (date: Date) => {
    if (date == null) return `-`;
    return format(date, "MMM d, yyyy - h:mm aaa");
  };