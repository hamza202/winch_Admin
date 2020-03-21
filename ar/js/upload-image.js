//upload1
const EL_browse = document.getElementById('browse1');
const EL_preview = document.getElementById('preview1');

const readImage = file => {
    if (!(/^image\/(png|jpe?g|gif)$/).test(file.type))
        return EL_preview.insertAdjacentHTML('beforeend', `Unsupported format ${file.type}: ${file.name}<br>`);

    const img = new Image();
    img.addEventListener('load', () => {
        EL_preview.appendChild(img);
        EL_preview.insertAdjacentHTML('beforeend', `<div>${file.name}<div>`);
        window.URL.revokeObjectURL(img.src); // Free some memory
    });
    img.src = window.URL.createObjectURL(file);
};

EL_browse.addEventListener('change', ev => {
    EL_preview.innerHTML = ''; // Remove old images and data
    const files = ev.target.files;
    if (!files || !files[0]) return alert('File upload not supported');
    [...files].forEach(readImage);
});


//////////
const EL_browse2 = document.getElementById('browse2');
const EL_preview2 = document.getElementById('preview2');

const readImage2 = file => {
    if (!(/^image\/(png|jpe?g|gif)$/).test(file.type))
        return EL_preview2.insertAdjacentHTML('beforeend', `Unsupported format ${file.type}: ${file.name}<br>`);

    const img = new Image();
    img.addEventListener('load', () => {
        EL_preview2.appendChild(img);
        EL_preview2.insertAdjacentHTML('beforeend', `<div>${file.name}<div>`);
        window.URL.revokeObjectURL(img.src); // Free some memory
    });
    img.src = window.URL.createObjectURL(file);
};

EL_browse2.addEventListener('change', ev => {
    EL_preview2.innerHTML = ''; // Remove old images and data
    const files = ev.target.files;
    if (!files || !files[0]) return alert('File upload not supported');
    [...files].forEach(readImage2);
});

///////
const EL_browse3 = document.getElementById('browse3');
const EL_preview3 = document.getElementById('preview3');

const readImage3 = file => {
    if (!(/^image\/(png|jpe?g|gif)$/).test(file.type))
        return EL_preview3.insertAdjacentHTML('beforeend', `Unsupported format ${file.type}: ${file.name}<br>`);

    const img = new Image();
    img.addEventListener('load', () => {
        EL_preview3.appendChild(img);
        EL_preview3.insertAdjacentHTML('beforeend', `<div>${file.name}<div>`);
        window.URL.revokeObjectURL(img.src); // Free some memory
    });
    img.src = window.URL.createObjectURL(file);
};

EL_browse3.addEventListener('change', ev => {
    EL_preview3.innerHTML = ''; // Remove old images and data
    const files = ev.target.files;
    if (!files || !files[0]) return alert('File upload not supported');
    [...files].forEach(readImage3);
});