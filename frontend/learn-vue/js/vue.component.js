Vue.component('blog-title', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
});

Vue.component('blog-content', {
  props: ['content'],
  template: '<div>{{ content }}</div>'
});

Vue.component('blog', {
  props: ['title', 'content'],
  template: `
    <div>
      <blog-title v-bind:title="title" />
      <blog-content v-bind:content="content" />
      <div><slot></slot></div>
    </div>
  `
});