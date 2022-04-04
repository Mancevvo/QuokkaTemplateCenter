const componentsController = {
    devo_Feature: (req, res) => {
      return res.render("DEVO_components/devo_Feature", { title: "DEVO_Feature" });
    },
    
    manual: (req, res) => {
      return res.render("DEVO_components/manual", { title: "General Manual" });
    },
  };
  
  module.exports = componentsController;
  