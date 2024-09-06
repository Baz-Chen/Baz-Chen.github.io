---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "陈同学"
  text: "Stay humble, move forward"
  tagline: /热血青年/拿来主义/持续学习/
  image:
    src: /public/astronaut-LQ_BQU63.png
    alt: 背景图
  actions:
    - theme: brand
      text: Utils
      link: /markdown/javascript/utils

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
<script setup>

import home from './components/home.vue';

</script>


<home />
