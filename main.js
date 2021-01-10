'use strict';

// 画像を格納する配列imagesを作成
const images = [
    'img/my_portfolio_image.png',
    'img/kujira_cafe_image.png',
    'img/game_quiz_app_image.png'
];
const textArray = [
    'my portfolio',
    'website reproduction',
    'quiz application'
];
// const text = [
//     ['my portfolio', 'https://github.com/Emiri-i/MyPortfolio'],
//     ['website reproduction','https://github.com/Emiri-i/cafe-page-sample'],
//     ['quiz application','https://github.com/Emiri-i/sampleQuiz']
// ];



let currentIndex = 0;
const mainImage = document.getElementById('carousel__main');
console.log(mainImage);
mainImage.src = images[currentIndex];

for (let [index, image] of images.entries()) {
    console.log(index, image);

    //imgタグを作成
    const img = document.createElement('img');
    img.src = image;

    //pタグを作成（画像の説明）
    if (index === currentIndex) {
        const p = document.createElement('p');
        p.textContent = textArray[index];
        p.classList.add('image__explanation');
        //作成したタグを表示
        document.querySelector('.carousel__main').appendChild(p);
        // const parent = document.querySelector('.carousel__main__parent');

        // const parentEl = document.querySelector('.carousel__main');
        // const reference = document.querySelector('.carousel__next');
        // parentEl.insertBefore(p, reference);
    }


    //liタグを作成
    const li = document.createElement('li');
    if (index === currentIndex) {
        li.classList.add('active');
    }

    //liタグ内の画像がクリックされたら、メインイメージのソースを変更、activeに変更する
    li.addEventListener('click', () => {
        mainImage.src = image;
        mainImage.classList.add('active');

        setTimeout(() => {
            mainImage.classList.remove('active');
        }, 800);

        const thumbnails = document.querySelectorAll('.carousel__thumbnails > li');
        thumbnails[currentIndex].classList.remove('current');
        currentIndex = index;
        thumbnails[currentIndex].classList.add('current');
    });

    li.appendChild(img);
    li.classList.add('carousel__thumbnails__image');
    document.querySelector('.carousel__thumbnails').appendChild(li);

}

const next = document.getElementById('carousel__next');
next.addEventListener('click', () => {
    let target = currentIndex + 1;
    if (target === images.length) {
        target = 0;
    }
    document.querySelectorAll('.carousel__thumbnails > li')[target].click();
});

const prev = document.getElementById('carousel__prev');
prev.addEventListener('click', () => {
    let target = currentIndex - 1;
    if (target < 0) {
        target = images.length - 1;
    }
    document.querySelectorAll('.carousel__thumbnails > li')[target].click();
});


