/**
 * CRM Design System Example — Empty State Presets
 *
 * Pre-configured empty states extracted from a sample CRM UI.
 * Each preset wraps the base EmptyState component with specific
 * icon, title, description, and CTA content.
 */

import * as React from 'react';
import { EmptyState } from '../components/EmptyState';
import { Button } from '../components/Button';
import {
  NoteIcon,
  TaskIcon,
  FileIcon,
  MailIcon,
  BellIcon,
  SearchIcon,
  ActivityIcon,
  DealIcon,
} from '../icons';

/* ─── Helpers ─── */

interface PresetProps {
  className?: string;
  onAction?: () => void;
}

function PresetIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-[var(--radius-lg)] bg-[var(--surface-muted)] flex items-center justify-center text-[var(--icon-muted)]">
      {children}
    </div>
  );
}

/* ─── Presets ─── */

/** Notes tab empty state: "No notes" */
export function EmptyNotes({ className, onAction }: PresetProps) {
  return (
    <EmptyState
      className={className}
      icon={<PresetIcon><NoteIcon size={20} /></PresetIcon>}
      title="No notes"
      description="Add a note to keep track of important details."
      action={onAction && <Button variant="secondary" size="md" leftIcon={<PlusText />} onClick={onAction}>New note</Button>}
    />
  );
}

/** Tasks tab empty state: "No tasks" */
export function EmptyTasks({ className, onAction }: PresetProps) {
  return (
    <EmptyState
      className={className}
      icon={<PresetIcon><TaskIcon size={20} /></PresetIcon>}
      title="No tasks"
      description="Create your first task to get started."
      action={onAction && <Button variant="secondary" size="md" leftIcon={<PlusText />} onClick={onAction}>New task</Button>}
    />
  );
}

/** Files tab empty state: "No files" */
export function EmptyFiles({ className, onAction }: PresetProps) {
  return (
    <EmptyState
      className={className}
      icon={<PresetIcon><FileIcon size={20} /></PresetIcon>}
      title="No files"
      description="Drag a file here or choose one from your computer."
      action={onAction && <Button variant="secondary" size="md" leftIcon={<PlusText />} onClick={onAction}>Upload file</Button>}
    />
  );
}

/** Emails empty state */
export function EmptyEmails({ className, onAction }: PresetProps) {
  return (
    <EmptyState
      className={className}
      icon={<PresetIcon><MailIcon size={20} /></PresetIcon>}
      title="No emails yet"
      description="Create your first email to get started."
      action={onAction && <Button variant="primary" size="md" onClick={onAction}>Compose email</Button>}
    />
  );
}

/** Notifications popover empty state */
export function EmptyNotifications({ className }: { className?: string }) {
  return (
    <EmptyState
      className={className}
      icon={<PresetIcon><BellIcon size={20} /></PresetIcon>}
      title="You don't have any notifications"
      description="We'll notify you about important updates and any time you're mentioned on CRM."
    />
  );
}

/** Search / Cmd+K no results */
export function EmptySearchResults({ className, query }: { className?: string; query?: string }) {
  return (
    <EmptyState
      className={className}
      icon={<PresetIcon><SearchIcon size={20} /></PresetIcon>}
      title={query ? `No results for "${query}"` : 'No results found'}
      description="Try searching for something else."
    />
  );
}

/** Generic record list empty state — parameterized by entity name */
export function EmptyRecordList({
  className,
  entityName,
  entityDescription,
  onAction,
}: PresetProps & { entityName: string; entityDescription?: string }) {
  return (
    <EmptyState
      className={className}
      icon={<PresetIcon><DealIcon size={20} /></PresetIcon>}
      title={`No ${entityName.toLowerCase()} records`}
      description={entityDescription ?? `${entityName} records let you track and manage your data in CRM.`}
      action={onAction && <Button variant="secondary" size="md" leftIcon={<PlusText />} onClick={onAction}>New {entityName}</Button>}
    />
  );
}

/** Activity timeline empty state */
export function EmptyActivity({ className }: { className?: string }) {
  return (
    <EmptyState
      className={className}
      icon={<PresetIcon><ActivityIcon size={20} /></PresetIcon>}
      title="No activity yet"
      description="Activity will appear here when interactions are logged."
    />
  );
}

/* ─── Internal ─── */

function PlusText() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path d="M7 2.5a.5.5 0 01.5.5v3.5H11a.5.5 0 010 1H7.5V11a.5.5 0 01-1 0V7.5H3a.5.5 0 010-1h3.5V3a.5.5 0 01.5-.5z" />
    </svg>
  );
}
