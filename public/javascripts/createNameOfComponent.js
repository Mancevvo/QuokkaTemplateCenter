window.addEventListener("load", function () {
  const nameComponentBTN = document.getElementById("createName");
  const result = document.getElementById("newComponentsName");
  const description = document.getElementById("newComponentsDescription");
  const Tags = document.getElementById("newComponentsTags");
  const Collections = document.getElementById("newComponentsCollections");

  const copyNameBTN = document.getElementById("copyName");
  const copyTagBTN = document.getElementById("copyTag");
  const copyDescBTN = document.getElementById("copyDescription");

  result.style.display = "none";
  description.style.display = "none";
  Tags.style.display = "none";
  Collections.style.display = "none";

  copyNameBTN.style.display = "none";
  copyTagBTN.style.display = "none";
  copyDescBTN.style.display = "none";

  let name = result.innerHTML;
  let descriptionT = description.innerHTML;
  let tagsT = Tags.innerHTML;

  nameComponentBTN.addEventListener("click", getName);
  function getName() {
    const Link = document.getElementById("Link").value;

    const Component = document.getElementById("Component").value;
    const Template = document.getElementById("Template").value;
    const Identifier = document
      .getElementById("Identifier")
      .value.toUpperCase();
    const Position = document.getElementById("Position").value;

    console.log(Link);

    if (Link == 2) {
      name = result.innerHTML =
        Identifier + "--" + Template + "--" + Component + "--" + Position;
      result.style.display = "block";

      descriptionT = description.innerHTML =
        "This component( " +
        Component +
        " ) belongs to the page: " +
        Identifier +
        ". UniqueID: " +
        Component +
        Template +
        Identifier +
        Position;
      description.style.display = "block";

      tagsT = Tags.innerHTML =
        Component + "," + Template + "," + Identifier + "," + Position + ",";
      Tags.style.display = "block";

      Collections.innerHTML = Component + " | " + Template + " | " + Identifier;
      Collections.style.display = "block";
    } else {
      name = result.innerHTML =
        Identifier + "--" + Template + "--" + Component + "--LINK--" + Position;
      result.style.display = "block";

      descriptionT = description.innerHTML =
        "This LINK( " +
        Component +
        " ) belongs to the page: " +
        Identifier +
        ". UniqueID: LINK" +
        Component +
        Template +
        Identifier +
        Position;
      description.style.display = "block";

      tagsT = Tags.innerHTML =
        Component +
        "," +
        Template +
        "," +
        Identifier +
        "," +
        Position +
        ",LINK,";
      Tags.style.display = "block";

      Collections.innerHTML =
        Component + " | " + Template + " | " + Identifier + " | LINK ";
      Collections.style.display = "block";
    }

    copyNameBTN.style.display = "block";
    copyTagBTN.style.display = "block";
    copyDescBTN.style.display = "block";
  }

  copyNameBTN.addEventListener("click", copyName, false);
  copyTagBTN.addEventListener("click", copyTag, false);
  copyDescBTN.addEventListener("click", copyDesc, false);

  function copyName() {
    console.log("Copied to clipboard: " + name);
    /* Copy the text inside the text field  */
    navigator.clipboard.writeText(name);
    
    var input = document.body.appendChild(name);
    input.value = text;
    input.focus();
    input.select();
    document.execCommand('copy');
    input.parentNode.removeChild(input);
  }
  function copyTag() {
    console.log("Copied to clipboard: " + tagsT);
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(tagsT);
  }
  function copyDesc() {
    console.log("Copied to clipboard: " + descriptionT);
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(descriptionT);
  }
});
