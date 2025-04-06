import { useEffect, useState } from "react";

import { ProjectsService, Query } from "../api";
import QueryExplorer from "../components/QueryExplorer";
import QueryTabs from "../components/QueryTabs";
import { useParams } from "react-router";

const QueriesExplorer = () => {
  const [queries, setQueries] =
    useState<Awaited<ReturnType<typeof ProjectsService.projectsQueriesList>>>();
  const [currentQueryId, setCurrentQueryId] = useState<string | undefined>(
    undefined,
  );
  const { projectId } = useParams<{ projectId: string }>();
  const projectPk = Number(projectId);

  const query = queries?.find(
    (query) => query.id.toString() === currentQueryId,
  );

  const fetchQueries = async () => {
    const result = await ProjectsService.projectsQueriesList({ projectPk: projectPk });
    setQueries(result);
  };

  const createQuery = async (): Promise<void> => {
    try {
      await ProjectsService.projectsQueriesCreate({
        projectPk: projectPk,
        requestBody: {
          name: "Query",
          text: "",
        } as Query,
      });

      fetchQueries();
    } catch (error) {
      console.error("Error creating query:", error);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="grid grid-cols-8 gap-4 h-full">
        <div className="col-span-1 overflow-auto px-3 border-r py-5">
          {queries && (
            <QueryTabs
              currentQueryId={currentQueryId}
              queries={queries}
              onCreate={createQuery}
              onSelect={setCurrentQueryId}
            />
          )}
        </div>
        <div className="col-span-7">
          {query && <QueryExplorer key={query.id} query={query} />}
        </div>
      </div>
    </div>
  );
};

export default QueriesExplorer;
