define(["knockout", "text!./youtube-video.html", "app/config", "app/events"], function (ko, template, events, config) {

    function YouTubeVideoViewModel(params) {
        var self = this;
        self.title = params.video.snippet.title;
        self.imageUrl = params.video.snippet.thumbnails.default.src;
        self.description = params.video.snippet.description;
        self.id = params.video.id.videoId;
		self.linkUrl = config.youtubeWatchBaseUrl + self.id;
    }
	
	// YouTubeVideoViewModel.prototype.viewEmbedded = function() {
        // var videoId = this.id.substring(this.id.lastIndexOf("/") + 1);
        // var embedUrl = config.youtubeEmbedBaseUrl + videoId;
        // events.showModal.dispatch("youtube-video-embedded", {src: embedUrl, height: 400, width: 300});
    // };
	
    return { viewModel: YouTubeVideoViewModel, template: template };

});
