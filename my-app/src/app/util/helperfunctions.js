export default function tagColorPicker(val) {
  switch (val) {
    case "React.js":
      return { fontColor: "text-[#3538CD]", bgColor: "bg-[#EEF4FF]" };
    case "JavaScript":
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
    default:
      return { fontColor: "text-[#363F72]", bgColor: "bg-[#F8F9FC]" };
  }
}
