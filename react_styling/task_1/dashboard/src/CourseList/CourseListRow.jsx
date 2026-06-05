function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  let trContent = <>
    <td className="border border-gray-400 pl-[8px] pl-2">{ textFirstCell }</td>
    <td className="border border-gray-400 pl-[8px] pl-2">{ textSecondCell }</td>
  </>;
  if (isHeader) {
    if (textSecondCell === null) {
      trContent = <th className="border border-gray-400" colSpan={2}>{ textFirstCell }</th>
    }
    else {
      trContent = <>
        <th className="border border-gray-400">{ textFirstCell }</th>
        <th className="border border-gray-400">{ textSecondCell }</th>
      </>
    }
  }
  return(
    <tr
      className={isHeader ? "bg-table-header/[66%]" : "bg-table-rows/[45%]"}
      style={{
        backgroundColor: isHeader ? 'var(--color-table-header)' : 'var(--color-table-rows)',
        opacity: isHeader ? '0.66' : '0.45'
      }}
    >{ trContent }</tr>
  )
}

export default CourseListRow;
