// ##### Simple query to get Post information from Twitter #####
//id is the blog id collected from the widget and domid is the id of the element in which the data will be placed
function fetchTweets(){
	var tweetConfig = {
  		"id": '569271594577850368',
  		"domId": 'tweetList',
  		"enableLinks": true
	};
	twitterFetcher.fetch(tweetConfig);	
}