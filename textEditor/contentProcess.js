function textToHTML(content) {
	content = String(content);
	while (content.search("\n") != -1) {
		content = content.replace("\n", "<br>");
	}
	return content;
}
