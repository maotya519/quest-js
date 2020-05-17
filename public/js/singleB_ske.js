import { Monster, Brave } from './util.js';
let brave_atk;
let skelton_atk;
let res;
let recover;
console.log("スケルトン");

let skelton = new Monster( 'skelton', 300 );
let user = new Brave( 500 , 40 );

Monster.prototype.remainHp = function( brave_atk ) {
    while ( skelton.physical > 0 ) {
        return skelton.physical -= brave_atk;
    }
}
Monster.prototype.attackTheBrave = function()  {
    console.log( `モンスターから${ skelton_atk }のダメージ`);
    console.log(`勇者の残りの体力${user.remainHp(skelton_atk)}`);
}
Brave.prototype.remainHp = function ( skelton_atk ) {
    while ( user.physical > 0 ) {
        return user.physical -= skelton_atk;
    }
}

Brave.prototype.attack = function() {
    // 勇者の攻撃力(打撃)
    brave_atk = Math.floor(Math.random() * 30 );
        if ( brave_atk >= 25 ) {
            console.log( `かいしんの　いちげき！
                        　${ skelton.name }に${ brave_atk }のダメージ`);
            console.log(`モンスターの残りの体力 ${skelton.remainHp(brave_atk)}`);
            setTimeout( skelton.attackTheBrave , 5000 );

        } else if ( brave_atk >= 1 ) {
            console.log( `ゆうしゃの　こうげき！
                        　${skelton.name}に${ brave_atk }のダメージ`);
            console.log(`モンスターの残りの体力 ${skelton.remainHp(brave_atk)}`);
            setTimeout( skelton.attackTheBrave , 5000 );

        } else {
            console.log( `ミス！
                        　${skelton.name}に　ダメージを　あたえられない！！`);

                        setTimeout( skelton.attackTheBrave , 5000 );

        }
    }


function noneTouch() {
    document.querySelectorAll(".command").forEach( cmd => {
        cmd.style.pointerEvents = "none";
        console.log("5秒間操作不可");
        setTimeout( function() {
            cmd.style.pointerEvents = "auto";
            console.log("操作できます");
        }, 5000 );
    });
}

//Switch when you press something other than magic
function switchOtherThanMagic() {
    document.querySelectorAll('.command').forEach( cmd => {
        cmd.addEventListener('click', ()=> {
            if ( cmd.dataset.text === "道具" ) {
                let sub_magics_cmd = document.querySelector(".sub-command-magics");
                sub_magics_cmd.classList.remove("showMagics");
            }
            if ( cmd.dataset.text === "攻撃" ) {
                let sub_magics_cmd = document.querySelector(".sub-command-magics");
                sub_magics_cmd.classList.remove("showMagics");
            }
            if ( cmd.dataset.text === "逃げる" ) {
                let sub_magics_cmd = document.querySelector(".sub-command-magics");
                sub_magic_cmd.classList.remove("showMagics");
            }
    },false);
    });
}
//Switch when you press something other than item
function switchOtherThanItem() {
    document.querySelectorAll('.command').forEach( cmd => {
        cmd.addEventListener('click', ()=> {
            if ( cmd.dataset.text === "魔法") {
                let sub_item_cmd = document.querySelector(".sub-command-items");
                sub_item_cmd.classList.remove("showItems");
            }
            if ( cmd.dataset.text === "攻撃") {
                let sub_item_cmd = document.querySelector(".sub-command-items");
                sub_item_cmd.classList.remove("showItems");
            }
            if ( cmd.dataset.text === "逃げる") {
                let sub_item_cmd = document.querySelector(".sub-command-items");
                sub_item_cmd.classList.remove("showItems");
            }
        },false);
    });
}
function switchMagicCmd() {
    let sub_magics_cmd = document.querySelector(".sub-command-magics");
    if ( sub_magics_cmd.classList.contains("showMagics")) {
        sub_magics_cmd.classList.remove("showMagics");
    } else {
        sub_magics_cmd.classList.add("showMagics");
    }
}
function switchItemsCmd() {
    let sub_item_cmd = document.querySelector(".sub-command-items");
    if ( sub_item_cmd.classList.contains("showItems")) {
        sub_item_cmd.classList.remove("showItems");
    } else {
        sub_item_cmd.classList.add("showItems");
    }
}
//イベント処理 --------------------------------

document.querySelector(".command-list").addEventListener("click" ,e => {
    skelton_atk = skelton.attack;
    if ( e.target.textContent === "こうげき" ) {
        user.attack();
        noneTouch();
    }
    if ( e.target.textContent === "まほう" ) {
        switchMagicCmd();
        switchOtherThanMagic();
    }
    if ( e.target.textContent === "どうぐ" ) {
        switchItemsCmd();
        switchOtherThanItem();
    }

    if ( e.target.textContent === "にげる" ) {
        console.log( "にげる" );
        noneTouch();
        skelton_atk = skelton.attack;
        setTimeout( skelton.attackTheBrave , 5000 );
    }
},false);

//----------------------------------------

//魔法
document.querySelector('.fire').addEventListener('click', (e)=> {
    res = confirm("ファイアの説明が入ります");
    console.log( res );
    if( res ) {
        if ( e.target.parentElement.classList.contains('showMagics')) {
            e.target.parentElement.classList.remove('showMagics');
        }
    //魔法（ファイア）
    brave_atk = Math.floor(Math.random() * 200 );
    console.log( `ファイア ${ brave_atk } のダメージ`);
    console.log(`モンスターの残りの体力 ${skelton.remainHp(brave_atk)}`);
    noneTouch();
    skelton_atk = skelton.attack;
    setTimeout( skelton.attackTheBrave , 5000 );
    }
    else {
        console.log('キャンセルがクリックされました');
        return;
    }

},false);
document.querySelector('.thunder').addEventListener('click', (e)=> {
    res = confirm("サンダーの説明が入ります");

    if( res ) {
        if ( e.target.parentElement.classList.contains('showMagics')) {
            e.target.parentElement.classList.remove('showMagics');
        }
        //魔法（サンダー）
        brave_atk = Math.floor(Math.random() * 200 );
        console.log( `サンダー ${ brave_atk } のダメージ`);
        console.log(`モンスターの残りの体力 ${skelton.remainHp(brave_atk)}`);
        noneTouch();
        skelton_atk = skelton.attack;
        setTimeout( skelton.attackTheBrave , 5000 );

    }
    else {
        console.log('キャンセルがクリックされました');
        return;
    }

},false);
document.querySelector('.quake').addEventListener('click', (e)=> {
    res = confirm("クエイクについての説明が入ります");
    if( res ) {
        if ( e.target.parentElement.classList.contains('showMagics')) {
            e.target.parentElement.classList.remove('showMagics');
            }
            //魔法（クエイク）
            brave_atk = Math.floor(Math.random() * 200 );
            console.log( `クエイク ${ brave_atk } のダメージ`);
            console.log(`モンスターの残りの体力 ${skelton.remainHp(brave_atk)}`);
            noneTouch();
            skelton_atk = skelton.attack;
            setTimeout( skelton.attackTheBrave , 5000 );

    }
    else {
        console.log('キャンセルがクリックされました');
        return;
    }

},false);
document.querySelector('.recovery').addEventListener('click', (e)=> {
    res = confirm("ホイミについての説明が入ります。");
    if( res ) {
        if ( e.target.parentElement.classList.contains('showMagics')) {
            e.target.parentElement.classList.remove('showMagics');
        }
        // 魔法（回復）
        recover = Math.floor(Math.random() * 50 );
        user.physical += recover;
        console.log( user.physical );
        noneTouch();
        skelton_atk = skelton.attack;
        setTimeout( skelton.attackTheBrave , 5000 );

    }
    else {
        console.log('キャンセルがクリックされました');
        return;
    }
},false);



//道具
document.querySelector('.herb').addEventListener('click', (e)=> {
    res = confirm("薬草に関しての説明が入ります。");
    if( res ) {
        if ( e.target.parentElement.classList.contains('showItems')) {
            e.target.parentElement.classList.remove('showItems');
        }
        // 道具（回復）
        recover = Math.floor(Math.random() * 100 );

        user.physical += recover;
        console.log( user.physical );
        noneTouch();
        skelton_atk = skelton.attack;
        setTimeout( skelton.attackTheBrave , 5000 );

    }
    else {
        console.log('キャンセルがクリックされました');
        return;
    }

},false);
document.querySelector('.stone').addEventListener('click', (e)=> {
    res = confirm(" いしつぶについての説明が入ります" );
    if( res ) {
        if ( e.target.parentElement.classList.contains('showItems')) {
            e.target.parentElement.classList.remove('showItems');
        }
        //道具（いしつぶて）
        brave_atk = Math.floor(Math.random() * 20 );
        console.log( `いしつぶ ${ brave_atk } のダメージ`);
        console.log(`モンスターの残りの体力 ${skelton.remainHp(brave_atk)}`);
        noneTouch();
        skelton_atk = skelton.attack;
        setTimeout( skelton.attackTheBrave , 5000 );

    }
    else {
        console.log('キャンセルがクリックされました');
        return;
    }

},false);
document.querySelector('.medicine').addEventListener('click', (e)=> {
    res = confirm("秘薬についての説明が入ります。");
    if( res ) {
        if ( e.target.parentElement.classList.contains('showItems')) {
            e.target.parentElement.classList.remove('showItems');
        }
        // 道具（回復）
        recover = Math.floor(Math.random() * 100 );
        user.physical += recover;
        console.log(user.physical );
        noneTouch();
        skelton_atk = skelton.attack;
        setTimeout( skelton.attackTheBrave , 5000 );
    }
    else {
        console.log('キャンセルがクリックされました');
        return;
    }

},false);