console.log("Hello from template repository");
// TODO: use Ctrl+S and see the Output panel
const check = true;
const reset = () => {
  const markup = document.body.innerHTML;
  document.body.innerHTML = "";
  requestAnimationFrame(() => {
    document.body.innerHTML = markup;
  });
};
document.body.addEventListener("click", reset);
