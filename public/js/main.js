document.querySelector('.btn').addEventListener('click', ()=> {
    let rmd = Math.floor(Math.random()* 3 + 1);
    switch ( rmd ) {
        case 1:
        console.log( "ゴブリン");
        window.open('singleB-gob', '_blank');
        break;
        case 2:
        console.log( "スケルトン");
        window.open('singleB-ske', '_blank');
        break;
        case 3:
        console.log(　"ゴーレム");
        window.open('singleB-gol', '_blank');
        break;
    }
},false);
