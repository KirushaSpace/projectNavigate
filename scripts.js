//добавление видео на страницу в виде iframe

const videoList = new Map();
videoList.set("Программы департамента фундаментальной и прикладной физики ИЕНиМ бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239251&hash=21dc5aa4523ebd71&hd=2");
videoList.set("Программы департамента фундаментальной и прикладной химии ИЕНиМ бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239276&hash=d1ed7bc6677c5d64&hd=2");
videoList.set("Институт фундаментального образования программы инфо бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239259&hash=bff6cbe3ba2c3555&hd=2");
videoList.set("Направления бакалавриата и специалитета РТФ бакалавриат программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239304&hash=b38b3859c32104c5&hd=2");
videoList.set("Строительство иса программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239258&hash=a22b8d3848b7af05&hd=2");
videoList.set("Новые образовательные программы Уральского гуманитарного института Уги бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239227&hash=72ced540c23937af&hd=2");
videoList.set("Направления бакалавриата и специалитета УралЭНИН программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239236&hash=6b305780410b80f9&hd=2");
videoList.set("Программы бакалавриата и специалитета ФТИ бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239252&hash=f58499c54d26d60b&hd=2");
videoList.set("Направления бакалавриата ХТИ программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239240&hash=f26963f321c82fdb&hd=2");
videoList.set("Образовательные программы бакалавриата ХТИ бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239269&hash=71c3143280f4fd3e&hd=2");
videoList.set("Программы в области юриспруденции инэу бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239255&hash=3abfa51cdb158188&hd=2");
videoList.set("Индивидуальные образовательные траектории: мнение студентов иот бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239315&hash=90f7350e14b41281&hd=2");
videoList.set("Алгоритм зачисления зачисление бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239314&hash=c06a11fba06198b7&hd=2");
videoList.set("поступление на контракт зачисление бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239300&hash=5539249d78ac71e3&hd=2");
videoList.set("Онлайн-консультация прочее зачисление бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239279&hash=ab061cb9b4933393&hd=2");
videoList.set("ИНМит иот бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239289&hash=3f046e81a7b24d9c&hd=2");
videoList.set("Фундаментальная информатика и информационные технологии иеним программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239299&hash=53dc7de5b2942d05&hd=2");
videoList.set("Фундаментальная информатика и информационные технологии 2020 иеним программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239232&hash=03eec9c06a02956c&hd=2");
videoList.set("Новое направление: Медицинская кибернетика в ИЕНиМ программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239228&hash=7bcb52e37519c8c4&hd=2");
videoList.set("Мехатроника и робототехника инмит программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239278&hash=d2c6246a2c5e2c64&hd=2");
videoList.set("Машиностроение инмит программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239253&hash=ed2e8bcf91316fa9&hd=2");
videoList.set("Металлургия инмит программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239250&hash=b7d11aae2819c723&hd=2");
videoList.set("Перевод и переводоведение программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239207&hash=b2d0684e5e15fab8&hd=2");
videoList.set("Пожарная безопасность инфо программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239233&hash=57b0966d99dba7f9&hd=2");
videoList.set("Технология полиграфического и упаковочного производства ртф программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239296&hash=118a9db30a5a9908&hd=2");
videoList.set("Прикладная информатика ИРИТ-РТФ ртф программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239283&hash=1534b99dc375d18e&hd=2");
videoList.set("Программная инженерия ртф программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239273&hash=835004faba7363b2&hd=2");
videoList.set("Радиотехника в институте радиоэлектроники и информационных технологий ртф программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239231&hash=77e4ba0efedcd9db&hd=2");
videoList.set("Строительство уникальных зданий и сооружений иса программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239286&hash=93209d25c0a3e726&hd=2");
videoList.set("Архитектура иса программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239234&hash=2a66a99f639523b7&hd=2");
videoList.set("Социогуманитарные науки уги программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239328&hash=65e86c60c9eb09f9");
videoList.set("Телевидение уги программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239274&hash=8d094363cb9f72fb&hd=2");
videoList.set("Телевидение 2020 уги программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239208&hash=3ce3acd9e5797903&hd=2");
videoList.set("Гостиничное дело ифксимп программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239292&hash=07d773ec59d358a9&hd=2");
videoList.set("Физическая культура ифксимп программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239235&hash=0f442d4fb48367f8&hd=2");
videoList.set("Сервис в индустрии спорта и рекреации ифксимп программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239230&hash=215564921e665f91&hd=2");
videoList.set("Экономика и управление инэу программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239327&hash=375eab6733915f36");
videoList.set("Международный и корпоративный менеджмент инэу программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239226&hash=40bc4b87fbf1d9ae&hd=2");
videoList.set("Экономика и управление (заочное образование) инэу программы бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239212&hash=afa0b1cc7fddbd06&hd=2");
videoList.set("УГИ открывает двери. Лингвисты, искусствоведы и культурологи программы бакалавриат дни", "https://vk.com/video_ext.php?oid=-22301031&id=456239295&hash=0722c3918428e6ab&hd=2");
videoList.set("УГИ открывает двери. Философы, журналисты, международники, политологии и социологи программы бакалавриат дни", "https://vk.com/video_ext.php?oid=-22301031&id=456239294&hash=73328593106e7612&hd=2");
videoList.set("Судебная экспертиза прочее", "https://vk.com/video_ext.php?oid=-22301031&id=456239210&hash=638e0c786693cefd&hd=2");
videoList.set("Психология служебной деятельности прочее", "https://vk.com/video_ext.php?oid=-22301031&id=456239209&hash=31e8d9d5f632a27a&hd=2");
videoList.set("Индивидуальные образовательные траектории: выборность и мастерские иот ртф", "https://vk.com/video_ext.php?oid=-22301031&id=456239298&hash=68ba5ed67143364e&hd=2");
videoList.set("Индивидуальные образовательные траектории: выбор технологии обучения иот ртф инмит", "https://vk.com/video_ext.php?oid=-22301031&id=456239312&hash=0ed65b9941c79517&hd=2");
videoList.set("Индивидуальные образовательные траектории: проектное обучение иот ртф инмит", "https://vk.com/video_ext.php?oid=-22301031&id=456239303&hash=2b6f6c8ad4daf0e6&hd=2");
videoList.set("Индивидуальные образовательные траектории: уровневость курсов иот ртф инмит", "https://vk.com/video_ext.php?oid=-22301031&id=456239282&hash=9c192497ebd64eac&hd=2");
videoList.set("Индивидуальные образовательные траектории: тьюторы иот ртф инмит", "https://vk.com/video_ext.php?oid=-22301031&id=456239272&hash=4d486b969ef37b50&hd=2");
videoList.set("Индивидуальные образовательные траектории в УрФУ иот ртф инмит", "https://vk.com/video_ext.php?oid=-22301031&id=456239268&hash=6d6adc81d404bf73&hd=2");
videoList.set("Онлайн-дни отрытых дверей: военный учебный центр вуц", "https://vk.com/video_ext.php?oid=-22301031&id=456239201&hash=ef5d6875ad00de51&hd=2");
videoList.set("Военный учебный центр вуц", "https://vk.com/video_ext.php?oid=-22301031&id=456239366&hash=b3d89743762cf165&hd=2");
videoList.set("Онлайн-дни отрытых дверей: институт новых материалов и технологий инмит", "https://vk.com/video_ext.php?oid=-22301031&id=456239199&hash=a0040335b0a80fb6&hd=2");
videoList.set("Онлайн-дни отрытых дверей: институт естественных наук и математики иеним", "https://vk.com/video_ext.php?oid=-22301031&id=456239195&hash=975eaf9b892bed04&hd=2");
videoList.set("Институт естественных наук и математики иеним дни", "https://vk.com/video_ext.php?oid=-22301031&id=456239367&hash=21ca037cd21eb768&hd=2");
videoList.set("Институт новых материалов и технологий инмит дни", "https://vk.com/video_ext.php?oid=-22301031&id=456239375&hash=31615c0fc46518a2&hd=2");
videoList.set("Онлайн-дни открытых дверей: институт фундаментального образования инфо", "https://vk.com/video_ext.php?oid=-22301031&id=456239204&hash=ab8ffffad09376e4&hd=2");
videoList.set("Институт фундаментального образования инфо дни", "https://vk.com/video_ext.php?oid=-22301031&id=456239376&hash=14585a61300b81e3&hd=2");
videoList.set("Онлайн-дни отрытых дверей: институт технологий открытого образования итоо дни", "https://vk.com/video_ext.php?oid=-22301031&id=456239196&hash=4b19b2ae7fd01132&hd=2");
videoList.set("", "");
videoList.set("", "");
videoList.set("", "");
videoList.set("", "");
videoList.set("", "");
videoList.set("", "");


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
