"use client";
// InitializedMDXEditor.tsx
import type { ForwardedRef } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
} from "@mdxeditor/editor";
import { basicDark } from "cm6-theme-basic-dark";
import { useTheme } from "next-themes";

interface Props{
    value: string;
    fieldChange: (value:string) => void; 
    editorRef: ForwardedRef<MDXEditorMethods> | null;
}

const Editor = ({value, editorRef, fieldChange, ...props}: Props) => {
    const { resolvedTheme } = useTheme();

    const themeExtension = resolvedTheme === "dark" ? [basicDark] : []; 

  return (
    <MDXEditor
    key={resolvedTheme}
    markdown={value}
    className="background-light800_dark200 light-border-2 markdown-editor dark-editor w-full border"
    onChange={fieldChange}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
      ]}
      {...props}
      ref={editorRef}
    />
  );
};

export default Editor;
