<h1 align="center">Meters</h1>
<a >
<br>Система сбора данных. Разработать веб-приложение, позволяющее собрать данные. Структура данных, которые необходимо собирать задается файлом, в формате JSON. Пример такого файла:
<br>{
	<br>&nbsp;"name":"Показания счетчиков"
	<br>&nbsp;"квартира":"string",
	<br>&nbsp;"resources":[
	<br>&nbsp;{
<br>&nbsp;&nbsp;		"name":"Вода",
	<br>	&nbsp;&nbsp;"показания счетчика":"number"
<br>	&nbsp;},
<br>&nbsp;{
<br>	&nbsp;&nbsp;	"name":"Электричество",
	<br>&nbsp;&nbsp;	"Тариф дневной":"number",
	<br>&nbsp;&nbsp;	"Тариф ночной":"number",
	<br>&nbsp;},
<br>&nbsp;	{
<br>&nbsp;&nbsp;		"name":"Газ",
<br>&nbsp;&nbsp;		"показания счетчика":"number"
<br>&nbsp;	}
<br>	]
<br>}

<br>Приведенный выше файл определяющий структуру вводимых данных является примером, система должны иметь возможность обработать любой файл такого вида. Файл, читается либо из базы данных, либо из специального каталога на сервере. Введенные пользователем данные сохраняются в базе данных. Пользователь имеет возможность просмотреть все ранее введенные данные (система должна иметь возможность предоставить список ранее введенных данных), но не может их изменить.

</a>

