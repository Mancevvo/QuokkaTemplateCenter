function changeSH() {
  let languageImage = document.querySelector(
    "#c20303b7-0bf3-4cc2-bb8b-5533c692de92 > div > div > div > div.background > img"
  );
  languageImage.setAttribute(
    "src",
    "https://orasites-prodapp.cec.ocp.oraclecloud.com/content/management/api/v1.1/assets/CONT907B9D2AB33448F986E1C2A30E139C01/native"
  );
}

window.onload = (event) => {
  async function reloadDEVO() {
    await sleep(3000);
    changeSH();
  }

  try {
    changeSH();
  } catch (error) {
    reloadDEVO();
  }
};
