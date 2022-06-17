window.addEventListener('DOMContentLoaded', function () {
    const Name = document.getElementById("name");
    const Id = document.getElementById("id");
    const time = document.getElementById("time");
    const icon = document.getElementById("icon");
    const text = document.getElementById("text");
    const hash = document.getElementById("#");

    function input_text(event) {
        const ID = event.target.id;
        if (ID == 'name') {
            const Name_ = document.getElementById("user_name");
            Name_.textContent = Name.value
        } else if (ID == 'id') {
            const Id_ = document.getElementById("user_id");
            Id_.textContent = Id.value
        } else if (ID == 'time') {
            const Time_ = document.getElementById("Tweet_time");
            Time_.textContent = time.value
        } else if (ID == 'icon') {
            const icon_ = document.getElementById("icon_image");
            icon_.setAttribute('src', icon.value)
        } else if (ID == '#') {
            const hashs = document.getElementById("hash_text");
            hashs.innerHTML = '';
            const hash_text = hash.value.split(' ');
            for (i = 0; i < hash_text.length; i++) {
                console.log(hash_text[i]);
                if (hash_text[i] == "") {
                    ;
                } else {
                    hashs.insertAdjacentHTML('beforeend', "<span class='ms-1 mb-0 mt-0'>#" + hash_text[i] + "</span>");
                }
            }
        } else if(ID == 'text'){
            const text_ = document.getElementById("tweet_text");
            text_.innerHTML = text.value.replace(/\r?\n/g, '<br>');
        }
    }

    addEventListener('input', input_text);
})
