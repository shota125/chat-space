$(function() {

  var search_list = $("#user-search-result");

function appendUser(user) {
  var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</a>
              </div>`
  search_list.append(html);
}

function appndErrMsgToHTML(msg){
  var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${ msg }</p>
              </div>`
  search_list.append(html);
}

function appendName(name, id) {
  var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                <input name='group[user_ids][]' type='hidden' value='${id}'>
                <p class='chat-group-user__name'>${name}</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
              </div>`
$("#chat-group-users").append(html);
}
//追加及び削除(追加箇所)
  $(document).on("click", ".user-search-add", function(){
    var id = $(this).data("user-id");
    var name = $(this).data("user-name");
    appendName(name, id);
    $(this).parent().remove()
  })

//削除のみ（削除箇所）※追加は必要ない
  $(document).on("click", ".user-search-remove", function(){
    $(this).parent().remove();
  })

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      datatype: 'json'
    })
    .done(function(users){
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appndErrMsgToHTML("一致する名前はありません。")
      }
    })
    .fail(function(){
      alert("ユーザー検索に失敗しました")
    });
  });
});
