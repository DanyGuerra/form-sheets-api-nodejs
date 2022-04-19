window.addEventListener("load", async function () {
  try {
    const file = await fetch("download");
    console.log(file.body);
  } catch (error) {
    console.error(error);
  }
});
