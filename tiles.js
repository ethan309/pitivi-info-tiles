const pitivi_data = [
	// Link 01
	{
	    title: "Pitivi Homepage",
	    image: "logo.png",
	    link: "http://www.pitivi.org/",
	    description: "Project homepage.",
	    tags: ["Basic"]
	},
    
	// Link 02
	{
	    title: "User Documentation",
	    image: "docs.png",
	    link: "http://www.pitivi.org/manual/",
	    description: "User Docs.",
	    tags: ["Docs", "Reference"]
	},
    
    // Link 03
	{
	    title: "Project Page",
	    image: "gnome.png",
	    link: "https://gitlab.gnome.org/GNOME/pitivi",
	    description: "Main project GNOME page.",
	    tags: ["Basic"]
	},
    
    // Link 04
	{
	    title: "Environment Setup Instructions",
	    image: "env.jpg",
	    link: "https://github.com/pitivi/pitivi/blob/master/docs/HACKING.md#user-content-setting-up-the-advanced-development-environment",
	    description: "Set up development environment for macOS, Linux, & Windows.",
	    tags: ["Reference", "Setup", "Development"]
	},
    
    
    // Link 05
	{
	    title: "Curated Issues",
	    image: "git-cat.png",
	    link: "https://gitlab.gnome.org/GNOME/pitivi/issues?label_name%5B%5D=4.+Newcomers",
	    description: "Open issues curated by devs.",
	    tags: ["Development", "Issues"]
	},

	{
	    title: "All Issues",
	    image: "git-cat.png",
	    link: "https://gitlab.gnome.org/GNOME/pitivi/issues",
	    description: "All project issues.",
	    tags: ["Development", "Issues"]
	},

	{
	    title: "Commit Message Format",
	    image: "Git.png",
	    link: "https://wiki.gnome.org/Newcomers/SubmitContribution",
	    description: "Format for commit messages (halfway through)..",
	    tags: ["Development", "Issues", "Reference"]
	},

	{
	    title: "Git (feat. rebasing)",
	    image: "Git.png",
	    link: "http://developer.pitivi.org/Git.html",
	    description: "Git policies (merging and rebasing, branches, etc).",
	    tags: ["Development", "Reference", "Docs"]
	},

	{
	    title: "Development Workflow",
	    image: "dev.png",
	    link: "http://developer.pitivi.org/Development_workflow.html",
	    description: "Standard development workflow..",
	    tags: ["Development", "Reference", "Setup"]
	},

	{
	    title: "Project Architecture",
	    image: "random.png",
	    link: "http://developer.pitivi.org/Architecture.html",
	    description: "Description of Pitivi architecture.",
	    tags: ["Development", "Reference", "Docs"]
	},

	{
	    title: "Architecture of Main Library (GES)",
	    image: "GES.png",
	    link: "https://gstreamer.freedesktop.org/data/doc/gstreamer/head/gstreamer-editing-services/html/ges-architecture.html",
	    description: "GES architecture.",
	    tags: ["Development", "Reference", "Docs", "Libraries"]
	},

	{
	    title: "Testing Overview",
	    image: "test.png",
	    link: "http://developer.pitivi.org/Testing.html",
	    description: "Overview of testing.",
	    tags: ["Development", "Testing", "Reference"]
	},

	{
	    title: "General Library Documentation",
	    image: "lazka.png",
	    link: "http://lazka.github.io/pgi-docs/",
	    description: "PGI library docs.",
	    tags: ["Development", "Docs", "Libraries"]
	},

	{
	    title: "Library Documentation for GTK+",
	    image: "GTK.png",
	    link: "https://lazka.github.io/pgi-docs/#Gtk-3.0",
	    description: "Open issues.",
	    tags: ["Development", "Libraries", "Docs"]
	},

	{
	    title: "The Python GTK+ 3 Tutorial",
	    image: "GTK.png",
	    link: "https://python-gtk-3-tutorial.readthedocs.io/en/latest/index.html",
	    description: "Python GTK+ 3 tutorials.",
	    tags: ["Development", "Reference", "Libraries"]
	},

	{
	    title: "Library Documentation for GStreamer",
	    image: "GStreamer.jpg",
	    link: "http://lazka.github.io/pgi-docs/#Gst-1.0",
	    description: "GStreamer lib docs.",
	    tags: ["Development", "Docs", "Libraries"]
	},

	{
	    title: "Library Documentation for GES",
	    image: "GES.png",
	    link: "http://lazka.github.io/pgi-docs/#GES-1.0",
	    description: "GEB lib docs.",
	    tags: ["Development", "Libraries"]
	},

	{
	    title: "Library Documentation for unittest.mock",
	    image: "py.png",
	    link: "https://docs.python.org/3/library/unittest.mock.html",
	    description: "Unittest docs (python).",
	    tags: ["Development", "Testing", "Libraries"]
	},

	{
	    title: "Documentation Language Documentation",
	    image: "mallard.png",
	    link: "http://projectmallard.org/",
	    description: "Project Mallard docs.",
	    tags: ["Development", "Reference"]
	},

	{
	    title: "Coding Style",
	    image: "code.png",
	    link: "https://gitlab.gnome.org/GNOME/pitivi/blob/master/docs/Coding_style_guide.md",
	    description: "Pitivi code style guides.",
	    tags: ["Development", "Reference"]
	},

	{
	    title: "Base Coding Style",
	    image: "code.png",
	    link: "https://google.github.io/styleguide/pyguide.html",
	    description: "General code style guides.",
	    tags: ["Development", "Reference", "Basic"]
	},

	{
	    title: "Riot.im Room",
	    image: "riot.png",
	    link: "https://riot.im/develop/#/room/#pitivi:matrix.org",
	    description: "Dev forums and chat.",
	    tags: ["Communication", "Issues"]
	}
];

function getTagId(tag) {
	return tag.replace(/ /g, '-');
}

function getTagFromId(id) {
	return id.replace(/-/g, ' ');
}

var filterTagsOptions = new Set();
var filterTagsSelected = new Set();

function displayTiles() {
	var tiles = "";
	for (datum of pitivi_data) {
		const releventTags = datum.tags.map(tag => getTagId(tag));
		filterTagsOptions = new Set([...filterTagsOptions, ...releventTags]);
		if ([...filterTagsSelected].some(tag => releventTags.includes(tag))) {
			tiles += `<a href="${datum.link}"><li class="team-tile"><div class="flip-container" ontouchstart="this.classList.toggle('hover');">
			    <div class="flipper">
					<div class="front" margin="auto" align="center">
						<h3>${datum.title}</h3>
			            <img src="assets/${datum.image}" alt="CSS Flip Card 2" width="200px" height="200px">
			        </div>
			        <div class="back">
			            <h2>${datum.title}</h2> 
			            <table>
			                <tr>
			                    <td>Tags: ${releventTags.join(', ')}</td>
			                </tr>
			                <tr></tr>
			                <tr>
			                    <td>Description: ${datum.description}</td>
			                </tr>
			                <tr></tr>
			                <tr>
			                    <td>(click tile to visit link)</td>
			                </tr>
			            </table>
			        </div>
			    </div>
			</div></li></a>
			`;
		}
	}
	$("#project-tiles").html(`${tiles}`);
}

function displayChecks() {
	var checkboxes = "";
	for (tag of filterTagsOptions) {
		const id = getTagId(tag);
		const checked = filterTagsSelected.has(id) ? "checked" : "";
		checkboxes += `<li><input type="checkbox" id="${id}" onclick="filterTiles('${id}')" ${checked}>${getTagFromId(tag)}</li>
		`;
	}
	const allChecked = (filterTagsOptions.size == filterTagsSelected.size) ? "checked" : "";
	checkboxes += `<li><input type="checkbox" id="all-tags" onclick="showAllTiles()" ${allChecked}>All Links</li>
	`;
	$("#tags-filter-checkboxes").html(`${checkboxes}`);
}

function filterTiles(id) {
	if (filterTagsSelected.has(id)) {
		filterTagsSelected.delete(id);
	} else {
		filterTagsSelected.add(id);
	}
	displayChecks();
	displayTiles();
}

function showAllTiles() {
	if (filterTagsOptions.size == filterTagsSelected.size) {
		filterTagsSelected = new Set();
	} else {
		filterTagsSelected = new Set([...filterTagsOptions]);
	}
	displayChecks();
	displayTiles();
}

displayTiles();
showAllTiles();

























































