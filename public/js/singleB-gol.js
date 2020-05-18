import { Monster, Brave } from './util.js';
let brave_atk,golem_atk,res,recover,
    hp = document.querySelector(".hp"),
    mp = document.querySelector(".mp"),
    one = document.querySelector('.one-tx'),
    two = document.querySelector('.two-tx'),
    three = document.querySelector('.three-tx');
let msg = document.querySelector('.status-tx');

console.log("ゴーレム");

let golem = new Monster( 'ゴーレム', 300 );
let user = new Brave( '勇者' , 500 , 40 );
let name = document.querySelector('.name');
name.innerHTML = user.name;
hp.innerHTML = user.physical;
mp.innerHTML = user.mp;
document.querySelector('.mon-name-tx').innerHTML = golem.name;
Monster.prototype.remainHp = function( brave_atk ) {
    while ( golem.physical > 0 ) {
        return golem.physical -= brave_atk;
    }
}
Monster.prototype.attackTheBrave = function()  {
    one.innerHTML = `モンスターから${ golem_atk }のダメージを受けた`;
    two.innerHTML = '';
    hp.innerHTML = user.remainHp(golem_atk);
}
function noneTx() {
    one.innerHTML = "";
    two.innerHTML = "";
}
Brave.prototype.remainHp = function ( golem_atk ) {
    while ( user.physical > 0 ) {
        return user.physical -= golem_atk;
    }
}

Brave.prototype.attack = function() {
    // 勇者の攻撃力(打撃)
    brave_atk = Math.floor(Math.random() * 30 );
        if ( brave_atk >= 25 ) {
            one.innerHTML = 'かいしんの　いちげき！！';
            two.innerHTML = golem.name + "に" + brave_atk + "の" + "ダメージ！！";

            console.log(`モンスターの残りの体力 ${golem.remainHp(brave_atk)}`);
            setTimeout( golem.attackTheBrave , 3000 );
            setTimeout( noneTx, 5000 );

        } else if ( brave_atk >= 1 ) {
            one.innerHTML = 'ゆうしゃ　の　こうげき！';
            two.innerHTML = golem.name + "に" + brave_atk + "の" + "ダメージ！！";
            console.log(`モンスターの残りの体力 ${golem.remainHp(brave_atk)}`);
            setTimeout( golem.attackTheBrave , 3000 );
            setTimeout( noneTx, 5000 );
        } else {
            one.innerHTML = 'ミス！';
            two.innerHTML = golem.name + "に　ダメージを　あたえられない！";
            setTimeout( golem.attackTheBrave , 3000 );
            setTimeout( noneTx, 5000 );
        }
    }


function noneTouch() {
    document.querySelectorAll(".cmd").forEach( cmd => {
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
    document.querySelectorAll('.cmd').forEach( cmd => {
        cmd.addEventListener('click', ()=> {
            if ( cmd.dataset.text === "道具" ) {
                let sub_magics_cmd = document.querySelector(".sub-cmd-magics");
                sub_magics_cmd.classList.remove("showMagics");
            }
            if ( cmd.dataset.text === "攻撃" ) {
                let sub_magics_cmd = document.querySelector(".sub-cmd-magics");
                sub_magics_cmd.classList.remove("showMagics");
            }
            if ( cmd.dataset.text === "逃げる" ) {
                let sub_magics_cmd = document.querySelector(".sub-cmd-magics");
                sub_magic_cmd.classList.remove("showMagics");
            }
    },false);
    });
}
//Switch when you press something other than item
function switchOtherThanItem() {
    document.querySelectorAll('.cmd').forEach( cmd => {
        cmd.addEventListener('click', ()=> {
            if ( cmd.dataset.text === "魔法") {
                let sub_item_cmd = document.querySelector(".sub-cmd-items");
                sub_item_cmd.classList.remove("showItems");
            }
            if ( cmd.dataset.text === "攻撃") {
                let sub_item_cmd = document.querySelector(".sub-cmd-items");
                sub_item_cmd.classList.remove("showItems");
            }
            if ( cmd.dataset.text === "逃げる") {
                let sub_item_cmd = document.querySelector(".sub-cmd-items");
                sub_item_cmd.classList.remove("showItems");
            }
        },false);
    });
}
function switchMagicCmd() {
    let sub_magics_cmd = document.querySelector(".sub-cmd-magics");
    if ( sub_magics_cmd.classList.contains("showMagics")) {
        sub_magics_cmd.classList.remove("showMagics");
    } else {
        sub_magics_cmd.classList.add("showMagics");
    }
}
function switchItemsCmd() {
    let sub_item_cmd = document.querySelector(".sub-cmd-items");
    if ( sub_item_cmd.classList.contains("showItems")) {
        sub_item_cmd.classList.remove("showItems");
    } else {
        sub_item_cmd.classList.add("showItems");
    }
}



//イベント処理 --------------------------------
document.querySelector('.btn-area').addEventListener('click', (e)=> {

    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
},{once: true });

document.querySelector(".cmd-list").addEventListener("click" ,e => {
    golem_atk = golem.attack;
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
        golem_atk = golem.attack;
        setTimeout( golem.attackTheBrave , 5000 );
    }
},false);

//----------------------------------------

//魔法
document.querySelector('.fire').addEventListener('click', (e)=> {
    res = confirm("ファイアの説明が入ります");
    if( res ) {
        if ( e.target.parentElement.classList.contains('showMagics')) {
            e.target.parentElement.classList.remove('showMagics');
        }
    //魔法（ファイア）
    brave_atk = Math.floor(Math.random() * 200 );
    one.innerHTML = "メラを　となえた！";
    two.innerHTML = golem.name + "に" + brave_atk + "の" + "ダメージ！！";

    console.log(`モンスターの残りの体力 ${golem.remainHp(brave_atk)}`);
    noneTouch();
    golem_atk = golem.attack;
    setTimeout( golem.attackTheBrave , 3000 );
    setTimeout( noneTx, 5000 );

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
        one.innerHTML = "サンダーを　となえた！";
        two.innerHTML = golem.name + "に" + brave_atk + "の" + "ダメージ！！";

        console.log(`モンスターの残りの体力 ${golem.remainHp(brave_atk)}`);
        noneTouch();
        golem_atk = golem.attack;
        setTimeout( golem.attackTheBrave , 3000 );
        setTimeout( noneTx, 5000 );


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
            one.innerHTML = "クエイクを　となえた！";
            two.innerHTML = golem.name + "に" + brave_atk + "の" + "ダメージ！！";

            console.log(`モンスターの残りの体力 ${golem.remainHp(brave_atk)}`);
            noneTouch();
            golem_atk = golem.attack;
            setTimeout( golem.attackTheBrave , 3000 );
            setTimeout( noneTx, 5000 );


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
        one.innerHTML = "ホイミを　となえた！";
        two.innerHTML = "キズが回復した！";

        user.physical += recover;
        // console.log( user.physical );
        hp.innerHTML = user.physical;
        noneTouch();
        golem_atk = golem.attack;
        setTimeout( golem.attackTheBrave , 3000 );
        setTimeout( noneTx, 5000 );


    }
    else {
        console.log('キャンセルがクリックされました');
        return;
    }
},false);



//道具
document.querySelector('.herb').addEventListener('click', (e)=> {
    res = confirm("一つ所有しています。薬草に関しての説明が入ります。");
    if( res ) {
        if ( e.target.parentElement.classList.contains('showItems')) {
            e.target.parentElement.classList.remove('showItems');
        }
        // 道具（回復）
        recover = Math.floor(Math.random() * 100 );
        one.innerHTML = "やくそうを　つかった！";
        two.innerHTML = "少しキズが回復した！";

        user.physical += recover;
        console.log( user.physical );
        noneTouch();
        golem_atk = golem.attack;
        setTimeout( golem.attackTheBrave , 3000 );
        setTimeout( noneTx, 5000 );


    }
    else {
        console.log('キャンセルがクリックされました');
        return;
    }

},{once: true });

document.querySelector('.stone').addEventListener('click', (e)=> {
    res = confirm(" 一つ所有していますいしつぶについての説明が入ります" );
    if( res ) {
        if ( e.target.parentElement.classList.contains('showItems')) {
            e.target.parentElement.classList.remove('showItems');
        }
        //道具（いしつぶて）
        brave_atk = Math.floor(Math.random() * 20 );
        one.innerHTML = golem.name + "いしつぶをぶつけた！";
        two.innerHTML = brave_atk + "のダメージを　あたえた！";

        console.log(`モンスターの残りの体力 ${golem.remainHp(brave_atk)}`);
        noneTouch();
        golem_atk = golem.attack;
        setTimeout( golem.attackTheBrave , 3000 );
        setTimeout( noneTx, 5000 );


    }
    else {
        console.log('キャンセルがクリックされました');
        return;
    }

},{once: true });

document.querySelector('.medicine').addEventListener('click', (e)=> {
    res = confirm("秘薬についての説明が入ります。");
    if( res ) {
        if ( e.target.parentElement.classList.contains('showItems')) {
            e.target.parentElement.classList.remove('showItems');
        }
        // 道具（回復）
        recover = Math.floor(Math.random() * 100 );
        one.innerHTML = "ひやくを　つかった！";
        two.innerHTML = "キズが回復した！";

        user.physical += recover;
        console.log(user.physical );
        noneTouch();
        golem_atk = golem.attack;
        setTimeout( golem.attackTheBrave , 3000 );
        setTimeout( noneTx, 5000 );

    }
    else {
        console.log('キャンセルがクリックされました');
        return;
    }

},{once: true });
