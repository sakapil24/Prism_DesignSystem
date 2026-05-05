/**
 * CRM Design System Example — KanbanBoard Pattern
 *
 * Multi-column drag-and-drop board using @dnd-kit.
 */

import * as React from 'react';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  type DragStartEvent,
  type DragEndEvent,
  type DragOverEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useDroppable } from '@dnd-kit/core';
import { cn } from '../utils/cn';

/* ─── Types ──────────────────────────────────────────────────────────── */

export interface KanbanCardData {
  id: string;
  title: string;
  description?: string;
  badges?: Array<{ label: string; color?: string }>;
  avatarUrl?: string;
  avatarInitials?: string;
}

export interface KanbanColumnData {
  id: string;
  title: string;
  color?: string;
  cards: KanbanCardData[];
}

export interface KanbanBoardProps {
  columns: KanbanColumnData[];
  onCardMove?: (cardId: string, fromColumnId: string, toColumnId: string, newIndex: number) => void;
  renderCard?: (card: KanbanCardData) => React.ReactNode;
  onAddCard?: (columnId: string) => void;
  className?: string;
}

/* ─── Sortable Card ──────────────────────────────────────────────────── */

function SortableCard({ card, renderCard }: { card: KanbanCardData; renderCard?: (card: KanbanCardData) => React.ReactNode }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(isDragging && 'opacity-40')}
      {...attributes}
      {...listeners}
    >
      {renderCard ? renderCard(card) : <DefaultCard card={card} />}
    </div>
  );
}

/* ─── Default Card ───────────────────────────────────────────────────── */

function DefaultCard({ card }: { card: KanbanCardData }) {
  return (
    <div className={cn(
      'rounded-[var(--radius)] border border-[var(--border-subtle)] bg-[var(--surface-page)]',
      'p-3 cursor-grab active:cursor-grabbing',
      'shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]',
      'transition-shadow duration-[var(--duration-fast)]'
    )}>
      <p className="text-[var(--text-sm)] font-[var(--font-medium)] text-[var(--text-primary)]">
        {card.title}
      </p>
      {card.description && (
        <p className="mt-1 text-[var(--text-xs)] text-[var(--text-muted)] line-clamp-2">
          {card.description}
        </p>
      )}
      {card.badges && card.badges.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {card.badges.map((badge, i) => (
            <span
              key={i}
              className="inline-flex h-5 items-center rounded-full px-2 text-[10px] font-[var(--font-medium)]"
              style={{
                backgroundColor: badge.color ? `${badge.color}15` : 'var(--surface-muted)',
                color: badge.color || 'var(--text-secondary)',
              }}
            >
              {badge.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Column ─────────────────────────────────────────────────────────── */

function KanbanColumn({
  column,
  renderCard,
  onAddCard,
}: {
  column: KanbanColumnData;
  renderCard?: (card: KanbanCardData) => React.ReactNode;
  onAddCard?: (columnId: string) => void;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: column.id });

  return (
    <div className="flex w-[280px] shrink-0 flex-col rounded-[var(--radius-xl)] bg-[var(--surface-muted)]">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5">
        <div className="flex items-center gap-2">
          {column.color && (
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: column.color }} />
          )}
          <span className="text-[var(--text-sm)] font-[var(--font-semibold)] text-[var(--text-primary)]">
            {column.title}
          </span>
          <span className="text-[var(--text-xs)] text-[var(--text-muted)]">
            {column.cards.length}
          </span>
        </div>
        {onAddCard && (
          <button
            type="button"
            onClick={() => onAddCard(column.id)}
            className="inline-flex h-6 w-6 items-center justify-center rounded-[var(--radius-md)] text-[var(--icon-muted)] hover:text-[var(--icon-default)] hover:bg-[var(--surface-hover)] transition-colors duration-[var(--duration-fast)]"
            aria-label={`Add card to ${column.title}`}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M6 2v8M2 6h8" />
            </svg>
          </button>
        )}
      </div>

      {/* Cards */}
      <div
        ref={setNodeRef}
        className={cn(
          'flex-1 space-y-2 px-2 pb-2 min-h-[60px] rounded-b-[var(--radius-xl)]',
          'transition-colors duration-[var(--duration-fast)]',
          isOver && 'bg-[var(--accent-primary-subtle)]'
        )}
      >
        <SortableContext items={column.cards.map((c) => c.id)} strategy={verticalListSortingStrategy}>
          {column.cards.map((card) => (
            <SortableCard key={card.id} card={card} renderCard={renderCard} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}

/* ─── KanbanBoard ────────────────────────────────────────────────────── */

function KanbanBoard({ columns: initialColumns, onCardMove, renderCard, onAddCard, className }: KanbanBoardProps) {
  const [columns, setColumns] = React.useState(initialColumns);
  const [activeCard, setActiveCard] = React.useState<KanbanCardData | null>(null);

  React.useEffect(() => {
    setColumns(initialColumns);
  }, [initialColumns]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const findColumn = (id: string) => {
    // Check if id is a column
    const col = columns.find((c) => c.id === id);
    if (col) return col;
    // Otherwise find which column has this card
    return columns.find((c) => c.cards.some((card) => card.id === id));
  };

  const handleDragStart = (event: DragStartEvent) => {
    const col = findColumn(event.active.id as string);
    const card = col?.cards.find((c) => c.id === event.active.id);
    if (card) setActiveCard(card);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeCol = findColumn(active.id as string);
    const overCol = findColumn(over.id as string);
    if (!activeCol || !overCol || activeCol.id === overCol.id) return;

    setColumns((prev) => {
      const activeCards = [...activeCol.cards];
      const overCards = [...overCol.cards];
      const activeIndex = activeCards.findIndex((c) => c.id === active.id);
      const [moved] = activeCards.splice(activeIndex, 1);

      const overIndex = overCards.findIndex((c) => c.id === over.id);
      if (overIndex >= 0) {
        overCards.splice(overIndex, 0, moved);
      } else {
        overCards.push(moved);
      }

      return prev.map((col) => {
        if (col.id === activeCol.id) return { ...col, cards: activeCards };
        if (col.id === overCol.id) return { ...col, cards: overCards };
        return col;
      });
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveCard(null);
    if (!over) return;

    const activeCol = findColumn(active.id as string);
    const overCol = findColumn(over.id as string);
    if (!activeCol || !overCol) return;

    if (activeCol.id === overCol.id) {
      const oldIndex = activeCol.cards.findIndex((c) => c.id === active.id);
      const newIndex = activeCol.cards.findIndex((c) => c.id === over.id);
      if (oldIndex !== newIndex) {
        setColumns((prev) =>
          prev.map((col) =>
            col.id === activeCol.id
              ? { ...col, cards: arrayMove(col.cards, oldIndex, newIndex) }
              : col
          )
        );
        onCardMove?.(active.id as string, activeCol.id, overCol.id, newIndex);
      }
    } else {
      const newIndex = overCol.cards.findIndex((c) => c.id === active.id);
      onCardMove?.(active.id as string, activeCol.id, overCol.id, newIndex >= 0 ? newIndex : overCol.cards.length - 1);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className={cn('flex gap-4 overflow-x-auto pb-2', className)}>
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            column={column}
            renderCard={renderCard}
            onAddCard={onAddCard}
          />
        ))}
      </div>
      <DragOverlay>
        {activeCard ? (
          <div className="opacity-90 shadow-[var(--shadow-lg)] rounded-[var(--radius)]">
            {renderCard ? renderCard(activeCard) : <DefaultCard card={activeCard} />}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

KanbanBoard.displayName = 'KanbanBoard';

export { KanbanBoard, KanbanColumn, DefaultCard as KanbanCard };
