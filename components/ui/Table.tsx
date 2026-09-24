import React from "react";

export interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (item: T, index: number) => React.ReactNode;
  className?: string;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  caption?: string;
  keyExtractor?: (item: T, index: number) => string | number;
  className?: string;
}

/**
 * Responsive Table component designed to scroll smoothly within its container on mobile.
 */
export function Table<T>({ columns, data, caption, keyExtractor, className = "" }: TableProps<T>) {
  return (
    <div
      className={`w-full overflow-hidden rounded-[12px] border border-[#E2E8F0] shadow-xs bg-white ${className}`}
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-xs sm:text-sm">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr className="border-b border-[#E2E8F0] bg-[#F7F9FC]">
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className={`p-3.5 sm:p-4 font-bold text-[#0B1F3A] uppercase tracking-wider text-[11px] sm:text-xs ${col.className || ""}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0]">
            {data.map((row, rowIndex) => {
              const rowKey = keyExtractor ? keyExtractor(row, rowIndex) : rowIndex;

              return (
                <tr key={rowKey} className="hover:bg-[#F7F9FC]/60 transition-colors">
                  {columns.map((col, colIndex) => (
                    <td
                      key={colIndex}
                      className={`p-3.5 sm:p-4 text-[#1F2937] align-middle ${col.className || ""}`}
                    >
                      {col.cell
                        ? col.cell(row, rowIndex)
                        : col.accessorKey
                          ? String(row[col.accessorKey] ?? "")
                          : null}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
