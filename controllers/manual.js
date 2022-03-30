const manualController = {
  tagsCollection: (req, res) => {
    return res.render("tags", { title: "Tags & Collections" });
  },
  components: (req, res) => {
    return res.render("components", { title: "Browse components" });
  },
};

module.exports = manualController;
