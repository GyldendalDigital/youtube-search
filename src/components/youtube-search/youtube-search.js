define(["knockout", "underscore", "text!./youtube-search.html", "app/config", "jquery"], function (ko, _, template, config, $) {

    function YouTubeSearchViewModel(route) {
        var self = this;
        this.q = ko.observable();
        this.r = ko.observable();
        this.v = ko.observableArray([]);

        this.r.subscribe(function(newValue) {
            _.each(newValue.items, function(item) {
				self.v.push(item);
			});
        });
		
		this.search = function() {
			$.get(config.youtubeBaseUrl, {q: self.q(), key: config.youtubeApiKey, part: "snippet"}).done(self.r);
		};
    }

    return { viewModel: YouTubeSearchViewModel, template: template };

});
