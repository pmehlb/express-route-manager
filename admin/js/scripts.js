const routeCard = `<div id="route-new" class="card" data-route="new"><h2 class="header">TEST</h2><small class="subtitle"></small><hr><p class="content"></p></div>`;

$("#add-route").click(() => {
    if ($("#route-new").length) {
        $("#route-new").focus();
    }
    let newCard = $("#routes").append(routeCard);
});

$("#save").click(() => {

});