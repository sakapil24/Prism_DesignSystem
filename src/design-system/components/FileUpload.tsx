/**
 * CRM Design System Example — FileUpload
 *
 * Combines DropZone with file list, progress, and remove actions.
 */

import * as React from 'react';
import { cn } from '../utils/cn';
import { DropZone, type DropZoneProps } from './DropZone';

/* ─── Types ──────────────────────────────────────────────────────────── */

export interface UploadFile {
  id: string;
  name: string;
  size: number;
  type: string;
  progress?: number; // 0-100
  status?: 'pending' | 'uploading' | 'complete' | 'error';
  error?: string;
}

export interface FileUploadProps extends Omit<DropZoneProps, 'onDrop'> {
  files?: UploadFile[];
  onFilesSelected?: (files: FileList) => void;
  onFileRemove?: (fileId: string) => void;
  maxFiles?: number;
  maxSize?: number; // bytes
}

/* ─── Helpers ────────────────────────────────────────────────────────── */

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileIcon(type: string): React.ReactNode {
  const isImage = type.startsWith('image/');
  const isPdf = type === 'application/pdf';
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[var(--icon-muted)]">
      {isImage ? (
        <path d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v9a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 12.5v-9zM5.5 6a1 1 0 100-2 1 1 0 000 2zm7 4.5l-2.5-3-2 2.5-1.5-1.5L3.5 12h9l-.5-1.5z" fill="currentColor"/>
      ) : isPdf ? (
        <path d="M4 1.5A1.5 1.5 0 015.5 0h4.793L14 3.707V14.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 014 14.5v-13zM6 8h4v1H6V8zm0 2h4v1H6v-1zm0-4h2v1H6V6z" fill="currentColor"/>
      ) : (
        <path d="M4 1.5A1.5 1.5 0 015.5 0h4.793L14 3.707V14.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 014 14.5v-13zM5.5 1a.5.5 0 00-.5.5V14.5a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V4h-2.5A1.5 1.5 0 019 2.5V1H5.5z" fill="currentColor"/>
      )}
    </svg>
  );
}

/* ─── FileUploadItem ─────────────────────────────────────────────────── */

interface FileUploadItemProps {
  file: UploadFile;
  onRemove?: () => void;
}

function FileUploadItem({ file, onRemove }: FileUploadItemProps) {
  const progress = file.progress ?? (file.status === 'complete' ? 100 : 0);
  const isError = file.status === 'error';

  return (
    <div className={cn(
      'flex items-center gap-3 rounded-[var(--radius)] px-3 py-2',
      'border border-[var(--border-subtle)] bg-[var(--surface-page)]',
      isError && 'border-[var(--border-error)]'
    )}>
      {getFileIcon(file.type)}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-[var(--text-sm)] font-[var(--font-medium)] text-[var(--text-primary)]">
            {file.name}
          </span>
          <span className="shrink-0 text-[var(--text-xs)] text-[var(--text-muted)]">
            {formatFileSize(file.size)}
          </span>
        </div>
        {file.status === 'uploading' && (
          <div className="mt-1 h-1 w-full rounded-full bg-[var(--surface-muted)] overflow-hidden">
            <div
              className="h-full rounded-full bg-[var(--accent-primary)] transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
        {isError && file.error && (
          <p className="mt-0.5 text-[var(--text-xs)] text-[var(--text-error)]">{file.error}</p>
        )}
      </div>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-[var(--radius-md)] text-[var(--icon-muted)] hover:text-[var(--text-error)] hover:bg-[var(--surface-hover)] transition-colors duration-[var(--duration-fast)]"
          aria-label={`Remove ${file.name}`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M2.5 2.5l7 7M9.5 2.5l-7 7"/>
          </svg>
        </button>
      )}
    </div>
  );
}

/* ─── FileUpload ─────────────────────────────────────────────────────── */

function FileUpload({
  files = [],
  onFilesSelected,
  onFileRemove,
  maxFiles,
  maxSize,
  ...dropZoneProps
}: FileUploadProps) {
  const atLimit = maxFiles ? files.length >= maxFiles : false;

  return (
    <div className="space-y-3">
      {!atLimit && (
        <DropZone
          {...dropZoneProps}
          onDrop={onFilesSelected}
          description={
            dropZoneProps.description ??
            ([
              maxSize && `Max ${formatFileSize(maxSize)} per file`,
              maxFiles && `Up to ${maxFiles} files`,
            ].filter(Boolean).join(' · ') || undefined)
          }
        />
      )}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file) => (
            <FileUploadItem
              key={file.id}
              file={file}
              onRemove={onFileRemove ? () => onFileRemove(file.id) : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}

FileUpload.displayName = 'FileUpload';

export { FileUpload, FileUploadItem };
