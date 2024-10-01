import { format } from "date-fns";

export function titleCase(title: string) {
    let data = title.split('-')
    let newValue = []
    for (let i of data) {
      newValue.push(i.charAt(0).toUpperCase() + i.slice(1))
    }
    return newValue.join(" ")
  }
  

  export const formatDateTime = (date: Date) => {
    if (date == null) return `-`;
    return format(date, "MMM d, yyyy - h:mm aaa");
  };