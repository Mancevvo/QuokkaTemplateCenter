const manualController = {
  tagsCollection: (req, res) => {
    return res.render("tags", { title: "Tags & Collections" });
  },
  components: (req, res) => {
    return res.render("components", { title: "Browse components" });
  },
  videos: (req, res) => {
    return res.render("videos", { title: "Videos" });
  },
  layouts: (req, res) => {
    return res.render("layouts", { title: "Layouts" });
  },
};

module.exports = manualController;
