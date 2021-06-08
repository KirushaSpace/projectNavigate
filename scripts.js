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
videoList.set("Психология служебной деятельности прочее бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239209&hash=31e8d9d5f632a27a&hd=2");
videoList.set("Индивидуальные образовательные траектории: выборность и мастерские иот ртф бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239298&hash=68ba5ed67143364e&hd=2");
videoList.set("Индивидуальные образовательные траектории: выбор технологии обучения иот ртф инмит бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239312&hash=0ed65b9941c79517&hd=2");
videoList.set("Индивидуальные образовательные траектории: проектное обучение иот ртф инмит бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239303&hash=2b6f6c8ad4daf0e6&hd=2");
videoList.set("Индивидуальные образовательные траектории: уровневость курсов иот ртф инмит бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239282&hash=9c192497ebd64eac&hd=2");
videoList.set("Индивидуальные образовательные траектории: тьюторы иот ртф инмит бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239272&hash=4d486b969ef37b50&hd=2");
videoList.set("Индивидуальные образовательные траектории в УрФУ иот ртф инмит бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239268&hash=6d6adc81d404bf73&hd=2");
videoList.set("Онлайн-дни отрытых дверей: военный учебный центр вуц бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239201&hash=ef5d6875ad00de51&hd=2");
videoList.set("Военный учебный центр вуц бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239366&hash=b3d89743762cf165&hd=2");
videoList.set("Онлайн-дни отрытых дверей: институт новых материалов и технологий инмит бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239199&hash=a0040335b0a80fb6&hd=2");
videoList.set("Онлайн-дни отрытых дверей: институт естественных наук и математики иеним бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239195&hash=975eaf9b892bed04&hd=2");
videoList.set("Институт естественных наук и математики иеним дни бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239367&hash=21ca037cd21eb768&hd=2");
videoList.set("Институт новых материалов и технологий инмит дни бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239375&hash=31615c0fc46518a2&hd=2");
videoList.set("Онлайн-дни открытых дверей: институт фундаментального образования инфо бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239204&hash=ab8ffffad09376e4&hd=2");
videoList.set("Институт фундаментального образования инфо дни бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239376&hash=14585a61300b81e3&hd=2");
videoList.set("Онлайн-дни отрытых дверей: институт технологий открытого образования итоо дни бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239196&hash=4b19b2ae7fd01132&hd=2");
videoList.set("Институт технологий открытого образования итоо дни бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239370&hash=8a424981710755e7&hd=2");
videoList.set("Дистанционное обучение в ИТОО бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239242&hash=5e4e687ce6356c48&hd=2");
videoList.set("Онлайн-дни отрытых дверей: институт радиоэлектроники и информационных технологий - РТФ бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239203&hash=7b979b3d03139bf4&hd=2");
videoList.set("Институт радиоэлектроники и информационных технологий — РТФ дни бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239368&hash=2f74500bfee6b089&hd=2");
videoList.set("Информационные технологии ртф бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239325&hash=28dfcfd697035cac&hd=2");
videoList.set("Институт строительства и архитектуры иса дни бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239377&hash=22222cd7684f1de3&hd=2");
videoList.set("Уральский гуманитарный институт УрФУ уги дни бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239190&hash=78194e286f6898d3&hd=2");
videoList.set("Уральский гуманитарный институт уги дни бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239365&hash=a6a99c22fb168383&hd=2");
videoList.set("Онлайн-дни отрытых дверей: Уральский энергетический институт уралэнин бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239197&hash=f67fcc9eb6e9b226&hd=2");
videoList.set("Уральский энергетический институт уралэнин дни бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239372&hash=651bb24264a1c9b1&hd=2");
videoList.set("Онлайн-дни отрытых дверей: институт физической культуры, спорта и молодежной политики ифксимп бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239200&hash=73ee825e0eaa021d&hd=2");
videoList.set("Институт физической культуры, спорта и молодежной политики дни ифксимп бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239364&hash=161a70716014942c&hd=2");
videoList.set("Онлайн-дни отрытых дверей: физико-технологический институт фти бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239202&hash=ccf2fba08b300ddf&hd=2");
videoList.set("Физико-технологический институт фти дни бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239373&hash=401b7adb407057dc&hd=2");
videoList.set("Химико-технологический институт хти дни бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239374&hash=2bc1a8ce015d3988&hd=2");
videoList.set("Онлайн-дни отрытых дверей: институт экономики и управления инэу бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239198&hash=9539617004057bf0&hd=2");
videoList.set("Институт экономики и управления инэу дни бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239369&hash=e4fb4df7636e6f5b&hd=2");
videoList.set("Тест-драйв в Уральском федеральном сериал бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239338&hash=ffc8cb8b62bf133b&hd=2");
videoList.set("Прием, УрФУ. Инженерные науки, серия 1 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239339&hash=d9fd628f68fd0e74&hd=2");
videoList.set("Прием, УрФУ. Экономика и управление, серия 1 сериал бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239340&hash=5cecaf2ca065d761&hd=2");
videoList.set("Прием, УрФУ. Математика и IT, серия 1 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239342&hash=215c1758d2ceafbb&hd=2");
videoList.set("Прием, УрФУ. Естественные науки, серия 1 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239343&hash=86594f4371feedd8&hd=2");
videoList.set("Прием, УрФУ. Математика и IT, серия 2 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239344&hash=df3666751201fa83&hd=2");
videoList.set("Прием, УрФУ. Социально-гуманитарные науки, серия 2 бакалвриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239345&hash=594e114f52959607&hd=2");
videoList.set("Прием, УрФУ. Естественные науки, серия 2 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239346&hash=ee1f91f7b4a3bf86&hd=2");
videoList.set("Прием, УрФУ. Инженерные науки, серия 2 бакалвриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239347&hash=b0da93bbba32d7de&hd=2");
videoList.set("Прием, УрФУ. Инженерные науки, серия 3 бакалвриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239348&hash=00b31c43e9b8ed90&hd=2");
videoList.set("Прием, УрФУ. Социально-гуманитарные науки, серия 4 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239357&hash=26ead227bf6f09c9&hd=2");
videoList.set("Прием, УрФУ. Экономика и управления, серия 3 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239356&hash=545720834d2148b8&hd=2");
videoList.set("Прием, УрФУ. Экономика и управления, серия 2 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239355&hash=26b230a130914de0&hd=2");
videoList.set("Прием, УрФУ. Социально-гуманитарные науки, серия 3 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239354&hash=c55b70ab58115829&hd=2");
videoList.set("Прием УрФУ. Естественные науки, серия 3 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239353&hash=1f8e19ac75cb3d0d&hd=2");
videoList.set("Прием, УрФУ. Инженерные науки, серия 6 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239351&hash=59e2c88e30b380a0&hd=2");
videoList.set("Прием, УрФУ. Инженерные науки, серия 5 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239350&hash=96e08ab363d17465&hd=2");
videoList.set("Прием, УрФУ. Инженерные науки, серия 4 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239349&hash=5caf477877f27103&hd=2");
videoList.set("Прием, УрФУ. Социально-гуманитарные науки, серия 5 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239358&hash=1dc19dff2ee7c33a&hd=2");
videoList.set("Прием, УрФУ. Социально-гуманитарные науки, серия 6 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239359&hash=49d08c81e3d1e2ef&hd=2");
videoList.set("Прием, УрФУ. Экономика и управление, серия 4 бакалавриат сериал", "https://vk.com/video_ext.php?oid=-22301031&id=456239360&hash=6cf28ceb29ff8425&hd=2");
videoList.set("Презентация университета дни прочее бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239330&hash=00dffc1c7675b30e");
videoList.set("Презентация для Казахстана и СНГ дни прочее бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239332&hash=56d45fe7b569ef83");
videoList.set("Родительский чат прочее бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239333&hash=443c6dd7e68ca549");
videoList.set("Прием-2020: презентация университета прочее дни бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239192&hash=7c8c0441466619cc&hd=2");
videoList.set("Центр инклюзивного образования прочее бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239371&hash=d0f3c3ca0b59ae83&hd=2");
videoList.set("Организация работы с молодежью прочее бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239267&hash=a205eee5b2d666e3&hd=2");
videoList.set("Прием — 2020. Онлайн-консультация прочее бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239256&hash=dddf8ece920758a5&hd=2");
videoList.set("Прием, УрФУ! 19 ноября прочее бакалавриат", "https://vk.com/video_ext.php?oid=-22301031&id=456239324&hash=92fff5242d58e2ea&hd=2");
videoList.set("Образовательные программы магистратуры ХТИ магистратура", "https://vk.com/video_ext.php?oid=-22301031&id=456239313&hash=b9462eee7a65e3c9&hd=2");
videoList.set("Образовательные программы магистратуры УралЭНИН магистратура", "https://vk.com/video_ext.php?oid=-22301031&id=456239311&hash=522667613af6eef6&hd=2");
videoList.set("Образовательные программы магистратуры ИРИТ-РТФ магистратура", "https://vk.com/video_ext.php?oid=-22301031&id=456239305&hash=c77cfc82553755fd&hd=2");
videoList.set("Магистратура: онлайн-консультация прочее", "https://vk.com/video_ext.php?oid=-22301031&id=456239285&hash=2dc8d81f6228151c&hd=2");
videoList.set("Магистратура: бизнес-информатика программы инэу", "https://vk.com/video_ext.php?oid=-22301031&id=456239281&hash=f02c67a51fa10d5e&hd=2");
videoList.set("Поступление в магистратуру магистратура зачисление", "https://vk.com/video_ext.php?oid=-22301031&id=456239262&hash=f0f53bc59173c2ed&hd=2");
videoList.set("Магистратура: менеджмент программы инэу", "https://vk.com/video_ext.php?oid=-22301031&id=456239275&hash=9d56b94cdd10ebf9&hd=2");
videoList.set("Магистратура ФТИ программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239266&hash=64cc2057dfe23df4&hd=2");
videoList.set("Магистратура: государственное и муниципальное управление инэу программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239264&hash=c726042670112eaa&hd=2");
videoList.set("Прием – 2020. Прикладной анализ данных магистратура программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239260&hash=3ee303372abc2b5d&hd=2");
videoList.set("Прием-2020. Магистратура УралЭНИН программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239261&hash=9e5dce282a1011a7&hd=2");
videoList.set("Прием-2020. Магистратура ИРИТ-РТФ программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239246&hash=85cf2a700b666432&hd=2");
videoList.set("Магистратура в УрФУ: особенности и правила поступления зачисление", "https://vk.com/video_ext.php?oid=-22301031&id=456239221&hash=ef6777e2139b5bba&hd=2");
videoList.set("Магистратура в УрФУ: институт естественных наук и математики иеним программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239222&hash=935086a1e0a8a98e&hd=2");
videoList.set("Магистратура в УрФУ: институт новых материалов и технологий инмит программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239214&hash=b7fc449949454541&hd=2");
videoList.set("Магистратура в УрФУ: институт строительства и архитектуры иса программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239215&hash=d0ee73d6e2afa701&hd=2");
videoList.set("Магистратура в УрФУ: физико-технологический институт фти программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239216&hash=54d4955b84adb424&hd=2");
videoList.set("Магистратура в УрФУ: институт технологий открытого образования итоо программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239217&hash=4c2846fa77c79d6b&hd=2");
videoList.set("Магистратура в УрФУ: институт радиоэлектроники и информационных технологий ртф программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239220&hash=57ef9e6678528c33&hd=2");
videoList.set("Магистратура в УрФУ: Уральский энергетический институт уралэнин программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239218&hash=bddf1e75f2043d4d&hd=2");
videoList.set("Магистратура в УрФУ: химико-технологический институт хти программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239219&hash=aadcc8fa0bed4252&hd=2");
videoList.set("Магистратура в УрФУ: институт фундаментального образования инфо программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239213&hash=8587c6336aaa183b&hd=2");
videoList.set("Магистратура в УрФУ: институт физической культуры, спорта и молодежной политики ифксимп программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239223&hash=c82551f958a3dc0a&hd=2");
videoList.set("Магистратура в УрФУ: Уральский гуманитарный институт уги программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239224&hash=0bd991c354173d4e&hd=2");
videoList.set("Магистратура в УрФУ: институт экономики и управления инэу программы", "https://vk.com/video_ext.php?oid=-22301031&id=456239225&hash=17929329981b4587&hd=2");
videoList.set("Образовательные программы магистратуры УГИ магистратура", "https://vk.com/video_ext.php?oid=-22301031&id=456239297&hash=2f73dbf47dcfc0e2&hd=2");
videoList.set("Аспирантура в УрФУ зачисление", "https://vk.com/video_ext.php?oid=-22301031&id=456239270&hash=04f1796cbe43ca3a&hd=2");


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
