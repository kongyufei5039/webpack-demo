export default function helloworld() {
  const element = document.createElement('div');
  element.innerHTML = 'hello world';
  element.classList.add('hello');
  return element;
}
