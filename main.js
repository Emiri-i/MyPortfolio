'use strict';

// 画像を格納する配列imagesを作成
const images = [
    'img/my_portfolio_image.png',
    'img/kujira_cafe_image.png',
    'img/game_quiz_app_image.png'
];
const textArray = [
    ['my portfolio', 'https://emiri-i.github.io/MyPortfolio'],
    ['website reproduction','https://emiri-i.github.io/cafe-page-sample'],
    ['quiz application','https://emiri-i.github.io/sampleQuiz']
];



let currentIndex = 0;
const mainImage = document.getElementById('carousel__main');
mainImage.src = images[currentIndex];

for (let [index, image] of images.entries()) {

    //imgタグを作成
    const img = document.createElement('img');
    img.src = image;

    //pタグを作成（画像の説明）
    if (index === currentIndex) {

        //画像の下の文章
        const p = document.createElement('p');
        p.textContent = textArray[index][0];
        
        // //カード全体をリンクにする
        // const a = document.createElement('a');
        // a.href  = textArray[index][1];

        p.classList.add('image__explanation');

        // //作成したaタグを表示
        // document.querySelector('.carousel__main').appendChild(a);
        //作成したpタグを表示
        document.querySelector('.carousel__main').appendChild(p);

    }


    //liタグを作成
    const li = document.createElement('li');
    if (index === currentIndex) {
        li.classList.add('current');
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

        //.image__explanationのtextContentを取得して、挿入する
        const p = document.querySelector('.image__explanation');
        p.textContent = textArray[index][0];
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

//カード全体をクリックしたときにGitページに遷移する
const carouselMain = document.getElementById('carousel__main');
carouselMain.addEventListener('click', () => {
    const href  = textArray[currentIndex][1];
    console.log(textArray[currentIndex][1]);
    window.open(href);
});



