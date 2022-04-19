window.addEventListener("load", async function () {
  try {
    const res = await fetch("download");
    const data = await res.blob();
    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(data);
    a.download = "IPP_Celestin_FT";
    a.click();
  } catch (error) {
    console.error(error);
  }
});
