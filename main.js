const imgs = [];
imgs[1] = 'https://i.postimg.cc/GpNxfKQt/Bg-1.jpg';
imgs[2] = 'https://i.postimg.cc/JzmkbkVj/Bg-2.jpg';
imgs[3] = 'https://i.postimg.cc/YqQFGxVp/Bg-3.jpg';
imgs[4] = 'https://i.postimg.cc/c4XMFhxd/Bg-4.jpg';
imgs[5] = 'https://i.postimg.cc/G2FvGJgw/Bg-5.jpg';
imgs[6] = 'https://i.postimg.cc/CM3Dx2cP/Bg-6.jpg';
imgs[7] = 'https://i.postimg.cc/pVhzxvJ5/Bg-7.jpg';
window.onload = function () {
    const random = Math.floor(Math.random() * imgs.length);
    document.body.style.backgroundImage = `url(${imgs[random]})`;
}
