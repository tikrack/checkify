import { useMemo } from "react";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

const Table = ({ columns, data, isLoading }) => {
    const memoColumns = useMemo(
        () => [
            {
                header: "ردیف",
                accessorFn: (_, i) => i + 1,
                cell: (info) => (
                    <span className="bg-[#F0F0F0] p-1 px-2 rounded-lg text-gray-500 text-[12px]">{info.getValue()}</span>
                ),
            },
            ...columns,
        ],
        [columns],
    );

    const table = useReactTable({
        data: data || [],
        columns: memoColumns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full text-sm">
                <thead className="bg-gray-100 font-semibold">
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th
                                key={header.id}
                                className="px-4 py-2.5 text-right text-gray-500"
                            >
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext(),
                                )}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {isLoading && (
                    <tr>
                        <td colSpan={columns.length + 1}>
                            <div className="h-40 flex justify-center flex-col gap-2 items-center">
                                {/*<Spinner size={50} />*/}
                                <span className="font-rokh text-primary text-lg">منتظر بمانید...</span>
                            </div>
                        </td>
                    </tr>
                )}

                {!isLoading &&
                    table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            className="border-t border-gray-300 hover:bg-gray-50"
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="px-4 h-12">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}

                {!isLoading && data?.length === 0 && (
                    <tr>
                        <td
                            colSpan={columns.length + 1}
                            className="p-4 text-center text-gray-400"
                        >
                            هیچ داده‌ای یافت نشد
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;