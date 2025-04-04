import MonacoEditor, { Monaco } from "@monaco-editor/react";
import { AlertTriangle, CheckCircle, Loader2 } from "lucide-react";
import { editor } from "monaco-editor";
import { useEffect, useRef, useState } from "react";

import { QueriesService, Query, QueryError } from "../api";
import { useAutosave } from "../hooks/useAutosave";

const QueryEditor = ({ query }: { query: Query }) => {
  const [text, setText] = useState<string>(query.text);
  const [errors, setErrors] = useState<QueryError[]>([]);
  const monacoRef = useRef<Monaco | null>(null);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const updateQuery = async (queryText: string): Promise<void> => {
    try {
      const result = await QueriesService.queriesPartialUpdate({
        id: query.id,
        requestBody: {
          text: queryText,
        },
      });

      setErrors(result?.errors ?? []);
    } catch (err) {
      console.error("Error updating query:", err);
    }
  };

  const updateErrorMarkers = () => {
    if (!monacoRef.current || !editorRef.current) return;

    const model = editorRef.current.getModel();
    if (!model) return;

    if (errors.length > 0) {
      const markers = errors.map((error) => {
        return {
          startLineNumber: error.line,
          endLineNumber: error.line,
          startColumn: error.start_col,
          endColumn: error.end_col,
          message: error.message,
          severity: monacoRef.current!.MarkerSeverity.Error,
        };
      });
      monacoRef.current.editor.setModelMarkers(
        model,
        "autosave-feedback",
        markers,
      );
    } else {
      monacoRef.current.editor.setModelMarkers(model, "autosave-feedback", []);
    }
  };

  useEffect(() => {
    updateErrorMarkers();
  }, [errors]);

  const status = useAutosave({ data: text, onSave: updateQuery });

  const renderStatus = () => {
    switch (status) {
      case "saving":
        return (
          <span className="inline-flex items-center gap-1 text-gray-400 animate-pulse">
            <Loader2 className="h-3 w-3 animate-spin" />
            Saving...
          </span>
        );
      case "error":
        return (
          <span className="inline-flex items-center gap-1 text-red-500">
            <AlertTriangle className="h-3 w-3" />
            Error saving
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-green-600">
            <CheckCircle className="h-3 w-3" />
            Saved!
          </span>
        );
    }
  };

  return (
    <>
      <MonacoEditor
        defaultLanguage="sql"
        height="500px"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          wordWrap: "on",
          tabSize: 2,
          lineNumbers: "on",
          formatOnType: true,
          formatOnPaste: true,
          lineNumbersMinChars: 2,
        }}
        theme="vs-light"
        value={text}
        onChange={(value) => setText(value || "")}
        onMount={(editor, monaco) => {
          editorRef.current = editor;
          monacoRef.current = monaco;
          updateQuery(text);
        }}
      />
      <div className="flex justify-end text-xs mt-2">{renderStatus()}</div>
    </>
  );
};

export default QueryEditor;
