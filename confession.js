// 获取页面元素
const startPage = document.getElementById('startPage');
const questionPage = document.getElementById('questionPage');
const successPage = document.getElementById('successPage');
const startBtn = document.getElementById('startBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const bgMusic = document.getElementById('bgMusic');
const heartsRain = document.getElementById('heartsRain');

// 页面切换函数
function switchPage(hidePage, showPage) {
    hidePage.classList.remove('active');
    setTimeout(() => {
        showPage.classList.add('active');
    }, 500);
}

// 开始按钮点击事件
startBtn.addEventListener('click', () => {
    // 尝试播放背景音乐
    bgMusic.play().catch(e => console.log('音乐播放需要用户交互'));
    switchPage(startPage, questionPage);
});

// "愿意"按钮点击事件
yesBtn.addEventListener('click', () => {
    switchPage(questionPage, successPage);
    // 创建爱心雨
    createHeartsRain();
    // 播放音乐
    bgMusic.play().catch(e => console.log('音乐播放需要用户交互'));
});

// "不愿意"按钮 - 鼠标移入时逃跑
let noBtnAttempts = 0;
noBtn.addEventListener('mouseenter', () => {
    noBtnAttempts++;

    // 获取窗口尺寸
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // 随机生成新位置，确保按钮在可见范围内
    const maxX = windowWidth - btnWidth - 50;
    const maxY = windowHeight - btnHeight - 50;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    // 设置新位置
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
    noBtn.style.transition = 'all 0.3s ease';

    // 改变按钮文字，增加趣味性
    const messages = [
        '别点我！',
        '我跑了~',
        '抓不到我吧',
        '嘿嘿嘿',
        '再试试？',
        '就是不让你点！',
        '哈哈哈',
        '点"愿意"吧！'
    ];

    if (noBtnAttempts <= messages.length) {
        noBtn.textContent = messages[noBtnAttempts - 1];
    }

    // 同时让"愿意"按钮变大，更吸引注意
    const currentScale = 1 + (noBtnAttempts * 0.1);
    yesBtn.style.transform = `scale(${Math.min(currentScale, 1.5)})`;
});

// 防止"不愿意"按钮被点击
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // 立即移动按钮
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = windowWidth - btnWidth - 50;
    const maxY = windowHeight - btnHeight - 50;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// 创建爱心雨效果
function createHeartsRain() {
    const hearts = ['💗', '💖', '💕', '💝', '💓', '💞'];
    const colors = ['#ff6ec7', '#ff9a9e', '#ffa0d2', '#ff69b4', '#ff1493'];

    // 创建50个爱心
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'falling-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';

            heartsRain.appendChild(heart);

            // 5秒后移除爱心元素
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 100);
    }

    // 持续创建爱心雨
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';

        heartsRain.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

// 阻止右键菜单，增加神秘感
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// 添加键盘快捷键 - 按 Enter 等同于点击"愿意"
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && questionPage.classList.contains('active')) {
        yesBtn.click();
    }
});

// 添加一些彩蛋：连续点击开始按钮会有特效
let startBtnClicks = 0;
let startBtnClickTimer;

startBtn.addEventListener('click', () => {
    startBtnClicks++;

    clearTimeout(startBtnClickTimer);
    startBtnClickTimer = setTimeout(() => {
        startBtnClicks = 0;
    }, 500);

    if (startBtnClicks >= 5) {
        // 创建一个小惊喜特效
        createFireworks();
        startBtnClicks = 0;
    }
});

// 烟花特效
function createFireworks() {
    const colors = ['#ff6ec7', '#ff9a9e', '#ffa0d2', '#ff69b4'];

    for (let i = 0; i < 20; i++) {
        const firework = document.createElement('div');
        firework.style.position = 'fixed';
        firework.style.width = '10px';
        firework.style.height = '10px';
        firework.style.borderRadius = '50%';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.left = '50%';
        firework.style.top = '50%';
        firework.style.pointerEvents = 'none';
        firework.style.zIndex = '1000';

        document.body.appendChild(firework);

        const angle = (Math.PI * 2 * i) / 20;
        const velocity = 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        let x = 0;
        let y = 0;

        const animation = setInterval(() => {
            x += vx;
            y += vy;
            firework.style.transform = `translate(${x}px, ${y}px)`;
            firework.style.opacity = parseFloat(firework.style.opacity || 1) - 0.02;

            if (parseFloat(firework.style.opacity) <= 0) {
                clearInterval(animation);
                firework.remove();
            }
        }, 16);
    }
}

// 页面加载完成后的初始化
window.addEventListener('load', () => {
    // 添加加载动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
