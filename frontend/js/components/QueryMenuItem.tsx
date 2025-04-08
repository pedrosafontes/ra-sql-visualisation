import { Ellipsis, Pencil, Trash } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

interface QueryMenuItemProps {
  name: string;
  isActive: boolean;
  onSelect: () => void;
  onRename: (newName: string) => void;
  onDelete: () => void;
  isCreating?: boolean;
  onCreationEnd?: () => void;
}

const QueryMenuItem = ({
  name,
  isActive,
  onSelect,
  onRename,
  onDelete,
  isCreating,
  onCreationEnd,
}: QueryMenuItemProps) => {
  const [manuallyEditing, setManuallyEditing] = useState(false);
  const [inputValue, setInputValue] = useState(name);
  const inputRef = useRef<HTMLInputElement>(null);
  const editing = isCreating || manuallyEditing;

  useEffect(() => {
    setInputValue(name);
  }, [name]);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  const handleRename = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && trimmedValue !== name) {
      onRename(trimmedValue);
    } else {
      setInputValue(name); // Reset to original name if empty or unchanged
    }
    endEditing();
  };

  const endEditing = () =>
    isCreating ? onCreationEnd?.() : setManuallyEditing(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleRename();
    } else if (e.key === "Escape") {
      endEditing();
    }
  };

  return (
    <SidebarMenuItem className={`${editing ? "py-1" : ""}`}>
      {editing ? (
        <Input
          ref={inputRef}
          className="h-8 text-sm"
          value={inputValue}
          onBlur={handleRename}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <SidebarMenuButton
          className="group justify-between"
          isActive={isActive}
          onClick={onSelect}
        >
          <span className="truncate">{name}</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                size="icon"
                variant="ghost"
                onClick={(e) => e.stopPropagation()}
              >
                <Ellipsis />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="right">
              <DropdownMenuItem onClick={() => setManuallyEditing(true)}>
                <Pencil />
                Rename
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive" onClick={onDelete}>
                <Trash />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuButton>
      )}
    </SidebarMenuItem>
  );
};

export default QueryMenuItem;
