const allMembersElement = document.getElementsByClassName("all-members")[0]

//Pasar esto a un fragment
//Manejo del dom
function createMember(id, imgSrc, name) {
    let memberDiv = createElementWithClass("div", "member")
    let imgContainerDiv = createElementWithClass("div", "profileImgContainer")
    let imgElement = createImgElement(imgSrc)
    imgContainerDiv.appendChild(imgElement)
    memberDiv.appendChild(imgContainerDiv)
    let memberNameDiv = createElementWithClass("div", "memberName", name)
    memberDiv.appendChild(memberNameDiv)
    let memberIdDiv = createElementWithClass("div", "memberId", id)
    memberDiv.appendChild(memberIdDiv)
    return memberDiv;
}

function createElementWithClass(elementType, className, textContent) {
    let element = document.createElement(elementType)
    element.className = className
    element.textContent = textContent
    return element;
}

function createImgElement(src, className) {
    let imgElement = document.createElement("img")
    imgElement.src = src
    imgElement.className = className
    return imgElement;
}

function renderData(allMembers) {
    for (let member of allMembers) {
        let memberElement = createMember(member["fullName"], member["imgProfile"], member["userId"])
        allMembersElement.appendChild(memberElement)
    }
}

let url = "http://127.0.0.1:5550/api/v0/getAllMembers/"

let req = new XMLHttpRequest();
req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(req.responseText))
        renderData(JSON.parse(req.responseText))
    }
};

req.open("GET", url, true);
req.send();