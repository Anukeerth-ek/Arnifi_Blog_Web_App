import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import { useEffect } from "react";
import './blogs.css';

const BlogEditor = ({ setValue }) => {
     const editor = useEditor({
          extensions: [StarterKit],
          content: "<p>Write your blog here...</p>",
          onUpdate: ({ editor }) => {
               const html = editor.getHTML();
               setValue(html); 
          },
     });

     return (
          <div className="max-w-4xl mx-auto mt-12 border p-4 rounded-md shadow-sm">
               <Toolbar editor={editor} />
               <div className="py-2 px-2">
                    <EditorContent editor={editor} className="ProseMirror-custom" style={{ padding: "7px", border: "1px solid wheat" }} />
               </div>
          </div>
     );
};

export default BlogEditor;
