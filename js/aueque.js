//Iconbar navigation items
var iconNavigationBar, homeNavigationItem ,twitterNavigationItem ,instagramNavigationItem ,aboutNavigationItem, snapChatNavigationItem;

//Image Icons
var homeNavigationIcon ,twitterNavigationIcon ,instagramNavigationIcon ,aboutNavigationIcon, snapChatNavigationIcon;

//Div content
var homeDiv, twitterDiv, instagramDiv, aboutDiv, snapChatDiv, instagramContentDiv;

//User Information web items
var instagramUserName, instagramUserFollowers, instagramUserFollowing, instagramUserPosts, instagramProfilePicture, instagramUserDescription;

window.onload = function(){
	//Bind the iconbar objects
	iconNavigationBar = document.getElementById("iconNavigationBar");
	homeNavigationItem = document.getElementById("homeNavItem");
	twitterNavigationItem = document.getElementById("twitterNavItem");
	instagramNavigationItem = document.getElementById("instagramNavItem");
	aboutNavigationItem = document.getElementById("aboutNavItem");
	snapChatNavigationItem = document.getElementById("snapChatNavItem");

	//Apply the click listeners
	homeNavigationItem.addEventListener("click",homeIconClicked,false);
	twitterNavigationItem.addEventListener("click",twitterIconClicked,false);
	instagramNavigationItem.addEventListener("click",instagramIconClicked,false);
	aboutNavigationItem.addEventListener("click",aboutIconClicked,false);
	snapChatNavigationItem.addEventListener("click",snapChatIconClicked,false);

	//Bind the div content
	homeDiv =  document.getElementById("home");
	twitterDiv = document.getElementById("tweetList");
	instagramDiv = document.getElementById("instafeed");
	aboutDiv = document.getElementById("tumblrFeed");
	snapChatDiv = document.getElementById("snapChatFeed");
	instagramContentDiv = document.getElementById("instagramContent");

	//Bind the icon images
	homeNavigationIcon = document.getElementById("homeNavIcon");
	twitterNavigationIcon = document.getElementById("twitterNavIcon");
	instagramNavigationIcon = document.getElementById("instagramNavIcon");
	aboutNavigationIcon = document.getElementById("aboutNavIcon");
	snapChatNavigationIcon = document.getElementById("snapChatNavIcon");

	//Bind User Information Constants
	instagramUserName = document.getElementById("instagramUserName");
	instagramUserFollowers = document.getElementById("instagramUserFollowers");
	instagramUserFollowing = document.getElementById("instagramUserFollowing");
	instagramUserPosts = document.getElementById("instagramUserPosts");
	instagramProfilePicture = document.getElementById("instagramProfilePicture");
	instagramUserDescription = document.getElementById("instagramUserDescription");

	//Once local binding is done bind Instagram so it is loaded before the user clicks the instagram icon
	bindInstagramListenersAndElements();
}

/** OnClick functions **/
	
function homeIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar five-up icon-bar-blog-about";
	homeNavigationItem.className = "item active";
	homeThemeNavigationItems();
	requestAndShowHomeContent();
}

function twitterIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar five-up icon-bar-twitter";
	twitterNavigationItem.className = "item active";
	TwitterThemeNavigationItems();
    requestAndShowTwitterContent();
}

function instagramIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar five-up icon-bar-instagram";
	instagramNavigationItem.className = "item active";
	InstagramThemeNavigationItems();
    requestAndShowInstagramContent();
}

function aboutIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar five-up icon-bar-blog-about";
	aboutNavigationItem.className = "item active";
	aboutThemeNavigationItems();
	requestAndShowAboutContent();
}

function snapChatIconClicked(){
	clearItemNavigationFormatting();
	iconNavigationBar.className = "icon-bar five-up icon-bar-snapChat";
	snapChatNavigationItem.className = "item active";
	snapChatThemeNavigationItems();
	requestAndShowSnapChatContent();
}

function clearItemNavigationFormatting(){
	homeNavigationItem.className = "item";
	twitterNavigationItem.className = "item";
	instagramNavigationItem.className = "item";
	aboutNavigationItem.className = "item";
	snapChatNavigationItem.className = "item";
}

/** Content requests **/

function requestAndShowHomeContent(){
	homeDiv.className = "visible";
	twitterDiv.className="hidden";
	instagramContentDiv.className = "hidden";
	aboutDiv.className = "hidden";
	snapChatDiv.className = "hidden"
}

function requestAndShowTwitterContent(){
	homeDiv.className = "hidden";
	twitterDiv.className="visible";
	instagramContentDiv.className = "hidden";
	aboutDiv.className = "hidden";
	snapChatDiv.className = "hidden"
	if(twitterDiv.childNodes.length < 4){
		fetchTweets();
	}	
}

function requestAndShowInstagramContent(){
	homeDiv.className = "hidden";
	twitterDiv.className="hidden";
	instagramContentDiv.className = "visible";
	aboutDiv.className = "hidden";
	snapChatDiv.className = "hidden"
	console.log("Child Nodes " + instagramDiv.childNodes.length);
	if(instagramDiv.childNodes.length < 4){
		listenForScrollOnInstagramPage();
		fetchInstagramPosts();
		getInstagramUserInformation();
	}
}

function requestAndShowAboutContent(){
	homeDiv.className = "hidden";
	twitterDiv.className="hidden";
	instagramContentDiv.className = "hidden";
	aboutDiv.className = "visible";
	snapChatDiv.className = "hidden"
	if(aboutDiv.childNodes.length < 4){
		fetchTumblrPosts();	
	}
}

function requestAndShowSnapChatContent(){
	homeDiv.className = "hidden";
	twitterDiv.className="hidden";
	instagramContentDiv.className = "hidden";
	aboutDiv.className = "hidden";
	snapChatDiv.className = "visible"
}

/** Icon theming **/

function snapChatThemeNavigationItems(){
	aboutNavigationIcon.src = "img/snap-about.png";
	homeNavigationIcon.src = "img/snap-home.png";
	instagramNavigationIcon.src = "img/snap-ig.png";
	snapChatNavigationIcon.src = "img/snap-snap.png";
	twitterNavigationIcon.src = "img/snap-tweet.png";
}

function aboutThemeNavigationItems(){
	aboutNavigationIcon.src = "img/about-about.png";
	homeNavigationIcon.src = "img/about-home.png";
	instagramNavigationIcon.src = "img/about-ig.png";
	snapChatNavigationIcon.src = "img/about-snap.png";
	twitterNavigationIcon.src = "img/about-tweet.png";
}

function homeThemeNavigationItems(){
	aboutNavigationIcon.src = "img/home-about.png";
	homeNavigationIcon.src = "img/home-home.png";
	instagramNavigationIcon.src = "img/home-ig.png";
	snapChatNavigationIcon.src = "img/home-snap.png";
	twitterNavigationIcon.src = "img/home-tweet.png";
}

function InstagramThemeNavigationItems(){
	aboutNavigationIcon.src = "img/ig-about.png";
	homeNavigationIcon.src = "img/ig-home.png";
	instagramNavigationIcon.src = "img/ig-ig.png";
	snapChatNavigationIcon.src = "img/ig-snap.png";
	twitterNavigationIcon.src = "img/ig-tweet.png";
}

function TwitterThemeNavigationItems(){
	aboutNavigationIcon.src = "img/tweet-about.png";
	homeNavigationIcon.src = "img/tweet-home.png";
	instagramNavigationIcon.src = "img/tweet-ig.png";
	snapChatNavigationIcon.src = "img/tweet-snap.png";
	twitterNavigationIcon.src = "img/tweet-tweet.png";
}

function OpenUrlInMobileOrWebpage(urlToOpen,mobileID){
	if (window.navigator.userAgent.indexOf('iPhone') != -1) {
		window.location = "instagram://media?id=".concat(mobileID);
	}
	else{
		window.location = urlToOpen;
	}
}