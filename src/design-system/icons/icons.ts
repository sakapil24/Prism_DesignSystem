/**
 * CRM Design System Example — Icon Registry
 *
 * CRM uses custom fill-based SVG icons (not Lucide/Heroicons).
 * This module provides a curated set of commonly-used icons
 * as React components wrapping inline SVG paths.
 *
 * All icons render at 16x16 by default with currentColor fill.
 */

import * as React from 'react';

/* ─── Icon Factory ─── */

interface IconComponentProps extends React.SVGAttributes<SVGElement> {
  size?: number;
}

function createIcon(displayName: string, path: string, viewBox = '0 0 16 16') {
  const Component = React.forwardRef<SVGSVGElement, IconComponentProps>(
    ({ size = 16, className, ...props }, ref) =>
      React.createElement(
        'svg',
        {
          ref,
          width: size,
          height: size,
          viewBox,
          fill: 'currentColor',
          xmlns: 'http://www.w3.org/2000/svg',
          className: `shrink-0 ${className ?? ''}`.trim(),
          'aria-hidden': 'true',
          ...props,
        },
        React.createElement('path', { d: path }),
      ),
  );
  Component.displayName = displayName;
  return Component;
}

/* ─── Navigation Icons ─── */

export const HomeIcon = createIcon(
  'HomeIcon',
  'M8 1.25a.75.75 0 01.468.164l5.5 4.4A.75.75 0 0114.5 6.5V13a1.5 1.5 0 01-1.5 1.5H9.75a.75.75 0 01-.75-.75v-3H7v3a.75.75 0 01-.75.75H3A1.5 1.5 0 011.5 13V6.5a.75.75 0 01.532-.686l5.5-4.4A.75.75 0 018 1.25z',
);

export const SearchIcon = createIcon(
  'SearchIcon',
  'M7 2.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM1 7a6 6 0 1110.742 3.628l2.815 2.815a.75.75 0 11-1.061 1.061l-2.815-2.815A6 6 0 011 7z',
);

export const BellIcon = createIcon(
  'BellIcon',
  'M8 1.5A4.5 4.5 0 003.5 6v2.379L2.22 9.659a.75.75 0 00.53 1.281h10.5a.75.75 0 00.53-1.281L12.5 8.379V6A4.5 4.5 0 008 1.5zM6.268 12.06a.75.75 0 00-1.036 1.086A2.99 2.99 0 008 14.25a2.99 2.99 0 002.768-1.104.75.75 0 10-1.036-1.086A1.49 1.49 0 018 12.75a1.49 1.49 0 01-1.732-.69z',
);

/* ─── Record Icons ─── */

export const CompanyIcon = createIcon(
  'CompanyIcon',
  'M2 3a1 1 0 011-1h4a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm7 3a1 1 0 011-1h3a1 1 0 011 1v7a1 1 0 01-1 1h-3a1 1 0 01-1-1V6zM4 4.5a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm6-2a.5.5 0 01.5-.5h.5a.5.5 0 010 1H10.5a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h.5a.5.5 0 010 1H10.5a.5.5 0 01-.5-.5z',
);

export const PersonIcon = createIcon(
  'PersonIcon',
  'M8 2a3 3 0 100 6 3 3 0 000-6zM3.5 12.5c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75z',
);

export const DealIcon = createIcon(
  'DealIcon',
  'M2.5 2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5H4V2H2.5zM5 2v12h2.5V8.5h1V14H11V5.5h1V14h1.5a.5.5 0 00.5-.5V2.5a.5.5 0 00-.5-.5H5z',
);

/* ─── Action Icons ─── */

export const PlusIcon = createIcon(
  'PlusIcon',
  'M8 2.75a.75.75 0 01.75.75v3.75h3.75a.75.75 0 010 1.5H8.75v3.75a.75.75 0 01-1.5 0V8.75H3.5a.75.75 0 010-1.5h3.75V3.5A.75.75 0 018 2.75z',
);

export const CloseIcon = createIcon(
  'CloseIcon',
  'M4.28 3.22a.75.75 0 00-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 101.06 1.06L8 9.06l3.72 3.72a.75.75 0 101.06-1.06L9.06 8l3.72-3.72a.75.75 0 00-1.06-1.06L8 6.94 4.28 3.22z',
);

export const EditIcon = createIcon(
  'EditIcon',
  'M11.854 2.146a.5.5 0 00-.708 0L3.5 9.793V12.5h2.707l7.647-7.646a.5.5 0 000-.708l-2-2zM9.854 1.146a2 2 0 012.292 0l2 2a2 2 0 010 2.708L6.354 13.646a.5.5 0 01-.354.146H3a.5.5 0 01-.5-.5v-3a.5.5 0 01.146-.354l7.208-7.792z',
);

export const TrashIcon = createIcon(
  'TrashIcon',
  'M6.5 2a.5.5 0 00-.447.276L5.382 3.5H3a.75.75 0 000 1.5h.042l.61 7.934A1.5 1.5 0 005.148 14.5h5.704a1.5 1.5 0 001.496-1.566l.61-7.934H13a.75.75 0 000-1.5h-2.382l-.671-1.224A.5.5 0 009.5 2h-3zM7 6.75a.75.75 0 011.5 0v4a.75.75 0 01-1.5 0v-4z',
);

export const MoreHorizontalIcon = createIcon(
  'MoreHorizontalIcon',
  'M4 8a1.25 1.25 0 11-2.5 0A1.25 1.25 0 014 8zm5.25 0a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM14.5 8a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z',
);

export const FilterIcon = createIcon(
  'FilterIcon',
  'M1.75 4a.75.75 0 01.75-.75h11a.75.75 0 010 1.5h-11A.75.75 0 011.75 4zm2 4a.75.75 0 01.75-.75h7a.75.75 0 010 1.5h-7A.75.75 0 013.75 8zm2 4a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75z',
);

export const SortIcon = createIcon(
  'SortIcon',
  'M5.22 3.22a.75.75 0 011.06 0l2.5 2.5a.75.75 0 01-1.06 1.06L6 5.06l-1.72 1.72a.75.75 0 01-1.06-1.06l2.5-2.5zm5.56 9.56a.75.75 0 01-1.06 0l-2.5-2.5a.75.75 0 011.06-1.06L10 10.94l1.72-1.72a.75.75 0 111.06 1.06l-2.5 2.5z',
);

export const ShareIcon = createIcon(
  'ShareIcon',
  'M12.5 2.5a1.5 1.5 0 11-1.08 2.546L6.695 7.68a1.5 1.5 0 010 .64l4.725 2.634A1.5 1.5 0 1111 13.5a1.5 1.5 0 01.42-1.046L6.695 9.82a1.5 1.5 0 110-3.64l4.725-2.634A1.5 1.5 0 0112.5 2.5z',
);

/* ─── UI Chrome Icons ─── */

export const ChevronDownIcon = createIcon(
  'ChevronDownIcon',
  'M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z',
);

export const ChevronRightIcon = createIcon(
  'ChevronRightIcon',
  'M6.22 4.22a.75.75 0 011.06 0l3.25 3.25a.75.75 0 010 1.06l-3.25 3.25a.75.75 0 01-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 010-1.06z',
);

export const ChevronLeftIcon = createIcon(
  'ChevronLeftIcon',
  'M9.78 4.22a.75.75 0 010 1.06L7.06 8l2.72 2.72a.75.75 0 11-1.06 1.06L5.47 8.53a.75.75 0 010-1.06l3.25-3.25a.75.75 0 011.06 0z',
);

export const CheckIcon = createIcon(
  'CheckIcon',
  'M12.416 4.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.739a.75.75 0 011.04-.208z',
);

export const ArrowLeftIcon = createIcon(
  'ArrowLeftIcon',
  'M7.78 3.22a.75.75 0 010 1.06L5.06 7.25H13a.75.75 0 010 1.5H5.06l2.72 2.97a.75.75 0 11-1.06 1.06l-4-4.25a.75.75 0 010-1.06l4-4.25a.75.75 0 011.06 0z',
);

export const ExternalLinkIcon = createIcon(
  'ExternalLinkIcon',
  'M8.75 2.5a.75.75 0 01.75-.75h4.25a.75.75 0 01.75.75v4.25a.75.75 0 01-1.5 0V4.06l-5.22 5.22a.75.75 0 01-1.06-1.06l5.22-5.22H9.5a.75.75 0 01-.75-.75zM3.5 4.75A.75.75 0 014.25 4h2.5a.75.75 0 010 1.5H4.75v6.75h6.75V10a.75.75 0 011.5 0v2.75a.75.75 0 01-.75.75h-8.5a.75.75 0 01-.75-.75v-8z',
);

/* ─── Content / Field Icons ─── */

export const MailIcon = createIcon(
  'MailIcon',
  'M1.5 4A1.5 1.5 0 013 2.5h10A1.5 1.5 0 0114.5 4v8a1.5 1.5 0 01-1.5 1.5H3A1.5 1.5 0 011.5 12V4zm1.902.348L8 7.879l4.598-3.53A.25.25 0 0012.5 4H3.5a.25.25 0 00-.098.348zM3 5.68V12a.25.25 0 00.25.25h9.5A.25.25 0 0013 12V5.68L8.402 9.21a.75.75 0 01-.804 0L3 5.68z',
);

export const PhoneIcon = createIcon(
  'PhoneIcon',
  'M3.833 2.167a1.5 1.5 0 011.94.218l1.5 1.667a1.5 1.5 0 01-.122 2.062l-.43.387a.25.25 0 00-.03.032c.327.643.82 1.302 1.388 1.87.569.569 1.228 1.062 1.87 1.388a.25.25 0 00.032-.03l.387-.43a1.5 1.5 0 012.062-.122l1.667 1.5a1.5 1.5 0 01.218 1.94l-.61.915A2 2 0 0112 14.282C7.27 13.59 2.41 8.73 1.718 4a2 2 0 01.7-1.705l.915-.61z',
);

export const CalendarIcon = createIcon(
  'CalendarIcon',
  'M5.5 1a.75.75 0 01.75.75V3h3.5V1.75a.75.75 0 011.5 0V3h1.25A1.5 1.5 0 0114 4.5v8A1.5 1.5 0 0112.5 14h-9A1.5 1.5 0 012 12.5v-8A1.5 1.5 0 013.5 3h1.25V1.75A.75.75 0 015.5 1zM3.5 7.5v5a.25.25 0 00.25.25h8.5a.25.25 0 00.25-.25v-5h-9z',
);

export const NoteIcon = createIcon(
  'NoteIcon',
  'M3.5 2A1.5 1.5 0 002 3.5v9A1.5 1.5 0 003.5 14h6.379a1.5 1.5 0 001.06-.44l2.622-2.621A1.5 1.5 0 0014 9.879V3.5A1.5 1.5 0 0012.5 2h-9zM5 5.75A.75.75 0 015.75 5h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 015 5.75zM5.75 8a.75.75 0 000 1.5H8a.75.75 0 000-1.5H5.75z',
);

export const TaskIcon = createIcon(
  'TaskIcon',
  'M3 2.5A1.5 1.5 0 014.5 1h7A1.5 1.5 0 0113 2.5v11A1.5 1.5 0 0111.5 15h-7A1.5 1.5 0 013 13.5v-11zm7.78 3.72a.75.75 0 010 1.06l-3 3a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 111.06-1.06l.97.97 2.47-2.47a.75.75 0 011.06 0z',
);

export const FileIcon = createIcon(
  'FileIcon',
  'M3 2.5A1.5 1.5 0 014.5 1h4.379a1.5 1.5 0 011.06.44l3.122 3.121A1.5 1.5 0 0113.5 5.62V13.5A1.5 1.5 0 0112 15H4.5A1.5 1.5 0 013 13.5v-11zM9 2.5H4.75a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25V6H9.75A.75.75 0 019 5.25V2.5z',
);

export const LinkIcon = createIcon(
  'LinkIcon',
  'M6.354 8.354a.5.5 0 01-.708-.708 4 4 0 015.656 0l2.122 2.122a4 4 0 01-5.657 5.656l-1.06-1.06a.5.5 0 11.707-.708l1.06 1.061a3 3 0 004.244-4.243L10.596 8.35a3 3 0 00-4.242 0zm3.292-.708a.5.5 0 01-.708 0 4 4 0 00-5.656 0L1.16 9.768a4 4 0 005.657 5.656l1.06-1.06a.5.5 0 00-.707-.708l-1.06 1.061a3 3 0 01-4.244-4.243L3.989 8.35a3 3 0 014.243 0 .5.5 0 01-.586.296z',
);

export const GlobeIcon = createIcon(
  'GlobeIcon',
  'M8 1a7 7 0 100 14A7 7 0 008 1zM2.5 8a5.5 5.5 0 014.213-5.35C5.903 3.902 5.25 5.845 5.25 8s.653 4.098 1.463 5.35A5.5 5.5 0 012.5 8zm6.787 5.35C10.097 12.098 10.75 10.155 10.75 8s-.653-4.098-1.463-5.35A5.5 5.5 0 0113.5 8a5.5 5.5 0 01-4.213 5.35zM8 2.5c-1.16 0-2.25 2.186-2.25 5.5S6.84 13.5 8 13.5s2.25-2.186 2.25-5.5S9.16 2.5 8 2.5z',
);

/* ─── Misc Icons ─── */

export const SettingsIcon = createIcon(
  'SettingsIcon',
  'M7.068 1.41A.75.75 0 017.75 1h.5a.75.75 0 01.682.41l.588 1.372a5.03 5.03 0 011.093.631l1.415-.376a.75.75 0 01.776.266l.25.433a.75.75 0 01-.094.776l-.827.996a5.06 5.06 0 010 1.264l.827.996a.75.75 0 01.094.776l-.25.433a.75.75 0 01-.776.266l-1.415-.376a5.03 5.03 0 01-1.093.63l-.588 1.373a.75.75 0 01-.682.41h-.5a.75.75 0 01-.682-.41l-.588-1.372a5.03 5.03 0 01-1.093-.631l-1.415.376a.75.75 0 01-.776-.266l-.25-.433a.75.75 0 01.094-.776l.827-.996a5.06 5.06 0 010-1.264l-.827-.996a.75.75 0 01-.094-.776l.25-.433a.75.75 0 01.776-.266l1.415.376a5.03 5.03 0 011.093-.63L7.068 1.41zM8 5.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z',
);

export const StarIcon = createIcon(
  'StarIcon',
  'M8 1.25l1.854 3.756 4.146.603-3 2.924.708 4.131L8 10.653l-3.708 1.95.708-4.13-3-2.925 4.146-.603L8 1.25z',
);

export const ActivityIcon = createIcon(
  'ActivityIcon',
  'M8 2a.75.75 0 01.75.75V8a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5H7.25V2.75A.75.75 0 018 2zM1 8a7 7 0 1114 0A7 7 0 011 8z',
);

export const ImportExportIcon = createIcon(
  'ImportExportIcon',
  'M3.22 5.28a.75.75 0 010-1.06l2.5-2.5a.75.75 0 011.06 0l2.5 2.5a.75.75 0 01-1.06 1.06L7 4.06V10a.75.75 0 01-1.5 0V4.06L4.28 5.28a.75.75 0 01-1.06 0zm6 5.44a.75.75 0 111.06-1.06L11.5 10.94V5a.75.75 0 011.5 0v5.94l1.22-1.22a.75.75 0 111.06 1.06l-2.5 2.5a.75.75 0 01-1.06 0l-2.5-2.5z',
);
