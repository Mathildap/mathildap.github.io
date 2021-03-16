fetch("https://api.github.com/users/Mathildap/repos")
.then(response => response.json())
.then(data => {
    console.log(data[1]);

    repo1.insertAdjacentHTML("beforeend", "<i class='fab fa-github gh'></i>" + "<a target='_blank' class='github' href='"+ data[1].html_url +"'>" + "To-do List" + "</a>");
});

const repo1 = document.getElementById("repo1");