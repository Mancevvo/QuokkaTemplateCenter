window.addEventListener("load", function () {
  const nameComponentBTN = document.getElementById("createName");
  const result = document.getElementById("newComponentsName");
  const description = document.getElementById("newComponentsDescription");
  const Tags = document.getElementById("newComponentsTags");
  const Collections = document.getElementById("newComponentsCollections");

  result.style.display = "none";
  description.style.display = "none";
  Tags.style.display = "none";
  Collections.style.display = "none";

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
      result.innerHTML =
        Identifier + "--" + Template + "--" + Component + "--" + Position;
      result.style.display = "block";

      description.innerHTML =
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

      Tags.innerHTML =
        Component + " | " + Template + " | " + Identifier + " | " + Position;
      Tags.style.display = "block";

      Collections.innerHTML = Component + " | " + Template + " | " + Identifier;
      Collections.style.display = "block";
    } else {
      result.innerHTML =
        Identifier + "--" + Template + "--" + Component + "--LINK--" + Position;
      result.style.display = "block";

      description.innerHTML =
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

      Tags.innerHTML =
        Component +
        " | " +
        Template +
        " | " +
        Identifier +
        " | " +
        Position +
        " | LINK ";
      Tags.style.display = "block";

      Collections.innerHTML =
        Component + " | " + Template + " | " + Identifier + " | LINK ";
      Collections.style.display = "block";
      
    }
  }
});
