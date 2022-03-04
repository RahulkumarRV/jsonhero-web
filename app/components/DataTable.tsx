import { FunctionComponent } from "react";
import { CopyText } from "./CopyText";
import { Title } from "./Primitives/Title";

export type DataTableProps = {
  rows: DataTableRow[];
};

export type DataTableRow = {
  key: string;
  value: string;
  icon?: JSX.Element;
};

export const DataTable: FunctionComponent<DataTableProps> = ({ rows }) => {
  return (
    <div>
      <Title className="text-slate-700 dark:text-slate-400 mb-2">
        Properties
      </Title>
      <table className="w-full table-auto border-y-[0.5px] border-slate-300 transition dark:border-slate-700">
        <tbody className="divide-solid divide-y divide-slate-300 w-full transition dark:divide-slate-700">
          {rows.map((row) => {
            return (
              <tr
                key={row.key}
                className="divide-solid divide-x transition dark:divide-slate-700"
              >
                <td className="flex items-baseline py-2 pr-3 text-base dark:text-slate-400">
                  <div className="flex-1 ml-1">{row.key}</div>
                </td>
                <td className="text-base text-slate-800 transition dark:text-slate-300 break-all">
                  <CopyText
                    className="p-1 pl-2 m-0.5 mr-0 after:w-4 after:h-4 after:top-1.5 after:right-1 rounded-sm hover:cursor-pointer transition ease-out after:transition hover:bg-slate-100 hover:dark:bg-slate-700 active:bg-slate-200 after:active:bg-slate-200 dark:active:bg-opacity-70 dark:after:active:bg-opacity-70 after:absolute after:opacity-0 hover:after:opacity-100 after:content-[''] after:bg-[url('/svgs/CopyIcon.svg')] active:after:bg-[url('/svgs/TickIcon.svg')] after:bg-slate-100 after:dark:bg-slate-700 after:bg-no-repeat"
                    value={row.value}
                  >
                    {row.value}
                  </CopyText>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
