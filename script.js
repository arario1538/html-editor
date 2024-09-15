
const editor = document.getElementById('editor');
const preview = document.getElementById('preview').contentWindow.document;

editor.addEventListener('input', () => {
    preview.open();
    preview.write(editor.value);
    preview.close();
});
