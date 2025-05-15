import React from 'react'

const Toolbar = ({ editor }) => {
  if (!editor) return null

  const buttonClass = "px-3 py-1 border rounded mx-1 text-sm hover:bg-gray-200"

  return (
    <div className="flex flex-wrap justify-start gap-2 mb-4">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${buttonClass} ${editor.isActive('bold') ? 'bg-gray-300 font-bold' : ''}`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${buttonClass} ${editor.isActive('italic') ? 'bg-gray-300 font-bold' : ''}`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`${buttonClass} ${editor.isActive('strike') ? 'bg-gray-300 font-bold' : ''}`}
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${buttonClass} ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-300 font-bold' : ''}`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${buttonClass} ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-300 font-bold' : ''}`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${buttonClass} ${editor.isActive('bulletList') ? 'bg-gray-300 font-bold' : ''}`}
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${buttonClass} ${editor.isActive('orderedList') ? 'bg-gray-300 font-bold' : ''}`}
      >
        Numbered List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${buttonClass} ${editor.isActive('codeBlock') ? 'bg-gray-300 font-bold' : ''}`}
      >
        Code Block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${buttonClass} ${editor.isActive('blockquote') ? 'bg-gray-300 font-bold' : ''}`}
      >
        Quote
      </button>
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
        className={`${buttonClass} text-red-500`}
      >
        Clear
      </button>
    </div>
  )
}

export default Toolbar
