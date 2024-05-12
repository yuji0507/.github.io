// ボタンと画像の要素を取得
const changeButton = document.getElementById('changeButton');
const photo = document.getElementById('photo');

// ボタンがクリックされたときのイベントを設定
changeButton.addEventListener('click', () => {
    // 新しい画像のURLを設定
    const newPhotoURL = 'newphoto.jpg';

    // 画像のsrc属性を新しいURLに変更
    photo.src = 'https://yuji0507.github.io/.github.io/IMG20240501122057.jpg';
});