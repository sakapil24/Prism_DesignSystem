/**
 * CRM Design System Example — CommandPalette Component
 *
 * Cmd+K search palette built on Radix Dialog.
 * Matches the sample CRM's global search / command palette pattern.
 */

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '../utils/cn';

/* ─── Types ───────────────────────────────────────────────────────────── */

export interface CommandItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  group?: string;
  onSelect: () => void;
  disabled?: boolean;
}

export interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CommandItem[];
  placeholder?: string;
  emptyMessage?: string;
  className?: string;
}

/* ─── CommandPalette ──────────────────────────────────────────────────── */

function CommandPalette({
  open,
  onOpenChange,
  items,
  placeholder = 'Type a command or search...',
  emptyMessage = 'No results found',
  className,
}: CommandPaletteProps) {
  const [search, setSearch] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  // Reset on open
  React.useEffect(() => {
    if (open) {
      setSearch('');
      setSelectedIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  // Filter items
  const filtered = search
    ? items.filter(
        (item) =>
          item.label.toLowerCase().includes(search.toLowerCase()) ||
          item.group?.toLowerCase().includes(search.toLowerCase())
      )
    : items;

  // Group items
  const groups = React.useMemo(() => {
    const map = new Map<string, CommandItem[]>();
    for (const item of filtered) {
      const group = item.group ?? '';
      if (!map.has(group)) map.set(group, []);
      map.get(group)!.push(item);
    }
    return map;
  }, [filtered]);

  // Flatten for index tracking
  const flatItems = React.useMemo(() => filtered.filter((i) => !i.disabled), [filtered]);

  // Reset selection when search changes
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % flatItems.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + flatItems.length) % flatItems.length);
        break;
      case 'Enter':
        e.preventDefault();
        flatItems[selectedIndex]?.onSelect();
        onOpenChange(false);
        break;
      case 'Escape':
        onOpenChange(false);
        break;
    }
  };

  // Scroll selected into view
  React.useEffect(() => {
    const el = listRef.current?.querySelector('[data-selected="true"]');
    el?.scrollIntoView({ block: 'nearest' });
  }, [selectedIndex]);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            'fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)]',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
            'duration-160'
          )}
        />
        <DialogPrimitive.Content
          className={cn(
            'fixed left-1/2 top-[20%] z-50 -translate-x-1/2',
            'w-full max-w-[560px] rounded-[12px] bg-white',
            'shadow-[var(--shadow-modal)]',
            'outline-none overflow-hidden',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            'duration-200',
            className
          )}
          onKeyDown={handleKeyDown}
        >
          <DialogPrimitive.Title className="sr-only">Command palette</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">Search commands and navigate</DialogPrimitive.Description>

          {/* Search input */}
          <div className="flex items-center gap-3 border-b border-[var(--border-default)] px-4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[var(--icon-muted)]">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={placeholder}
              className={cn(
                'flex-1 h-12 bg-transparent border-0 outline-none',
                'text-[var(--text-base)] font-[var(--font-medium)]',
                'placeholder:text-[var(--text-faint)] placeholder:font-[var(--font-normal)]'
              )}
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="flex h-5 w-5 items-center justify-center rounded-[var(--radius-sm)] text-[var(--icon-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)] transition-colors duration-[var(--duration-fast)]"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>

          {/* Results */}
          <div ref={listRef} className="max-h-[320px] overflow-y-auto p-1">
            {filtered.length === 0 ? (
              <div className="flex h-16 items-center justify-center text-[var(--text-sm)] text-[var(--text-muted)]">
                {emptyMessage}
              </div>
            ) : (
              Array.from(groups.entries()).map(([group, groupItems]) => (
                <div key={group}>
                  {group && (
                    <div className="px-2 py-1.5 text-xs font-medium text-[#6A707A]">
                      {group}
                    </div>
                  )}
                  {groupItems.map((item) => {
                    const itemIndex = flatItems.indexOf(item);
                    const isSelected = itemIndex === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        data-selected={isSelected}
                        disabled={item.disabled}
                        onClick={() => {
                          item.onSelect();
                          onOpenChange(false);
                        }}
                        onMouseEnter={() => {
                          if (itemIndex >= 0) setSelectedIndex(itemIndex);
                        }}
                        className={cn(
                          'flex h-9 w-full items-center gap-2 rounded-[6px] px-2 text-sm font-medium text-[#191816] outline-none',
                          'transition-colors duration-100',
                          'disabled:pointer-events-none disabled:opacity-50',
                          isSelected ? 'bg-[#EFF1F4]' : 'hover:bg-[#EFF1F4]'
                        )}
                      >
                        {item.icon && (
                          <span className="flex-shrink-0 [&>svg]:h-4 [&>svg]:w-4 text-[#6A707A]">
                            {item.icon}
                          </span>
                        )}
                        <span className="flex-1 text-left truncate">{item.label}</span>
                        {item.shortcut && (
                          <kbd className="ml-auto text-xs text-[#6A707A] font-mono">
                            {item.shortcut}
                          </kbd>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center gap-3 border-t border-[var(--border-default)] px-4 py-2 text-[var(--text-xs)] text-[var(--text-muted)]">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-[var(--border-default)] px-1 py-0.5 font-mono text-[10px]">↑↓</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-[var(--border-default)] px-1 py-0.5 font-mono text-[10px]">↵</kbd>
              Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-[var(--border-default)] px-1 py-0.5 font-mono text-[10px]">Esc</kbd>
              Close
            </span>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

CommandPalette.displayName = 'CommandPalette';

export { CommandPalette };
