'use client';
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const TiptapEditor = ({ onChange }: { onChange: (html: string) => void }) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '',
        onUpdate({ editor }) {
            onChange(editor.getHTML());
        },
    });

    return (
        <div className="border p-2 rounded min-h-[150px]">
            <EditorContent editor={editor} />
        </div>
    );
};

export default TiptapEditor;
