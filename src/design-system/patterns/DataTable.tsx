import * as React from 'react';
import { cn } from '../utils/cn';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../components/Table';

/* ─── Data Table Types ─── */
interface Column<T> {
  key: string;
  header: string;
  width?: string;
  sortable?: boolean;
  render?: (value: unknown, row: T) => React.ReactNode;
}

interface DataTableProps<T extends Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  /** Row key accessor */
  rowKey: keyof T | ((row: T) => string);
  /** Currently sorted column key */
  sortKey?: string;
  /** Sort direction */
  sortDirection?: 'asc' | 'desc';
  /** Sort handler */
  onSort?: (key: string) => void;
  /** Selected row keys */
  selectedKeys?: Set<string>;
  /** Selection handler */
  onSelect?: (keys: Set<string>) => void;
  /** Row click handler */
  onRowClick?: (row: T) => void;
  /** Empty state content */
  emptyState?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  className?: string;
}

function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  rowKey,
  sortKey,
  sortDirection,
  onSort,
  selectedKeys,
  onSelect,
  onRowClick,
  emptyState,
  footer,
  className,
}: DataTableProps<T>) {
  const getRowKey = (row: T): string => {
    if (typeof rowKey === 'function') return rowKey(row);
    return String(row[rowKey]);
  };

  const allSelected = data.length > 0 && selectedKeys?.size === data.length;

  const toggleAll = () => {
    if (!onSelect) return;
    if (allSelected) {
      onSelect(new Set());
    } else {
      onSelect(new Set(data.map(getRowKey)));
    }
  };

  const toggleRow = (key: string) => {
    if (!onSelect || !selectedKeys) return;
    const next = new Set(selectedKeys);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    onSelect(next);
  };

  return (
    <div className={cn('flex flex-col', className)}>
      <div className="overflow-x-auto">
      <Table className="min-w-[600px]">
        <TableHeader>
          <TableRow>
            {onSelect && (
              <TableHead className="w-10">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                  className="rounded border-[var(--border-default)]"
                />
              </TableHead>
            )}
            {columns.map((col) => (
              <TableHead
                key={col.key}
                sortable={col.sortable}
                sorted={sortKey === col.key ? sortDirection || false : false}
                style={col.width ? { width: col.width } : undefined}
                onClick={col.sortable ? () => onSort?.(col.key) : undefined}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length + (onSelect ? 1 : 0)}
                className="h-40 text-center"
              >
                {emptyState ?? (
                  <span className="text-[var(--text-muted)]">No data</span>
                )}
              </TableCell>
            </TableRow>
          ) : (
            data.map((row) => {
              const key = getRowKey(row);
              return (
                <TableRow
                  key={key}
                  selected={selectedKeys?.has(key)}
                  onClick={() => onRowClick?.(row)}
                  className={onRowClick ? 'cursor-pointer' : ''}
                >
                  {onSelect && (
                    <TableCell className="w-10">
                      <input
                        type="checkbox"
                        checked={selectedKeys?.has(key)}
                        onChange={() => toggleRow(key)}
                        onClick={(e) => e.stopPropagation()}
                        className="rounded border-[var(--border-default)]"
                      />
                    </TableCell>
                  )}
                  {columns.map((col) => (
                    <TableCell key={col.key}>
                      {col.render
                        ? col.render(row[col.key], row)
                        : String(row[col.key] ?? '')}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
      </div>
      {footer && (
        <div className="border-t border-[var(--border-subtle)] px-3 py-2 text-[12px] text-[var(--text-muted)]">
          {footer}
        </div>
      )}
    </div>
  );
}

export { DataTable };
export type { DataTableProps, Column };
