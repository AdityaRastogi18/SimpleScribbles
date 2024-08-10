export function tagColorPicker(val) {
  switch (val) {
    case "React.js":
      return { fontColor: "text-[#3538CD]", bgColor: "bg-[#EEF4FF]" };
    case "Javascript":
      return { fontColor: "text-[#9B9627]", bgColor: "bg-[#FDFDF4]" };
    case "Next.js":
      return { fontColor: "text-[#6941C6]", bgColor: "bg-[#F9F5FF]" };
    case "Programming":
      return { fontColor: "text-[#027A48]", bgColor: "bg-[#ECFDF3]" };
    case "Frontend Development":
      return { fontColor: "text-[#C01048]", bgColor: "bg-[#FFF1F3]" };
    case "Testing":
      return { fontColor: "text-[#363F72]", bgColor: "bg-[#F8F9FC]" };
    case "State Management":
      return { fontColor: "text-[#026AA2]", bgColor: "bg-[#F0F9FF]" };
    case "HTML":
      return { fontColor: "text-[#E34C26]", bgColor: "bg-[#FFF3EB]" };
    case "CSS":
      return { fontColor: "text-[#1572B6]", bgColor: "bg-[#E3F2FD]" };
    case "Tailwind CSS":
      return { fontColor: "text-[#38B2AC]", bgColor: "bg-[#E6FFFA]" };
    case "Express.js":
      return { fontColor: "text-[#000000]", bgColor: "bg-[#F3F4F6]" };
    case "MongoDB":
      return { fontColor: "text-[#47A248]", bgColor: "bg-[#E8F5E9]" };
    case "Bootstrap":
      return { fontColor: "text-[#7952B3]", bgColor: "bg-[#F3E9FF]" };
    case "RSS Feed":
      return { fontColor: "text-[#FFA500]", bgColor: "bg-[#FFF7E1]" };
    case "Node.js":
      return { fontColor: "text-[#68A063]", bgColor: "bg-[#EBF8E1]" };
    case "EJS":
      return { fontColor: "text-[#8A2BE2]", bgColor: "bg-[#F4EBFF]" };
    default:
      return { fontColor: "text-[#363F72]", bgColor: "bg-[#F8F9FC]" };
  }
}

export function sortDates(arr, sortOrder) {
  if (sortOrder === "asc")
    return arr.sort((a, b) => new Date(a?.date) - new Date(b?.date));
  else if (sortOrder === "dsc")
    return arr.sort((a, b) => new Date(b?.date) - new Date(a?.date));
  else return arr;
}
