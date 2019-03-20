$(function(){


  function buildHTML(message){

    var image = (message.image)? `<image class= "lower-message__image" src= ${message.image}>` :``
    var html = `<div class = "message" data-message-id= ${message.id} >

  function buildHTML(message){

    var image = (message.image)? `<image class= "lower-message__image" src= ${message.image}>` :``
    var html = `<div class = "message">

                  <div class = "upper-message">
                    <div class = "upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class= "upper-message__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class= "lower-meesage">
                    <p class= "lower-message__content">
                      ${message.content}
                    </p>
                    <div class= "image">
                      ${image}
                    </div>
                  </div>
                </div>`
    return html;
  }


//非同期メッセージ
=======

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $("form")[0].reset();

      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $(".form__submit").removeAttr("disabled");

      // $('.form__message').val('')
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');

    })
    .fail(function(){
      alert('error');
    })
  });


  //自動更新
  setInterval(update, 5000)
  var interval = setInterval
  function update(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      if($('.messages')[0]){
        var message_id = $('.message:last').data('message-id');
      } else {
        var message_id = 0
      }
      $.ajax({
        type: 'GET',
        url: location.href,
        data: {id: message_id},
        dataType: 'json'
      })
      .done(function(messages){
        messages.forEach(function(message) {
          var html = buildHTML(message);
          $('.messages').append(html)
        });
      })
      .fail(function(){
        alert('自動更新失敗しました');
      })
    } else {
      clearInterval(interval);
    }
  }


});
