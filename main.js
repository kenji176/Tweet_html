window.addEventListener('DOMContentLoaded', function () {
    const Name = document.getElementById("name");
    const Id = document.getElementById("id");
    const time = document.getElementById("time");
    const icon = document.getElementById("icon");
    const text = document.getElementById("text");
    const hash = document.getElementById("#");

    function Name_change() {
        const Name_ = document.getElementById("user_name");
        Name_.textContent = Name.value
    }

    function Id_change() {
        const Id_ = document.getElementById("user_id");
        Id_.textContent = Id.value
    }

    function time_change() {
        const Time_ = document.getElementById("Tweet_time");
        Time_.textContent = time.value
    }

    function icon_change() {
        const icon_ = document.getElementById("icon_image");
        icon_.setAttribute('src', icon.value)
    }

    function text_change() {
        const text_ = document.getElementById("tweet_text");
        text_.innerHTML = text.value.replace(/\r?\n/g, '<br>');
    }

    function hash_change() {
        const hashs = document.getElementById("hash_text");
        hashs.innerHTML='';
        const hash_text = hash.value.split(' ');
        for (i = 0; i < hash_text.length; i++) {
            console.log(hash_text[i]);
            if (hash_text[i] == ""){
                ;
            }else{
                hashs.insertAdjacentHTML('beforeend',"<span class='ms-1'>#"+hash_text[i]+"</span>");
            }
        }
    }


    Name.addEventListener('input', Name_change);
    Id.addEventListener('input', Id_change);
    time.addEventListener('input', time_change);
    icon.addEventListener('input', icon_change);
    text.addEventListener('input', text_change);
    hash.addEventListener('input', hash_change);
})