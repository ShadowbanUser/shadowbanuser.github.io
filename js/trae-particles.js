// 1. 动态创建一个挂载粒子的容器，铺满全屏并置于底层
var particleDiv = document.createElement('div');
particleDiv.id = 'particles-js';
particleDiv.style.position = 'fixed';
particleDiv.style.top = '0';
particleDiv.style.left = '0';
particleDiv.style.width = '100vw';
particleDiv.style.height = '100vh';
particleDiv.style.zIndex = '-1'; // 极其重要：确保在背景图之上，但在文字之下
particleDiv.style.pointerEvents = 'none'; // 极其重要：防止特效挡住你的鼠标点击
document.body.appendChild(particleDiv);

// 2. 加载外部的 particles.js 库并注入配置
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
script.onload = function() {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 70 }, // 粒子数量，可自行微调
            "color": { "value": "#00d4ff" }, // 赛博蓝
            "shape": { "type": "circle" },
            "opacity": { "value": 0.6 },
            "size": { "value": 3 },
            "line_linked": {
                "enable": true,
                "distance": 150, // 连线距离，Trae的网格比较开阔
                "color": "#00d4ff",
                "opacity": 0.4,
                "width": 1
            },
            "move": { "enable": true, "speed": 1.5 } // 缓慢游走的科技感
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "grab" } // 鼠标悬停时的连线吸附效果
            },
            "modes": {
                "grab": { "distance": 140, "line_linked": { "opacity": 1 } }
            }
        },
        "retina_detect": true
    });
};
document.body.appendChild(script);