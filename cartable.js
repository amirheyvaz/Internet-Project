//variable
var cartableData = [], selectWindow, people = [];
$(document).ready(function () {
    getVariables();
    buildGrid();
});
//Getting variables from web services
function getVariables() {
    people = [
        { text: "علی", value: "علی" },
        { text: "اکبر", value: "اکبر" },
        { text: "محمد", value: "محمد" }
    ];
    cartableData = [
        {
            num: 1,
            name: "تست 1",
            assignedTo: "علی",
            status: "درحال بررسی",
            createdDate: "1398/5/4",
            maker: "محمد",
            priority: "کم",
            description: "توضیخات مربوطه برای تست 1"

        },
        {
            num: 1,
            name: "تست 2",
            assignedTo: "اکبر",
            status: "بسته",
            createdDate:"1398/2/7",
            maker: "اصفر",
            priority: "زیاد",
            description: "توضیخات مربوطه برای تست 2"

        }
    ];
}
function buildGrid() {
    $("#grid").kendoGrid({
        columns: [{
            field: "name",
            title: "نام"
        },
        {
            field: "assignedTo",
            title: "اختصاص داده شده به"
        },
         {
             field: "status",
             title: "وضعیت"
         },
          {
              field: "priority",
              title: "اولویت"
          },
         {
             field: "maker",
             title: "سازنده"
         },
         {
             field: "createdDate",
             title: "تاریخ ساخت"
         },
        { command: { text: "اقدام", click: selectItem }, title: " ", width: "180px" }],
        dataSource: {
            data: cartableData
        },
        sortable: true,
        filterable: true,
        pageSize : 20
    });
    selectWindow = $("#selectWindow")
                     .kendoWindow({
                         modal: true,
                         visible: false,
                         resizable: false,
                         width: 800
                     }).data("kendoWindow");
}
function selectItem(e) {
    e.preventDefault();
    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
    //building PopUp Window
    //name
    $("#selectWindow_name").val(dataItem.name);
    //assigned to
    $("#selectWindow_assignedTo").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: people,
        index: 0
    });
    var selectWindow_assignedTo = $("#selectWindow_assignedTo").data("kendoDropDownList");
    selectWindow_assignedTo.value(dataItem.assignedTo);
    selectWindow_assignedTo.trigger("change");
    //status
    $("#selectWindow_status").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: [
          { text: "باز", value: "باز" },
         { text: "در دست بررسی", value: "در دست بررسی" },
         { text: "بسته", value: "بسته" }
        ],
        index: 0
    });
    var selectWindow_status = $("#selectWindow_status").data("kendoDropDownList");
    selectWindow_status.value(dataItem.status);
    selectWindow_status.trigger("change");
    //priority
    $("#selectWindow_priority").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: [
          { text: "کم", value: "کم" },
         { text: "متوسط", value: "متوسط" },
         { text: "زیاد", value: "زیاد" }
        ],
        index: 0
    });
    var selectWindow_priority = $("#selectWindow_priority").data("kendoDropDownList");
    selectWindow_priority.value(dataItem.priority);
    selectWindow_priority.trigger("change");
    //description
    $("#selectWindow_description").val(dataItem.description);
    //submit
    $("#selectWindow_submit").kendoButton();

    selectWindow.center().open();
}