import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "@/components/ui/context-menu";
import { ReactNode } from "react";

export interface ContextMenuAction {
  label?: string;
  icon?: ReactNode;
  shortcut?: string;
  onClick?: () => void;
  disabled?: boolean;
  separator?: boolean;
  submenu?: ContextMenuAction[];
}

interface ContextMenuWrapperProps {
  children: ReactNode;
  actions: ContextMenuAction[];
}

export function ContextMenuWrapper({ children, actions }: ContextMenuWrapperProps) {
  const renderMenuItem = (action: ContextMenuAction, index: number) => {
    if (action.separator) {
      return <ContextMenuSeparator key={`sep-${index}`} />;
    }

    if (action.submenu) {
      return (
        <ContextMenuSub key={action.label}>
          <ContextMenuSubTrigger className="flex items-center gap-2">
            {action.icon}
            {action.label}
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            {action.submenu.map((subAction, subIndex) => renderMenuItem(subAction, subIndex))}
          </ContextMenuSubContent>
        </ContextMenuSub>
      );
    }

    return (
      <ContextMenuItem
        key={action.label}
        onClick={action.onClick}
        disabled={action.disabled}
        className="flex items-center gap-2"
      >
        {action.icon}
        <span className="flex-1">{action.label}</span>
        {action.shortcut && <ContextMenuShortcut>{action.shortcut}</ContextMenuShortcut>}
      </ContextMenuItem>
    );
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        {actions.map((action, index) => renderMenuItem(action, index))}
      </ContextMenuContent>
    </ContextMenu>
  );
}
