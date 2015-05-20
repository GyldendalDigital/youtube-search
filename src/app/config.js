define([], function () {
    var Config = function () {
        this.youtubeBaseUrl = "https://www.googleapis.com/youtube/v3/search";
		this.youtubeApiKey = "AIzaSyBVmy01zRmq7wxZdPsVACdGDwLPF3rfpqU";
		this.youtubeWatchBaseUrl = "https://www.youtube.com/watch?v=";
    };
    return new Config();
});
