/**
 * CRM Design System Example — Page Composition Templates
 *
 * Structural scaffolds showing how components assemble into full pages.
 * These are not reusable layouts — they document the exact composition
 * patterns observed in the sample CRM UI for reference when building.
 *
 * Screenshot refs:
 * - companies-list-page.png → CompanyListPageComposition
 * - company-detail-overview.png → CompanyDetailPageComposition
 * - deals-pipeline-page.png → DealsPipelinePageComposition
 */

import * as React from 'react';
import { cn } from '../utils/cn';

/* ─── Company List Page Composition ─── */

/**
 * Companies list page structure:
 *
 * ```
 * AppShell > Sidebar + [
 *   Topbar (record-icon + "Companies" + Share + avatar + chat + help + "Ask CRM")
 *   ViewBar ("All Companies" dropdown + "View settings" ... "Import/Export" + "+ New Company")
 *   FilterBar (Sort + Filter ... right-aligned actions)
 *   DataTable (sortable columns, selectable rows)
 *   Footer (852 count + "Add calculation" per column)
 *   BulkActionBar (appears on selection — floats above footer)
 * ]
 * ```
 */
interface CompanyListPageProps {
  topbar: React.ReactNode;
  viewBar: React.ReactNode;
  filterBar: React.ReactNode;
  table: React.ReactNode;
  footer?: React.ReactNode;
  bulkActionBar?: React.ReactNode;
  className?: string;
}

function CompanyListPageComposition({
  topbar,
  viewBar,
  filterBar,
  table,
  footer,
  bulkActionBar,
  className,
}: CompanyListPageProps) {
  return (
    <div className={cn('flex flex-col h-full overflow-hidden', className)}>
      {/* Zone 1: Topbar — fixed height, border-bottom */}
      {topbar}

      {/* Zone 2: View Bar — view name, toggle, view actions */}
      {viewBar}

      {/* Zone 3: Filter Bar — sort, filter, right-side actions */}
      {filterBar}

      {/* Zone 4: Table — scrollable main area */}
      <div className="flex-1 overflow-auto relative">
        {table}
      </div>

      {/* Zone 5: Footer — record count, calculations */}
      {footer}

      {/* Zone 6: Bulk Action Bar — floating, appears on row selection */}
      {bulkActionBar && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[var(--z-sticky)]">
          {bulkActionBar}
        </div>
      )}
    </div>
  );
}

/* ─── Company Detail Page Composition ─── */

/**
 * Company detail page structure:
 *
 * ```
 * AppShell > Sidebar + [
 *   EntityActionBar (← back + breadcrumb + entity actions)
 *   Split layout:
 *     Main (scrollable):
 *       RecordHeader (avatar/logo + company name)
 *       Tabs (Overview | Activity | Emails | Calls | Team | Notes | +2 more)
 *       TabContent:
 *         Overview: Highlights cards + Activity preview + Emails preview
 *         Activity: Timeline (year > month > entries)
 *         Emails: Email list
 *         ...
 *     Right Panel (fixed width, scrollable):
 *       Panel tabs: Details | Comments
 *       Details: Record sections (collapsible) with detail fields
 *       Comments: Comment list + add comment input
 * ]
 * ```
 */
interface CompanyDetailPageProps {
  entityActionBar: React.ReactNode;
  recordHeader: React.ReactNode;
  tabs: React.ReactNode;
  tabContent: React.ReactNode;
  sidePanel: React.ReactNode;
  className?: string;
}

function CompanyDetailPageComposition({
  entityActionBar,
  recordHeader,
  tabs,
  tabContent,
  sidePanel,
  className,
}: CompanyDetailPageProps) {
  return (
    <div className={cn('flex flex-col h-full overflow-hidden', className)}>
      {/* Zone 1: Entity Action Bar — back, breadcrumb, actions */}
      {entityActionBar}

      {/* Zone 2: Split — main content + side panel */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main content area — scrollable */}
        <div className="flex-1 overflow-auto min-w-0">
          {recordHeader}
          {tabs}
          <div className="px-6 py-4">
            {tabContent}
          </div>
        </div>

        {/* Right panel — fixed width, scrollable, border-left */}
        <aside className="w-[var(--detail-panel-width)] flex-shrink-0 border-l border-[var(--border-subtle)] overflow-auto">
          {sidePanel}
        </aside>
      </div>
    </div>
  );
}

/* ─── Deals Pipeline Page Composition ─── */

/**
 * Deals pipeline page structure:
 *
 * ```
 * AppShell > Sidebar + [
 *   Topbar ("Deals" + actions)
 *   ViewBar (pipeline name + view toggle)
 *   KanbanBoard:
 *     Column: "Lead" (status badge) + cards + "+ New Deal"
 *     Column: "In Progress" + cards + "+ New Deal"
 *     Column: "Won" + cards + "+ New Deal"
 *     Column: "Lost" + cards + "+ New Deal"
 * ]
 * ```
 */
interface DealsPipelinePageProps {
  topbar: React.ReactNode;
  viewBar: React.ReactNode;
  kanbanBoard: React.ReactNode;
  className?: string;
}

function DealsPipelinePageComposition({
  topbar,
  viewBar,
  kanbanBoard,
  className,
}: DealsPipelinePageProps) {
  return (
    <div className={cn('flex flex-col h-full overflow-hidden', className)}>
      {topbar}
      {viewBar}
      <div className="flex-1 overflow-auto">
        {kanbanBoard}
      </div>
    </div>
  );
}

export {
  CompanyListPageComposition,
  CompanyDetailPageComposition,
  DealsPipelinePageComposition,
};
export type {
  CompanyListPageProps,
  CompanyDetailPageProps,
  DealsPipelinePageProps,
};
