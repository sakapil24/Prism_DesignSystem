/**
 * CRM Design System Example — SortableList Pattern
 *
 * Vertical sortable list using @dnd-kit.
 * Provides drag handles, reorder callback, and drag overlay.
 */

import * as React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  type DragStartEvent,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { cn } from '../utils/cn';

/* ─── SortableItem ───────────────────────────────────────────────────── */

export interface SortableItemProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

function SortableItem({ id, children, className }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        'group relative flex items-center gap-2',
        'rounded-[var(--radius)] border border-transparent',
        'transition-[border-color,box-shadow] duration-[var(--duration-fast)]',
        isDragging && 'z-10 opacity-50',
        className
      )}
      {...attributes}
    >
      {/* Drag handle */}
      <button
        type="button"
        aria-label="Drag to reorder"
        className={cn(
          'inline-flex h-6 w-4 cursor-grab items-center justify-center rounded-[var(--radius-sm)]',
          'text-[var(--icon-muted)] opacity-0 group-hover:opacity-100',
          'transition-opacity duration-[var(--duration-fast)]',
          'hover:text-[var(--icon-default)] hover:bg-[var(--surface-hover)]',
          'active:cursor-grabbing',
          'focus-visible:outline-none focus-visible:opacity-100'
        )}
        {...listeners}
      >
        <svg width="10" height="14" viewBox="0 0 10 14" fill="currentColor">
          <circle cx="3" cy="3" r="1.25" />
          <circle cx="7" cy="3" r="1.25" />
          <circle cx="3" cy="7" r="1.25" />
          <circle cx="7" cy="7" r="1.25" />
          <circle cx="3" cy="11" r="1.25" />
          <circle cx="7" cy="11" r="1.25" />
        </svg>
      </button>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}

/* ─── SortableList ───────────────────────────────────────────────────── */

export interface SortableListProps<T extends { id: string }> {
  items: T[];
  onReorder: (items: T[]) => void;
  renderItem: (item: T) => React.ReactNode;
  renderOverlay?: (item: T) => React.ReactNode;
  className?: string;
  gap?: number;
}

function SortableList<T extends { id: string }>({
  items,
  onReorder,
  renderItem,
  renderOverlay,
  className,
  gap = 4,
}: SortableListProps<T>) {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const activeItem = activeId ? items.find((i) => i.id === activeId) : null;

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);
      onReorder(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
        <div className={cn('flex flex-col', className)} style={{ gap }}>
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id}>
              {renderItem(item)}
            </SortableItem>
          ))}
        </div>
      </SortableContext>
      <DragOverlay>
        {activeItem ? (
          <div className="rounded-[var(--radius)] border border-[var(--border-accent)] bg-[var(--surface-elevated)] shadow-[var(--shadow-lg)] px-3 py-2 opacity-90">
            {renderOverlay ? renderOverlay(activeItem) : renderItem(activeItem)}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

SortableList.displayName = 'SortableList';
SortableItem.displayName = 'SortableItem';

export { SortableList, SortableItem, arrayMove };
