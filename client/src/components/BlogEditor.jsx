import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'
// import './BlogEditor.css'  // Optional for styling

const BlogEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Write your blog here...</p>',
  })

  return (
    <div className="max-w-4xl mx-auto mt-12 border p-4 rounded-md shadow-sm">
        <Toolbar editor={editor}/>
      <div className='py-2 px-2'>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

export default BlogEditor
