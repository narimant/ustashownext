import React, { useEffect, useRef } from "react";
export default function CKeditor({ onChange, editorLoaded, name, value }) {
    const editorRef = useRef();
    const { CKEditor, ClassicEditor } = editorRef.current || {};
useEffect(() => {
    editorRef.current = {
         CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, 
         ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        };
    }, []);

    const config = {
        language:'fa',
        contentsLangDirection : 'rtl',

        toolbar: [
            'heading',
        '|',
        'mode',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo',
        
    ],
    };
    return (
        <>
           <style>{`.ck-editor__editable_inline { min-height: 400px; direction:rtl}`}</style>
            {editorLoaded ? (
                
                <CKEditor
                
                config={config}
                    type="textarea"
                    name={name}
                    editor={ClassicEditor}
                    data={value}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        onChange(data);
                    }}
                    
                />
            ) : (
                <div>Editor loading</div>
            )}
        </>
    )}