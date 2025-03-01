const groups = [];
let groupId = 0;

const groupsWrapper = document.getElementById('groups');
const createGroupPopover = document.getElementById('group-create-popover');

function handlePositionChange(){
    // TODO for supporting drag and drop
    // groupsWrapper.childNodes.forEach((node) => {
    //     node
    // });
}

function handleGroupRender(newGroup){
    if(!groupsWrapper){
        return;
    }
    let groupCard = document.createElement('a')
    groupCard.href = `/group.html?groupId=${newGroup.id}`
    groupCard.innerText = newGroup.name;
    groupCard.className = "groupCard"
    groupCard.draggable = true;
    groupCard.ondragend = (e) => {
        console.log(e)
    }
    groupsWrapper.appendChild(groupCard);
}

function handleGroupCreation(event){
    event.preventDefault();
    let groupName = event.target[0].value;
    if(!event.target[0].value){
        return;
    }
    let newGroup = {
        id: groupId,
        name: groupName,
        createdAt: Date.now()
    }
    event.target[0].value = ""
    groups.push(newGroup)
    createGroupPopover.hidePopover()
    localStorage.setItem('groups', JSON.stringify(groups))
    handleGroupRender(newGroup)
}

function paintDataIfExists(){
    let groups = localStorage.getItem('groups');
    if(!groups){
        return;
    }
    groups = JSON.parse(groups);
    groups.forEach((group) => {
        handleGroupRender(group)
    })
}

paintDataIfExists()