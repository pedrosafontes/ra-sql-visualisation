import {
  ArrowLeft,
  FilePlus,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "lib/utils";

import {
  ProjectsService,
  QueriesService,
  Query,
  type Project,
} from "../../api";
import { useErrorToast } from "../../hooks/useErrorToast";

import QueryMenuItem from "./QueryMenuItem";

type ProjectSidebarProps = {
  project: Project;
  currentQueryId?: number;
  setCurrentQueryId: (id: number | undefined) => void;
  onSuccess: () => void;
};

const ProjectSidebar = ({
  project,
  currentQueryId,
  setCurrentQueryId,
  onSuccess,
}: ProjectSidebarProps) => {
  const [creatingQueryId, setCreatingQueryId] = useState<number | null>(null);

  const { queries } = project;

  const navigate = useNavigate();

  const toast = useErrorToast();

  useEffect(() => {
    if (!currentQueryId && queries.length > 0) {
      setCurrentQueryId(queries[0].id);
    }
  }, [queries, currentQueryId, setCurrentQueryId]);

  const createQuery = async (): Promise<void> => {
    try {
      const newQuery = await ProjectsService.projectsQueriesCreate({
        projectPk: project.id,
        requestBody: {
          name: "Untitled",
        } as Query,
      });
      setOpen(true);
      onSuccess();
      setCurrentQueryId(newQuery.id);
      setCreatingQueryId(newQuery.id);
    } catch (error) {
      toast({
        title: "Error creating query",
      });
    }
  };

  const renameQuery = async (id: number, name: string): Promise<void> => {
    try {
      await QueriesService.queriesPartialUpdate({
        id,
        requestBody: {
          name,
        },
      });
      onSuccess();
    } catch (error) {
      toast({
        title: "Error renaming query",
      });
    }
  };

  const deleteQuery = async (id: number): Promise<void> => {
    try {
      await QueriesService.queriesDestroy({
        id,
      });
      await onSuccess();
      if (currentQueryId === id) {
        setCurrentQueryId(undefined);
      }
    } catch (error) {
      toast({
        title: "Error deleting query",
      });
    }
  };

  const { open, toggleSidebar, setOpen } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu className={open ? "flex flex-row justify-between" : ""}>
          {open && (
            <SidebarMenuItem className="flex items-center">
              <Button
                className="mr-2"
                size="inline"
                variant="link"
                onClick={() => navigate("/projects")}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-sm text-ellipsis">{project.name}</h1>
            </SidebarMenuItem>
          )}
          <SidebarMenuItem
            className={cn(
              "text-sm inline",
              open ? "text-muted-foreground" : "text-primary",
            )}
          >
            <SidebarMenuButton onClick={toggleSidebar}>
              {open ? <PanelLeftClose /> : <PanelLeftOpen />}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {open ? (
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center justify-between">
              <span>Queries</span>
              <Button
                aria-label="Create Query"
                className="justify-end"
                size="icon"
                variant="link"
                onClick={createQuery}
              >
                <FilePlus />
              </Button>
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {queries.map(({ id, name }) => (
                  <QueryMenuItem
                    key={id}
                    isActive={currentQueryId === id}
                    isCreating={creatingQueryId === id}
                    name={name}
                    onCreationEnd={() => setCreatingQueryId(null)}
                    onDelete={() => deleteQuery(id)}
                    onRename={(name: string) => renameQuery(id, name)}
                    onSelect={() => setCurrentQueryId(id)}
                  />
                ))}
                {queries.length === 0 && (
                  <span className="text-sm text-muted-foreground p-2">
                    Click the{" "}
                    <FilePlus className="inline align-baseline h-4 w-4" />{" "}
                    button to create your first query.
                  </span>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      ) : (
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={createQuery}>
                    <FilePlus />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      )}
    </Sidebar>
  );
};

export default ProjectSidebar;
