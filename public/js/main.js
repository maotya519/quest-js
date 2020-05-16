
let Monster = function( name, physical) {
    this.name = name;
    this.physical = physical
};
let Brave = function( physical, mp ) {
    this.physical = physical;
};
let skelton = new Monster( 'skelton', 300 );
let user = new Brave( 500 , 40 );



console.log( skelton.physical );
console.log( user.physical );


document.querySelector(".command-list").addEventListener("click" ,e => {
    if ( e.target.textContent === "こうげき" ) {
        console.log( "こうげき" );
        document.querySelectorAll(".command").forEach( cmd => {
            cmd.style.pointerEvents = "none";
            console.log("5秒間操作不可");
            setTimeout( function() {
                cmd.style.pointerEvents = "auto";
                console.log("操作できます");
            }, 5000 );
        });
    }

    if ( e.target.textContent === "まほう" ) {
        let sub_magic_cmd = document.querySelector(".sub-command-magics");

        if ( sub_magic_cmd.classList.contains("showMagics")) {
            sub_magic_cmd.classList.remove("showMagics");
        } else {
            sub_magic_cmd.classList.add("showMagics");
        }
        document.querySelectorAll('.command').forEach( cmd => {
            cmd.addEventListener('click', ()=> {
                if ( cmd.dataset.text === "道具" ) {
                    let sub_item_cmd = document.querySelector(".sub-command-items");
                    sub_magic_cmd.classList.remove("showMagics");

                }
            },false);
        });
    }
    if ( e.target.textContent === "どうぐ" ) {
        let sub_item_cmd = document.querySelector(".sub-command-items");

        if ( sub_item_cmd.classList.contains("showItems")) {
            sub_item_cmd.classList.remove("showItems");
        } else {
            sub_item_cmd.classList.add("showItems");
        }
        document.querySelectorAll('.command').forEach( cmd => {
            cmd.addEventListener('click', ()=> {
                if ( cmd.dataset.text === "魔法" ) {
                    let sub_item_cmd = document.querySelector(".sub-command-items");
                    sub_item_cmd.classList.remove("showItems");
                }
            },false);
        });
    }

    if ( e.target.textContent === "にげる" ) {
        console.log( "にげる" );
        document.querySelectorAll(".command").forEach( cmd => {
            cmd.style.pointerEvents = "none";
            console.log("5秒間操作不可");
            setTimeout( function() {
                cmd.style.pointerEvents = "auto";
                console.log("操作できます");
            }, 5000 );
        });
    }
},false);
