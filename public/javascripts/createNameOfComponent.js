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
    const Component = document.getElementById("Component").value;
    const Template = document.getElementById("Template").value;
    const Identifier = document
      .getElementById("Identifier")
      .value.toUpperCase();
    const Position = document.getElementById("Position").value;

    //console.log(Component + Template + Identifier);

    result.innerHTML =
      Component + "--" + Template + "--" + Identifier + "--" + Position;
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
  }
});
