const imgs = [];
imgs[1] = 'https://i.postimg.cc/GpNxfKQt/Bg-1.jpg';

imgs[2] = 'https://i.postimg.cc/c4XMFhxd/Bg-4.jpg';
imgs[3] = 'https://i.postimg.cc/pVhzxvJ5/Bg-7.jpg';
window.onload = function () {
    const random = Math.floor(Math.random() * imgs.length);
    document.body.style.backgroundImage = `url(${imgs[random]})`;
}
