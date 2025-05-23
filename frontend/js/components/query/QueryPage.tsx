import { ReactFlowProvider } from "@xyflow/react";
import { useEffect, useState } from "react";

import { Spinner } from "@/components/ui/spinner";
import { QueriesService, Query, QueryResultData } from "api";
import { useErrorToast } from "hooks/useErrorToast";

import Diagrams from "./Diagrams";
import ExecuteQueryButton from "./ExecuteQueryButton";
import QueryEditor from "./QueryEditor";
import ErrorAlert from "./QueryEditor/ErrorAlert";
import QueryLanguageTabs from "./QueryLanguageTabs";
import QueryPanels from "./QueryPanels";
import QueryResult from "./QueryResult";

export type QueryPageProps = {
  queryId: number;
  databaseId: number;
};

const QueryPage = ({ queryId, databaseId }: QueryPageProps) => {
  const [query, setQuery] = useState<Query>();
  const [queryResult, setQueryResult] = useState<QueryResultData>();
  const [isExecuting, setIsExecuting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState<Error | null>(null);
  const toast = useErrorToast();
  const hasErrors = !!query && query.validation_errors.length > 0;

  const handleExecuteQuery = async (): Promise<void> => {
    setIsExecuting(true);
    try {
      const execution = await QueriesService.queriesExecutionsCreate({
        id: queryId,
      });

      setQueryResult(execution.results);
    } catch (err) {
      toast({
        title: "Error executing query",
      });
    } finally {
      setIsExecuting(false);
    }
  };

  useEffect(() => {
    const fetchQuery = async () => {
      setIsLoading(true);
      setQuery(undefined);
      setQueryResult(undefined);
      try {
        const result = await QueriesService.queriesRetrieve({
          id: queryId,
        });
        setQuery(result);
        setLoadingError(null);
      } catch (err) {
        if (err instanceof Error) {
          setLoadingError(err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuery();
  }, [queryId]);

  const renderEditor = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center gap-2 pt-4 text-muted-foreground animate-pulse">
          <Spinner className="text-inherit" size="small" />
          <p>Loading query</p>
        </div>
      );
    }
    if (loadingError) {
      return (
        <ErrorAlert
          description={loadingError.message}
          title="There was an error loading the query"
        />
      );
    }
    if (query) {
      return <QueryEditor key={query.id} query={query} setQuery={setQuery} />;
    }
    return null;
  };

  return (
    <QueryPanels
      left={
        <>
          <div className="flex justify-between items-center gap-2 mb-5 w-full">
            <QueryLanguageTabs
              query={query}
              setIsLoading={setIsLoading}
              setQuery={setQuery}
            />
            <ExecuteQueryButton
              disabled={isExecuting || isLoading || !!loadingError || hasErrors}
              handleExecuteQuery={handleExecuteQuery}
              hasErrors={hasErrors}
              loading={isExecuting}
            />
          </div>
          {renderEditor()}
        </>
      }
      right={
        <ReactFlowProvider>
          <Diagrams
            databaseId={databaseId}
            query={query}
            setQueryResult={setQueryResult}
          >
            {queryResult && <QueryResult result={queryResult} />}
          </Diagrams>
        </ReactFlowProvider>
      }
    />
  );
};

export default QueryPage;
