import Collapse from '../components/Collapse/Collapse';
// import CallbackChat from '../components/CallbackChat/CallbackChat';
// import Liker from '../components/Liker/Liker';

const contentEl = document.querySelector('.content');
const widgetCollapse1 = new Collapse();
contentEl.prepend(widgetCollapse1.element);

const widgetCollapse2 = new Collapse({ parent: '.content' });
widgetCollapse2.setText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae inventore mollitia nesciunt non quos! Accusantium aperiam assumenda eaque impedit, in laborum libero nobis recusandae rem sunt totam, vel, vitae voluptate!');

// const callbackChat = new CallbackChat();

// const liker = new Liker(contentEl);
