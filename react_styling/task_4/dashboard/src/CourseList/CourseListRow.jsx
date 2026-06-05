function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  let trContent = <>
    <td className="border border-gray-400 pl-[8px] py-1 md:py-2 text-xs md:text-base">{ textFirstCell }</td>
    <td className="border border-gray-400 pl-[8px] py-1 md:py-2 text-xs md:text-base">{ textSecondCell }</td>
  </>;
  if (isHeader) {
    if (textSecondCell === null) {
      trContent = <th className="border border-gray-400 py-1 md:py-2 text-xs md:text-base" colSpan={2}>{ textFirstCell }</th>
    }
    else {
      trContent = <>
        <th className="border border-gray-400 py-1 md:py-2 text-xs md:text-base">{ textFirstCell }</th>
        <th className="border border-gray-400 py-1 md:py-2 text-xs md:text-base">{ textSecondCell }</th>
      </>
    }
  }
  return(
    <tr className={isHeader ? "bg-table-header/[66%]" : "bg-table-rows/[45%]"}>{ trContent }</tr>
  )
}

export default CourseListRow;
