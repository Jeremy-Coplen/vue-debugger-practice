<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <header class="app-header">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <h1>Simple Debugger</h1>
    <nav>
      <RouterLink class="nav-btn" active-class="nav-active" to="/">Home</RouterLink>
      <RouterLink class="nav-btn" active-class="nav-active" to="/about">About</RouterLink>
    </nav>
  </header>
  </header>

  <RouterView />
</template>

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *, *::before, *::after {
    -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }

  .app-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    text-decoration: none;
    margin-bottom: 20px;
  }

  nav :first-child {
    margin-right: 10px;
  }

  .nav-btn {
    background-color: #40B280;
    width: 75px;
    text-align: center;
    padding: 10px 0 10px 0;
    border-radius: 10px;
    text-decoration: none;
    color: black;
  }

  .nav-btn:hover {
    background-color: #126440;
    cursor: pointer;
  }

  .nav-active {
    background-color: #126440;
  }

  h1 {
    font-weight: 700;
    font-size: 30px;
  }
</style>
