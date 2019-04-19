var people = [];
$(document).ready(function () {
    getPeople();
    initPage();
});
//Getting Users from web services
function getPeople() {
    people = [
         { text: "علی", value: "1" },
         { text: "اکبر", value: "2" },
         { text: "محمد", value: "3" }
    ];
}
function initPage() {
    $("#assignedTo").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: people,
        index:0
    });
    var assignedTo = $("#assignedTo").data("kendoDropDownList");
    assignedTo.value("");
    assignedTo.trigger("change");
    $("#priority").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: [
         { text: "کم", value: "1" },
         { text: "متوسط", value: "2" },
         { text: "زیاد", value: "3" }
        ],
        index:0
    });
    var priority = $("#priority").data("kendoDropDownList");
    priority.value("");
    priority.trigger("change");
    $("#submit").kendoButton();
}
