//добавление видео на страницу в виде iframe

const videoList = new Map();
videoList.set("инфо бакалавриат ртф", "https://vk.com/video_ext.php?oid=-22301031&id=456239397&hash=eabad8ce1750a7d8&hd=2");
videoList.set("инфо магистратура", "https://vk.com/video_ext.php?oid=-22301031&id=456239397&hash=eabad8ce1750a7d8&hd=2");
videoList.set("бакалавриат ртф", "https://vk.com/video_ext.php?oid=-22301031&id=456239397&hash=eabad8ce1750a7d8&hd=2");
videoList.set("бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239397&hash=eabad8ce1750a7d8&hd=2");
videoList.set("итоо бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239397&hash=eabad8ce1750a7d8&hd=2");
videoList.set("ртф магистратура", "https://vk.com/video_ext.php?oid=-22301031&id=456239397&hash=eabad8ce1750a7d8&hd=2");
videoList.set("инмит магистратура", "https://vk.com/video_ext.php?oid=-22301031&id=456239397&hash=eabad8ce1750a7d8&hd=2");
videoList.set("инмит бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239397&hash=eabad8ce1750a7d8&hd=2");
videoList.set("инмит ртф бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239397&hash=eabad8ce1750a7d8&hd=2");
videoList.set("инмит инфо бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239397&hash=eabad8ce1750a7d8&hd=2");
videoList.set("ртф итоо бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239397&hash=eabad8ce1750a7d8&hd=2");
videoList.set("Программы департамента фундаментальной и прикладной физики ИЕНиМ ", "https://vk.com/video_ext.php?oid=-22301031&id=456239251&hash=21dc5aa4523ebd71&hd=2");


addVideos(videoList);

function addVideos(videos) {
	for (let [key, value] of videos) {
		let stack = document.getElementById('video_stack');
		let videoElement = document.createElement('iframe');
		videoElement.setAttribute('name', key);
		videoElement.setAttribute('src', value);
		videoElement.setAttribute('class', 'video_element');
		videoElement.setAttribute('id', 'video');
		videoElement.setAttribute('frameborder', '0');
		videoElement.setAttribute('allowfullscreen', 'allowfullscreen');
		stack.append(videoElement);
	}
}

//........................................Фильтрация........................................................

const stack = document.getElementById('video_stack');
const videoElement = stack.getElementsByClassName('video_element');

function hideVideos(filter)
{
	for (var i = 0; i < videoElement.length; i++) {
		let tags = videoElement[i].getAttribute('name');
		if (tags.toLowerCase().indexOf(filter) > -1) {
	      videoElement[i].style.display = "";
	    } else {
	      videoElement[i].style.display = "none";
		}
	}
}

//поиск по уровням......................................................................................
/*
const levelButtons = document.getElementsByName('level');

for (var i = 0; i < levelButtons.length; i++) {
	levelButtons[i].onclick = levelFilter;
}

function levelFilter() {
	for (var i = 0; i < levelButtons.length; i++) {
		if (levelButtons[i].checked) {
			let levelButton = levelButtons[i];
			let filter = levelButton.value.toLowerCase();
			hideVideos(filter);
			return;
		}
	}
}
*/
//поиск по тэгам.........................................................................................

const tagButtons = document.getElementsByName('tag');

for (var i = 0; i < tagButtons.length; i++) {
	tagButtons[i].onclick = tagFilter;
}

function tagFilter() {
	for (var i = 0; i < tagButtons.length; i++) {
		if (tagButtons[i].checked) {
			let tagButton = tagButtons[i];
			let filter = tagButton.value.toLowerCase();
			hideVideos(filter);
			return;
		}
	}
}

//поиск по видео..........................................................................................

const searchBar = document.getElementById('search_bar');
searchBar.addEventListener('keyup', videoSearch);
function videoSearch()
{
	let input = document.getElementById('search_bar');
	let searchString = input.value.toLowerCase();
	hideVideos(searchString);
}




























// function removeVideos(tag)
// {
// 	let stack = document.getElementById('video_stack');
// 	let videos = stack.getElementsByClassName('video_element');
// 	for (var i = 0; i < videos.length; i++) {
// 		if (videos[i].name.toLowerCase().indexOf(tag) <= -1)
// 		{
// 			videos[i].parentNode.removeChild(videos[i]);
// 		}
// 	}
// }

// const levelButtons = document.getElementsByName('level');

// for (var i = 0; i < levelButtons.length; i++) {
// 	let levelValue = levelButtons[i].value;
// 	levelButtons[i].onclick = function() {
// 		addVideos(videoList, levelValue);
// 		removeVideos(levelValue);
// 	}
// }
