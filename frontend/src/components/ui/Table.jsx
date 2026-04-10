import { useMemo, useState } from "react";
import { Search } from "lucide-react";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const rowToSearchText = (value) => {
  if (value === null || value === undefined) return "";
  if (Array.isArray(value)) return value.map(rowToSearchText).join(" ");
  if (typeof value === "object") return Object.values(value).map(rowToSearchText).join(" ");
  return String(value);
};

const Table = ({
  columns,
  data,
  renderRow,
  rowKey,
  emptyMessage = "No records found.",
  striped = true,
  className = "",
  searchable = true,
  searchPlaceholder = "Search anything in table...",
  searchFn,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!searchable || !searchTerm.trim()) return data;

    const query = searchTerm.toLowerCase().trim();

    return data.filter((row) =>
      searchFn
        ? searchFn(row, query)
        : rowToSearchText(row).toLowerCase().includes(query)
    );
  }, [data, searchFn, searchable, searchTerm]);

  const resolvedEmptyMessage =
    searchable && searchTerm.trim()
      ? `No matching records found for "${searchTerm}".`
      : emptyMessage;

  return (
    <div
      className={cx(
        "overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_40px_rgba(124,58,237,0.12)]",
        className
      )}
    >
      {searchable && (
        <div className="border-b border-white/10 px-4 py-3 md:px-5">
          <label className="focus-ring flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/65 transition-all duration-300">
            <Search size={16} className="text-white/45" />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder={searchPlaceholder}
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </label>
          <p className="mt-2 text-xs text-white/45">
            Showing {filteredData.length} of {data.length} records
          </p>
        </div>
      )}

      <div className="overflow-x-auto premium-scrollbar">
        <table className="min-w-full text-sm">
          <thead className="sticky top-0 z-10 bg-[#140430]/95 backdrop-blur-xl">
            <tr className="border-b border-white/10 text-left text-white/60">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={cx(
                    "px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em]",
                    column.headerClassName
                  )}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr
                  key={rowKey ? rowKey(row, index) : `${index}-${row.id ?? "row"}`}
                  className={cx(
                    "border-b border-white/5 transition-all duration-300 hover:bg-white/5",
                    striped && index % 2 === 1 && "bg-white/[0.02]"
                  )}
                >
                  {renderRow(row, index)}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-12 text-center text-sm text-white/55"
                >
                  {resolvedEmptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
