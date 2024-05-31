import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const RichTextEditor = ({ value, onChange }) => {
    const quillRef = useRef(null);
  return (
    <ReactQuill ref={quillRef} value={value} onChange={onChange} theme="snow" />
  );
};

export default RichTextEditor;
