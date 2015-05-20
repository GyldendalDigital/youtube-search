define(["knockout", "text!./home.htm"], function(ko, homeTemplate) {

  function HomeViewModel(route) {
    this.message = ko.observable('Neste skritt blir å få youtube søket til å fungere.');
  }

  return { viewModel: HomeViewModel, template: homeTemplate };

});
