/**
 * CodeView - Display and copy generated React/React Native code
 * Feature 003: Component Tracking and Code Export
 */

import { useState } from "react";
import ReactDOMServer from "react-dom/server";
import type { PageEntity } from "@/utils/types";
import { CodeBlock } from "@/components/common/CodeBlock";
import { UITPage } from "../build-kit/pages/UITPage";
import { UITContainer } from "../build-kit/containers/UITContainer";
import { UITButton } from "../build-kit/components/ui/UITButton";

interface CodeViewProps {
  pages: PageEntity[];
  className?: string;
}

type CodeFormat = "react" | "react-native";

export function CodeView({ pages, className = "" }: CodeViewProps) {
  const [format, setFormat] = useState<CodeFormat>("react");
  const [copied, setCopied] = useState(false);

  const generateCode = () => {
    if (format === "react") {
      const htmlString = ReactDOMServer.renderToStaticMarkup(
        <UITPage>
          <UITContainer>
            <UITButton>butt</UITButton>
          </UITContainer>
        </UITPage>
      );
      return htmlString;
    } else if (format === "react-native") {
      ReactDOMServer.renderToStaticMarkup("<p>Generate React Native Code</p>");
    } else {
      throw new Error("Unsupported code format");
    }
  };

  const handleCopy = async () => {
    const code = generateCode();
    console.log(JSON.stringify(pages));

    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code || "error");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback for older browsers or non-HTTPS
        const textArea = document.createElement("textarea");
        textArea.value = code || "error";
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand("copy");
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error("Copy failed:", err);
          // Show fallback modal or notification
          alert("Copy failed. Please manually select and copy the code.");
        } finally {
          document.body.removeChild(textArea);
        }
      }
    } catch (err) {
      console.error("Copy failed:", err);
      // Show error notification
      alert("Copy failed. Please manually select and copy the code.");
    }
  };

  const code = generateCode() || "<p>Error generating code</p>";

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Header with format toggle and copy button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Format:</span>
          <div className="flex rounded-md shadow-sm">
            <button
              type="button"
              onClick={() => setFormat("react")}
              className={`px-3 py-1 text-sm font-medium rounded-l-md border ${
                format === "react"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              React
            </button>
            <button
              type="button"
              onClick={() => setFormat("react-native")}
              className={`px-3 py-1 text-sm font-medium rounded-r-md border-l-0 border ${
                format === "react-native"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              React Native
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            copied
              ? "bg-green-600 text-white"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {copied ? (
            <>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code display */}
      <div className="flex-1 overflow-hidden">
        <pre className="h-full overflow-auto p-4 text-sm bg-gray-900 text-gray-100 font-mono">
          <CodeBlock
            code={code}
            language="jsx"
            filename={format === "react" ? "App.jsx" : "App.tsx"}
          />
        </pre>
      </div>

      {/* Footer with code stats */}
      <div className="px-4 py-2 border-t border-gray-200 bg-gray-50 text-xs text-gray-600">
        {code.split("\n").length} lines • {code.length} characters •{" "}
        {format === "react" ? "React JSX" : "React Native"}
      </div>
    </div>
  );
}
